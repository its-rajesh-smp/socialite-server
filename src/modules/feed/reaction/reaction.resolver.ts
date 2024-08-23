import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { OperationTypes } from 'src/common/constants/common';
import { User } from 'src/common/decorators/user.decorator';
import IUser from 'src/common/types/user';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { PostService } from '../post/post.service';
import { ReactPostDto } from './reaction.dto';
import { ReactionService } from './reaction.service';

@Resolver('Reaction')
export class ReactionResolver {
  private pubSub: PubSub;
  constructor(
    private readonly reactionService: ReactionService,
    private readonly postService: PostService,
  ) {
    this.pubSub = new PubSub();
  }

  /**
   *  Resolver for react post
   * @param reactPostInput
   * @param user
   * @returns
   */
  @Mutation('reactPost')
  @UseGuards(AuthGuard)
  async reactPost(
    @Args('reactPostData') reactPostInput: ReactPostDto,
    @User() user: IUser,
  ) {
    const { postId, operationType, reactionType } = reactPostInput;

    const payload = {
      userId: user.id,
      postId,
      reactionType,
    };

    // Handling the reaction logic
    const reaction = await this.handleReaction(reactPostInput, payload);

    const option = {
      include: {
        user: true,
        comments: {
          include: {
            user: true,
          },
          take: 2,
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    };

    // Getting the updated post
    const updatePost = await this.postService.getOnePost(
      {
        id: postId,
      },
      option,
    );

    // Publishing the updated post
    this.pubSub.publish('onPostUpdate', {
      onPostUpdate: {
        ...updatePost,
        user: user,
      },
    });

    return {
      ...reaction,
      operationType,
    };
  }

  /**
   * Handles the reaction logic based on the operation type
   * @param reactPostInput
   * @param payload
   * @returns
   */
  private async handleReaction(reactPostInput: ReactPostDto, payload: any) {
    // Handling the reaction logic
    // Performing action based on operation type
    // if create: creating reaction and sending created reaction
    // if delete: deleting reaction and sending deleted reaction
    switch (reactPostInput.operationType) {
      case OperationTypes.CREATE:
        return this.handleCreateReaction(payload, reactPostInput.postId);
      case OperationTypes.DELETE:
        return this.handleDeleteReaction(payload, reactPostInput.postId);
      default:
        throw new Error('Invalid operation type');
    }
  }

  /**
   * Handles creating a reaction
   * @param payload
   * @param postId
   * @returns
   */
  private async handleCreateReaction(payload: any, postId: string) {
    const [createdReaction] = await Promise.all([
      this.reactionService.createOneReaction(payload),
      this.postService.increment({ id: postId }, 'totalLikeCount'),
    ]);
    return createdReaction;
  }

  /**
   * Handles deleting a reaction
   * @param payload
   * @param postId
   * @returns
   */
  private async handleDeleteReaction(payload: any, postId: string) {
    const currentReaction = await this.reactionService.getOneReaction(payload);

    if (!currentReaction) {
      throw new Error('Reaction not found');
    }

    await Promise.all([
      this.reactionService.deleteReactions({ id: currentReaction.id }),
      this.postService.decrement({ id: postId }, 'totalLikeCount'),
    ]);

    return currentReaction;
  }

  /**
   * Subscription for react post
   */
  @Subscription('onPostReact')
  @UseGuards(AuthGuard)
  onPostReact() {
    return this.pubSub.asyncIterator('onPostReact');
  }
}

import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { User } from 'src/common/decorators/user.decorator';
import IUser from 'src/common/types/user';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { PostService } from '../post/post.service';
import { CreateCommentDto } from './comment.dto';
import { CommentService } from './comment.service';

/**
 * Resolver for comment
 */
@Resolver('Comment')
export class CommentResolver {
  private pubSub: PubSub;
  constructor(
    private commentService: CommentService,
    private postService: PostService,
  ) {
    this.pubSub = new PubSub();
  }

  /**
   * Function to create comment
   * @param req
   * @param createCommentInput
   * @returns
   */
  @Mutation('createComment')
  @UseGuards(AuthGuard)
  async createComment(
    @User() user: IUser,
    @Args('commentData') commentData: CreateCommentDto,
  ) {
    const { postId, text } = commentData;

    const payload = {
      text,
      userId: user.id,
      postId,
    };

    const [createdComment] = await Promise.all([
      this.commentService.createAComment(payload),
      this.postService.increment({ id: postId }, 'totalCommentCount'),
    ]);

    const option = {
      include: {
        user: true,
        comments: {
          include: {
            User: true,
          },
          take: 2,
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    };

    const updatedPost = await this.postService.getOnePost(
      {
        id: postId,
      },
      option,
    );

    // triggering onCommentAdded event
    this.pubSub.publish('onCommentAdded', {
      onCommentAdded: {
        ...updatedPost,
        User: user,
      },
    });

    return { ...createdComment, User: user };
  }

  /**
   * Subscribing to onCommentAdded event
   * @returns
   */
  @Subscription('onCommentAdded')
  @UseGuards(AuthGuard)
  onCommentAdded() {
    return this.pubSub.asyncIterator('onCommentAdded');
  }
}

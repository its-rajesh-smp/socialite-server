import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { User } from '../../../common/decorators/user.decorator';
import IUser from '../../../common/types/user';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { CreatePostDto } from './post.dto';
import { PostService } from './post.service';
import { ReactionService } from '../reaction/reaction.service';

/**
 * Resolver for post
 */
@Resolver('post')
export class PostResolver {
  constructor(
    private postService: PostService,
    private reactionService: ReactionService,
    @Inject('PUB_SUB') private pubSub: PubSub,
  ) {}

  /**
   * Function to get all feed posts
   * @param user
   * @returns
   */
  @Query('getAllPosts')
  @UseGuards(AuthGuard)
  async getAllPosts(@User() user: IUser) {
    const options = {
      include: {
        user: true,
        comments: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
          take: 2,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    };

    // Getting all posts with pagination
    const allPosts = await this.postService.getAllPosts({}, options);

    // Extracting post ids
    const postIds = allPosts.map((post) => post.id);
    const promises = [];

    // For each post getting the user reaction status
    postIds.forEach((postId) => {
      promises.push(
        this.reactionService.getOneReaction({
          postId,
          userId: user.id,
        }),
      );
    });

    const reactions = await Promise.all(promises);

    // Mapping posts with user reactions status
    return allPosts.map((post, index) => {
      return {
        ...post,
        isCurrentUserReacted: reactions[index] ? true : false,
      };
    });
  }

  /**
   * Function to create post
   * @param createPostInput
   * @param req
   * @returns
   */
  @Mutation('createPost')
  @UseGuards(AuthGuard)
  async createPost(
    @Args('postData') postData: CreatePostDto,
    @User() user: IUser,
  ) {
    const payload = {
      ...postData,
      userId: user.id,
    };

    const createdPost = await this.postService.createOnePost(payload);

    this.pubSub.publish('onPostAdd', {
      onPostAdd: { ...createdPost, user },
    });

    return { ...createdPost, user };
  }

  /**
   * Subscription to post added
   * @returns
   */
  @Subscription('onPostAdd')
  @UseGuards(AuthGuard)
  onPostAdd() {
    return this.pubSub.asyncIterator('onPostAdd');
  }

  /**
   * Subscription to post update
   * @returns
   */
  @Subscription('onPostUpdate')
  @UseGuards(AuthGuard)
  onPostUpdate() {
    return this.pubSub.asyncIterator('onPostUpdate');
  }
}

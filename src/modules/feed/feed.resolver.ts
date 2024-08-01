import {
  Args,
  Context,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { CreatePostDto, ReactPostDto } from './feed.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { FeedService } from './feed.service';
import { Request } from 'express';
import { PubSub } from 'graphql-subscriptions';
import { OperationTypes } from 'src/common/constants/common';

@Resolver('Feed')
export class FeedResolver {
  private pubSub: PubSub;
  constructor(private feedService: FeedService) {
    this.pubSub = new PubSub();
  }

  @Query('getFeedPosts')
  @UseGuards(AuthGuard)
  async getAllFeedPosts(@Context('req') req: Request) {
    const user = req.user;

    const options = {
      include: {
        User: true,
        NewsPostComments: {
          include: {
            User: true,
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
    const allPosts = await this.feedService.getAllPosts({}, options);

    // Extracting post ids
    const postIds = allPosts.map((post) => post.id);
    const promises = [];

    // For each post getting the user reaction status
    postIds.forEach((postId) => {
      promises.push(
        this.feedService.getOneReaction({
          NewsFeedPostsId: postId,
          UserId: user.id,
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

  // CREATE NEW POST
  @Mutation('createPost')
  @UseGuards(AuthGuard)
  async createPost(
    @Args('createPostInput') createPostInput: CreatePostDto,
    @Context('req') req: Request,
  ) {
    const payload = {
      ...createPostInput,
      UserId: req.user.id,
    };

    const post = await this.feedService.createOnePost(payload);
    this.pubSub.publish('onPostAdded', {
      onPostAdded: { ...post, User: req.user },
    });

    return { ...post, User: req.user };
  }

  // REACT TO POST
  @Mutation('reactPost')
  @UseGuards(AuthGuard)
  async reactPost(
    @Args('reactPostInput') reactPostInput: ReactPostDto,
    @Context('req') req: Request,
  ) {
    let reaction;

    const payload = {
      UserId: req.user.id,
      NewsFeedPostsId: reactPostInput.postId,
      reactionType: reactPostInput.reactionType,
    };

    // PERFORMING ACTION BASED ON OPERATION TYPE
    switch (reactPostInput.operationType) {
      // IF CREATE: CREATING REACTION AND SENDING CREATED REACTION
      case OperationTypes.CREATE:
        let [createdReaction] = await Promise.all([
          await this.feedService.createOneReaction(payload),
          await this.feedService.increment(
            {
              id: reactPostInput.postId,
            },
            'like',
          ),
        ]);
        reaction = createdReaction;
        break;

      // IF DELETE: DELETING REACTION AND SENDING DELETED REACTION
      case OperationTypes.DELETE:
        let currentReaction = await this.feedService.getOneReaction(payload);
        Promise.all([
          await this.feedService.deleteReactions({
            id: currentReaction.id,
          }),
          await this.feedService.decrement(
            {
              id: reactPostInput.postId,
            },
            'like',
          ),
        ]);
        reaction = currentReaction;
        break;
    }

    const option = {
      include: {
        User: true,
        NewsPostComments: {
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

    const post = await this.feedService.getOnePost(
      {
        id: reactPostInput.postId,
      },
      option,
    );

    // PUBLISHING EVENT FOR POST UPDATE
    this.pubSub.publish('onPostUpdate', {
      onPostUpdate: {
        ...post,
        User: req.user,
      },
    });

    return {
      ...reaction,
      operationType: reactPostInput.operationType,
    };
  }

  // SUBSCRIPTION TO CREATE NEW POST
  @Subscription('onPostAdded')
  @UseGuards(AuthGuard)
  onPostAdded() {
    return this.pubSub.asyncIterator('onPostAdded');
  }

  // SUBSCRIPTION TO UPDATE A POST
  @Subscription('onPostUpdate')
  @UseGuards(AuthGuard)
  onPostUpdate() {
    return this.pubSub.asyncIterator('onPostUpdate');
  }

  // SUBSCRIPTION TO REACT TO POST
  @Subscription('onPostReact')
  @UseGuards(AuthGuard)
  onPostReact() {
    return this.pubSub.asyncIterator('onPostReact');
  }
}

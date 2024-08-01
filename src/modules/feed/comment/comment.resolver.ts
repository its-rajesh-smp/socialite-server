import {
  Args,
  Context,
  Mutation,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { PubSub } from 'graphql-subscriptions';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { CreatePostDto } from '../feed.dto';
import { Request } from 'express';
import { AuthService } from 'src/modules/auth/auth.service';
import { FeedService } from '../feed.service';
import { CreateCommentDto } from './comment.dto';

@Resolver('Comment')
export class CommentResolver {
  private pubSub: PubSub;
  constructor(
    private commentService: CommentService,
    private feedService: FeedService,
  ) {
    this.pubSub = new PubSub();
  }

  @Mutation('createComment')
  @UseGuards(AuthGuard)
  async createComment(
    @Context('req') req: Request,
    @Args('createCommentInput') createCommentInput: CreateCommentDto,
  ) {
    const user = req.user;

    const payload = {
      text: createCommentInput.text,
      UserId: user.id,
      NewsFeedPostsId: createCommentInput.postId,
    };

    const [comment] = await Promise.all([
      this.commentService.createOneComment(payload),
      this.feedService.increment({ id: createCommentInput.postId }, 'comment'),
    ]);

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
        id: createCommentInput.postId,
      },
      option,
    );

    // PUBLISHING EVENT FOR COMMENT CREATION
    this.pubSub.publish('onCommentAdded', {
      onCommentAdded: {
        ...post,
        User: req.user,
      },
    });

    return { ...comment, User: user };
  }

  // SUBSCRIPTION TO UPDATE A POST
  @Subscription('onCommentAdded')
  @UseGuards(AuthGuard)
  onCommentAdded() {
    return this.pubSub.asyncIterator('onCommentAdded');
  }
}

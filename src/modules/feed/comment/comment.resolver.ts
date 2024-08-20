import { UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Mutation,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { Request } from 'express';
import { PubSub } from 'graphql-subscriptions';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { FeedService } from '../feed.service';
import { CreateCommentDto } from './comment.dto';
import { CommentService } from './comment.service';
import { User } from 'src/common/decorators/user.decorator';
import IUser from 'src/common/types/user';

/**
 * Resolver for comment
 */
@Resolver('Comment')
export class CommentResolver {
  private pubSub: PubSub;
  constructor(
    private commentService: CommentService,
    private feedService: FeedService,
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
    const { PostId, text } = commentData;

    const payload = {
      text,
      UserId: user.id,
      PostId,
    };

    const [comment] = await Promise.all([
      this.commentService.createOneComment(payload),
      this.feedService.increment({ id: PostId }, 'comment'),
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
        id: PostId,
      },
      option,
    );

    // triggering onCommentAdded event
    this.pubSub.publish('onCommentAdded', {
      onCommentAdded: {
        ...post,
        User: user,
      },
    });

    return { ...comment, User: user };
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

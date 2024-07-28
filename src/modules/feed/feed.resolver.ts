import {
  Args,
  Context,
  Mutation,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { CreatePostDto } from './feed.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { FeedService } from './feed.service';
import { Request } from 'express';
import { PubSub } from 'graphql-subscriptions';

@Resolver('Feed')
export class FeedResolver {
  private pubSub: PubSub;

  constructor(private feedService: FeedService) {
    this.pubSub = new PubSub();
  }

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

    const data = await this.feedService.createOne(payload);
    this.pubSub.publish('onPostAdded', { onPostAdded: data });
    return data;
  }

  @Subscription('onPostAdded')
  @UseGuards(AuthGuard)
  onPostAdded() {
    return this.pubSub.asyncIterator('onPostAdded');
  }
}

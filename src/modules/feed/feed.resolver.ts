import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { CreatePostDto } from './feed.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { FeedService } from './feed.service';
import { Request } from 'express';

@Resolver('Feed')
export class FeedResolver {
  constructor(private feedService: FeedService) {}

  @Mutation('createPost')
  @UseGuards(AuthGuard)
  async createPost(
    @Args('createPostInput') createPostInput: CreatePostDto,
    @Context('req') req: Request,
  ) {
    const payload = {
      ...createPostInput,
      UserId: req.user,
    };

    console.log(payload);

    return this.feedService.createOne(payload);
  }
}

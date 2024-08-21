import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { ReactionModule } from './reaction/reaction.module';

@Module({
  imports: [CommentModule, PostModule, ReactionModule],
  providers: [],
  exports: [],
})
export class FeedModule {}

import { Module } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { PostService } from '../post/post.service';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
@Module({
  providers: [CommentService, CommentResolver, AuthService, PostService],
  imports: [],
  exports: [],
})
export class CommentModule {}

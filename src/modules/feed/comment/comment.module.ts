import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';

@Module({
  providers: [CommentService, CommentResolver, AuthService],
  imports: [],
  exports: [],
})
export class CommentModule {}

import { Module } from '@nestjs/common';
import { ReactionResolver } from './reaction.resolver';
import { ReactionService } from './reaction.service';
import { AuthService } from '../../auth/auth.service';
import { PostService } from '../post/post.service';

@Module({
  imports: [],
  providers: [AuthService, ReactionResolver, ReactionService, PostService],
  exports: [],
})
export class ReactionModule {}

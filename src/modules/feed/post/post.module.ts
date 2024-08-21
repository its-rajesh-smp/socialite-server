import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { ReactionService } from '../reaction/reaction.service';

@Module({
  imports: [],
  providers: [AuthService, PostService, PostResolver, ReactionService],
  exports: [],
})
export class PostModule {}

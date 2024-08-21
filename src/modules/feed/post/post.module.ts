import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';

@Module({
  imports: [],
  providers: [AuthService, PostService, PostResolver],
  exports: [],
})
export class PostModule {}

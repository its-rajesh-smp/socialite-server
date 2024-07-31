import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/modules/auth/auth.service';
import { FeedService } from '../feed.service';

@Module({
  providers: [
    CommentService,
    CommentResolver,
    PrismaService,
    AuthService,
    FeedService,
  ],
  imports: [],
  exports: [],
})
export class CommentModule {}

import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedResolver } from './feed.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [],
  providers: [FeedService, FeedResolver, PrismaService, AuthService],
  exports: [],
})
export class FeedModule {}

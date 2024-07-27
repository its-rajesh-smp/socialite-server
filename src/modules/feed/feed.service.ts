import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FeedService {
  constructor(private prisma: PrismaService) {}

  async createOne(postData) {
    return await this.prisma.newsFeedPosts.create(postData);
  }
}

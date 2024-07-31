import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FeedService {
  constructor(private prisma: PrismaService) {}

  async getAllPosts(condition = {}, option = {}) {
    const allPosts = await this.prisma.newsFeedPosts.findMany({
      where: condition,
      ...option,
    });

    return allPosts;
  }

  async getOnePost(condition, option = {}) {
    return await this.prisma.newsFeedPosts.findUnique({
      where: condition,
      ...option,
    });
  }

  async createOnePost(postData) {
    return await this.prisma.newsFeedPosts.create({
      data: postData,
    });
  }

  async getOneReaction(condition) {
    return await this.prisma.newsPostReactions.findFirst({ where: condition });
  }

  async createOneReaction(reactionData) {
    return await this.prisma.newsPostReactions.create({
      data: reactionData,
    });
  }

  async deleteReactions(condition) {
    return await this.prisma.newsPostReactions.deleteMany({ where: condition });
  }

  async increment(condition, field) {
    return await this.prisma.newsFeedPosts.update({
      where: condition,
      data: {
        [field]: {
          increment: 1,
        },
      },
    });
  }

  async decrement(condition, field) {
    return await this.prisma.newsFeedPosts.update({
      where: condition,
      data: {
        [field]: {
          decrement: 1,
        },
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FeedService {
  constructor(private prisma: PrismaService) {}

  async getAllPosts(condition = {}, option = {}) {
    // Getting all posts
    const allPosts = await this.prisma.newsFeedPosts.findMany({
      where: condition,
      ...option,
    });

    return allPosts;
  }

  async getOnePost(condition) {
    return await this.prisma.newsFeedPosts.findUnique({
      where: condition,
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

  async incrementReactionCount(condition) {
    return await this.prisma.newsFeedPosts.update({
      where: condition,
      data: {
        like: {
          increment: 1,
        },
      },
    });
  }

  async decrementReactionCount(condition) {
    return await this.prisma.newsFeedPosts.update({
      where: condition,
      data: {
        like: {
          decrement: 1,
        },
      },
    });
  }
}

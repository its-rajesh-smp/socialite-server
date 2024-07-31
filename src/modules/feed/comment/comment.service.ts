import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async createOneComment(commentData) {
    return await this.prisma.newsPostComments.create({
      data: commentData,
    });
  }

  async getComment(condition = {}, option = {}) {
    return await this.prisma.newsPostComments.findMany({
      where: condition,
      ...option,
    });
  }
}

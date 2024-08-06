import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

/**
 * Service for comment
 */
@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to create a comment
   * @param commentData
   * @returns
   */
  async createOneComment(commentData) {
    return await this.prisma.newsPostComments.create({
      data: commentData,
    });
  }

  /**
   * Function to get comments
   * @param condition
   * @param option
   * @returns
   */
  async getComment(condition = {}, option = {}) {
    return await this.prisma.newsPostComments.findMany({
      where: condition,
      ...option,
    });
  }
}

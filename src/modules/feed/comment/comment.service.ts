import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

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
  async createAComment(commentData) {
    return await this.prisma.comment.create({
      data: commentData,
    });
  }

  /**
   * Function to get comments using condition
   * @param condition
   * @param option
   * @returns
   */
  async getComment(condition = {}, option = {}) {
    return await this.prisma.comment.findMany({
      where: condition,
      ...option,
    });
  }
}

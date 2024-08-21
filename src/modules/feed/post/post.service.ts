import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

/**
 * Service for post
 */
@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to get all posts
   * @param condition
   * @param option
   * @returns
   */
  async getAllPosts(condition = {}, option = {}) {
    return await this.prisma.post.findMany({
      where: condition,
      ...option,
    });
  }

  /**
   * Function to get one post
   * @param condition
   * @param option
   * @returns
   */
  async getOnePost(condition, option = {}) {
    return await this.prisma.post.findUnique({
      where: condition,
      ...option,
    });
  }

  /**
   * Function to create a post
   * @param postData
   * @returns
   */
  async createOnePost(postData) {
    return await this.prisma.post.create({
      data: postData,
    });
  }

  /**
   * Function to update a post
   * @param condition
   * @param postData
   * @returns
   */
  async updateOnePost(condition, postData) {
    return await this.prisma.post.update({
      where: condition,
      data: postData,
    });
  }

  /**
   * Function to increment a post field
   * @param condition
   * @param postField
   * @returns
   */
  async increment(condition, postField) {
    return await this.prisma.post.update({
      where: condition,
      data: {
        [postField]: {
          increment: 1,
        },
      },
    });
  }

  /**
   * Function to decrement a post field
   * @param condition
   * @param postField
   * @returns
   */
  async decrement(condition, postField) {
    return await this.prisma.post.update({
      where: condition,
      data: {
        [postField]: {
          decrement: 1,
        },
      },
    });
  }

  /**
   * Function to delete a post
   * @param condition
   * @returns
   */
  async deleteOnePost(condition) {
    return await this.prisma.post.delete({
      where: condition,
    });
  }
}

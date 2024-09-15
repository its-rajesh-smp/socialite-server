import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Service for task tag
 */
@Injectable()
export class TaskTagService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to get a task tags
   * @param condition
   * @param options
   * @returns
   */
  async findOne(condition = {}, options = {}) {
    return await this.prisma.taskTag.findFirst({
      where: condition,
      ...options,
    });
  }

  /**
   * Function to get all task tags
   * @param condition
   * @param options
   * @returns
   */
  async findAll(condition = {}, options = {}) {
    return await this.prisma.taskTag.findMany({
      where: condition,
      ...options,
    });
  }

  /**
   * Function to create a task tag
   * @param tagData
   * @returns
   */
  async create(tagData) {
    return await this.prisma.taskTag.create({
      data: tagData,
    });
  }

  /**
   * Function to create many task tags
   * @param tagData
   * @returns
   */
  async createMany(tagData) {
    return await this.prisma.taskTag.createManyAndReturn({
      data: tagData,
    });
  }

  /**
   * Function to delete many task tags
   * @param tagData
   * @returns
   */
  async deleteMany(condition) {
    return await this.prisma.taskTag.deleteMany({ where: condition });
  }
}

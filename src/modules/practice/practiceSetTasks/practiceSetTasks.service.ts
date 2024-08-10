import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

/**
 * Service for practice set task
 */
@Injectable()
export class PracticeSetTaskService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to get all practice set tasks
   * @param condition
   * @returns
   */
  async findAll(condition = {}) {
    return await this.prisma.practiceSetTasks.findMany({
      where: condition,
    });
  }

  /**
   * Function to get a practice set task
   * @param condition
   * @returns
   */
  async findOne(condition) {
    return await this.prisma.practiceSetTasks.findFirst({
      where: condition,
    });
  }

  /**
   * Function to create practice set task
   * @param data
   * @returns
   */
  async create(data) {
    return await this.prisma.practiceSetTasks.create({
      data,
    });
  }

  /**
   * Function to update a practice set task
   * @param condition
   * @param data
   * @returns
   */
  async updateOne(condition, data) {
    return await this.prisma.practiceSetTasks.update({
      where: condition,
      data,
    });
  }

  /**
   * Function to delete a practice set task
   * @param condition
   * @returns
   */
  async deleteOne(condition) {
    return await this.prisma.practiceSetTasks.delete({
      where: condition,
    });
  }
}

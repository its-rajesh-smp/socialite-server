import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

/**
 * Service for practice set
 */
@Injectable()
export class PracticeSetUserSubmitTaskService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to create practice set
   * @param data
   * @returns
   */
  async create(data) {
    return await this.prisma.practiceSetUserSubmitTasks.create({
      data,
    });
  }

  /**
   * Function to get all the user submit practice tasks
   * @param condition
   * @returns
   */
  async findAll(condition = {}) {
    return await this.prisma.practiceSetUserSubmitTasks.findMany({
      where: condition,
    });
  }

  /**
   * Function to get a single user submit practice task
   * @param condition
   * @returns
   */
  async findOne(condition, options = {}) {
    return await this.prisma.practiceSetUserSubmitTasks.findFirst({
      where: condition,
      ...options,
    });
  }

  /**
   * Function to update a single user submit practice task
   * @param condition
   * @param data
   * @returns
   */
  async updateOne(condition, data) {
    return await this.prisma.practiceSetUserSubmitTasks.update({
      where: condition,
      data,
    });
  }

  /**
   * Function to delete a single user submit practice task
   * @param condition
   * @returns
   */
  async deleteOne(condition) {
    return await this.prisma.practiceSetUserSubmitTasks.delete({
      where: condition,
    });
  }
}

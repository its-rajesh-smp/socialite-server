import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Service for practice task
 */
@Injectable()
export class PracticeTaskService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to get all practice  tasks
   * @param condition
   * @returns
   */
  async findAll(condition = {}, options = {}): Promise<any> {
    return await this.prisma.practiceTask.findMany({
      where: condition,
      ...options,
    });
  }

  /**
   * Function to get a practice task
   * @param condition
   * @param options
   * @returns
   */
  async findOne(condition, options = {}): Promise<any> {
    return await this.prisma.practiceTask.findFirst({
      where: condition,
      ...options,
    });
  }

  /**
   * Function to create practice task
   * @param data
   * @returns
   */
  async create(practiceTaskData) {
    return await this.prisma.practiceTask.create({
      data: practiceTaskData,
    });
  }

  /**
   * Function to update a practice task
   * @param condition
   * @param data
   * @returns
   */
  async updateOne(condition, practiceTaskData) {
    return await this.prisma.practiceTask.update({
      where: condition,
      data: practiceTaskData,
    });
  }

  /**
   * Function to delete a practice task
   * @param condition
   * @returns
   */
  async deleteOne(condition) {
    return await this.prisma.practiceTask.delete({
      where: condition,
    });
  }
}

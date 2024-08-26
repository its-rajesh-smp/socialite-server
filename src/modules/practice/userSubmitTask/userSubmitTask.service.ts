import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

/**
 * Service for user submit task
 */
@Injectable()
export class UserSubmitTaskService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to get a user submit task
   * @param condition
   * @returns
   */
  async findOne(condition) {
    return await this.prisma.userSubmitTask.findFirst({
      where: condition,
    });
  }

  /**
   * Function to create a user submit task
   * @param data
   * @returns
   */
  async create(submitTaskData) {
    console.log(submitTaskData);
    return await this.prisma.userSubmitTask.create({
      data: submitTaskData,
    });
  }
}

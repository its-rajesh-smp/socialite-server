import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import getPracticeTaskRevisionQuery from './helpers/getPracticeTaskRevisionQuery';

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
   * Function to get all practice tasks for revision
   * @param userId
   * @param practiceSetId
   * @returns
   */
  async findPracticeTasksForRevision(userId: string, practiceSetId: string) {
    const data = await this.prisma.$queryRaw(
      getPracticeTaskRevisionQuery({ userId, practiceSetId }),
    );
    return data as [any];
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

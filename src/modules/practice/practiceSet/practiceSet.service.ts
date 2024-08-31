import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Service for practice set
 */
@Injectable()
export class PracticeSetService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to get all practice sets
   * @param condition
   * @returns
   */
  async findAll(condition = {}, options = {}) {
    return await this.prisma.practiceSet.findMany({
      where: condition,
      ...options,
    });
  }

  /**
   * Function to get a practice set
   * @param condition
   * @returns
   */
  async findOne(condition, options = {}) {
    return await this.prisma.practiceSet.findFirst({
      where: condition,
      ...options,
    });
  }

  /**
   * Function to create practice set
   * @param data
   * @returns
   */
  async create(practiceSetData) {
    return await this.prisma.practiceSet.create({
      data: practiceSetData,
    });
  }

  /**
   * Function to update a practice set
   * @param condition
   * @param data
   * @returns
   */
  async updateOne(condition, practiceSetData) {
    return await this.prisma.practiceSet.update({
      where: condition,
      data: practiceSetData,
    });
  }

  /**
   * Function to delete a practice set
   * @param condition
   * @returns
   */
  async deleteOne(condition) {
    return await this.prisma.practiceSet.delete({
      where: condition,
    });
  }
}

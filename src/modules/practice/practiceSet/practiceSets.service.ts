import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

/**
 * Service for practice set
 */
@Injectable()
export class PracticeSetService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to create practice set
   * @param data
   * @returns
   */
  async create(data) {
    return await this.prisma.practiceSets.create({
      data,
    });
  }

  /**
   * Function to get all practice sets
   * @param condition
   * @returns
   */
  async findAll(condition = {}) {
    return await this.prisma.practiceSets.findMany({
      where: condition,
    });
  }

  /**
   * Function to get a practice set
   * @param condition
   * @returns
   */
  async findOne(condition, options = {}) {
    return await this.prisma.practiceSets.findFirst({
      where: condition,
      ...options,
    });
  }

  /**
   * Function to update a practice set
   * @param condition
   * @param data
   * @returns
   */
  async updateOne(condition, data) {
    return await this.prisma.practiceSets.update({
      where: condition,
      data,
    });
  }

  /**
   * Function to delete a practice set
   * @param condition
   * @returns
   */
  async deleteOne(condition) {
    return await this.prisma.practiceSets.delete({
      where: condition,
    });
  }
}

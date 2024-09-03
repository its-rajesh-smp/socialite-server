import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Service for user task metadata
 */
@Injectable()
export class UserTaskMetadataService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to get a metadata of task
   * @param condition
   * @returns
   */
  async findOne(condition) {
    return await this.prisma.userTaskMetadata.findFirst({
      where: condition,
    });
  }

  /**
   * Function to create metadata of  task
   * @param data
   * @returns
   */
  async create(metaData) {
    return await this.prisma.userTaskMetadata.create({
      data: metaData,
    });
  }

  /**
   * Function to update metadata of a  task
   * @param condition
   * @param data
   * @returns
   */
  async updateOne(condition, metaData) {
    return await this.prisma.userTaskMetadata.update({
      where: condition,
      data: metaData,
    });
  }

  /**
   * Function to create or update metadata of a  task
   * @param condition
   * @param data
   * @returns
   */
  async createOrUpdateOne(condition, metaData) {
    const userTaskMetadata = await this.prisma.userTaskMetadata.findFirst({
      where: condition,
    });

    if (userTaskMetadata) {
      return await this.prisma.userTaskMetadata.update({
        where: { id: userTaskMetadata.id },
        data: metaData,
      });
    } else {
      return await this.prisma.userTaskMetadata.create({
        data: { ...condition, ...metaData },
      });
    }
  }

  /**
   * Function to increase the count of a key of task metadata
   * @param condition
   * @param key to update
   * @param incrementBy by default 1
   * @returns
   */
  async increaseCount(condition, key, incrementBy = 1) {
    return await this.prisma.userTaskMetadata.update({
      where: condition,
      data: {
        [key]: {
          increment: incrementBy,
        },
      },
    });
  }
}

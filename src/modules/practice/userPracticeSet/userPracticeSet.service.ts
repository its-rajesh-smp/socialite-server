import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

/**
 * Service for user practice set
 */
@Injectable()
export class UserPracticeSetService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to get user practice sets
   * @param condition
   * @returns
   */
  async findMany(condition) {
    return await this.prisma.userPracticeSet.findMany({
      where: condition,
    });
  }

  /**
   * Function to get an user practice set
   * @param condition
   * @returns
   */
  async findOne(condition) {
    return await this.prisma.userPracticeSet.findFirst({
      where: condition,
    });
  }

  /**
   * Function to create a user practice set
   * @param data
   * @returns
   */
  async create(practiceSetData) {
    return await this.prisma.userPracticeSet.create({
      data: practiceSetData,
    });
  }

  /**
   * Function to get or create a user practice set
   * @param condition
   * @param data
   * @returns
   */
  async findOneOrCreate(condition, practiceSetData) {
    let userPracticeSet;

    // check if user practice set exists
    userPracticeSet = await this.prisma.userPracticeSet.findFirst({
      where: condition,
    });

    // if not exists, create
    if (!userPracticeSet) {
      userPracticeSet = await this.create(practiceSetData);
    }

    return userPracticeSet;
  }
}

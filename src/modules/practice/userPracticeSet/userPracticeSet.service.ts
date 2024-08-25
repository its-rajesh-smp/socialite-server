import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

/**
 * Service for user practice set
 */
@Injectable()
export class UserPracticeSetService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to get user practice set
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
  async create(usePracticeSetData) {
    return await this.prisma.userPracticeSet.create({
      data: usePracticeSetData,
    });
  }
}

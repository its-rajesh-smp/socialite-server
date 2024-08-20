import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

/**
 *  Service for Auth
 */
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to get an user with condition
   * @param condition
   * @returns
   */
  async findOne(condition) {
    return await this.prisma.users.findFirst({
      where: condition,
    });
  }

  /**
   * Function to create an user
   * @param data
   * @returns
   */
  async create(data) {
    return await this.prisma.users.create({
      data,
    });
  }
}

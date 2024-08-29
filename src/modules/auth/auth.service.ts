import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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
    return await this.prisma.user.findFirst({
      where: condition,
    });
  }

  /**
   * Function to create an user
   * @param data
   * @returns
   */
  async create(userData) {
    return await this.prisma.user.create({
      data: userData,
    });
  }
}

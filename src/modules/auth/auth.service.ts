import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async findOne(condition) {
    return await this.prisma.user.findFirst({
      where: condition,
    });
  }

  async create(data) {
    return await this.prisma.user.create({
      data,
    });
  }
}

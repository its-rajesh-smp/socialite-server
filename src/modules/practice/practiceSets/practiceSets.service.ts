import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PracticeSetService {
  constructor(private prisma: PrismaService) {}

  async create(data) {
    return await this.prisma.practiceSets.create({
      data,
    });
  }

  async findAll(condition = {}) {
    return await this.prisma.practiceSets.findMany({
      where: condition,
    });
  }

  async findOne(condition) {
    return await this.prisma.practiceSets.findFirst({
      where: condition,
    });
  }

  async deleteOne(condition) {
    return await this.prisma.practiceSets.delete({
      where: condition,
    });
  }

  async updateOne(condition, data) {
    return await this.prisma.practiceSets.update({
      where: condition,
      data,
    });
  }
}

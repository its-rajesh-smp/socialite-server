import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Service for reaction
 */
@Injectable()
export class ReactionService {
  constructor(private prisma: PrismaService) {}

  /**
   * Function to get one reaction
   * @param condition
   * @returns
   */
  async getOneReaction(condition) {
    return await this.prisma.reaction.findFirst({ where: condition });
  }

  /**
   * Function to create one reaction
   * @param reactionData
   * @returns
   */
  async createOneReaction(reactionData) {
    return await this.prisma.reaction.create({
      data: reactionData,
    });
  }

  /**
   * Function to delete reaction
   * @param condition
   * @returns
   */
  async deleteReactions(condition) {
    return await this.prisma.reaction.deleteMany({ where: condition });
  }
}

import {
  Args,
  Context,
  Mutation,
  Resolver,
  Subscription,
  Query,
} from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { Request } from 'express';
import { PracticeSetService } from './practiceSets.service';
import { CreatePracticeSetDto } from './practiceSets.dto';

/**
 * Resolver for practice set
 */
@Resolver('PracticeSet')
export class PracticeSetResolver {
  constructor(private readonly practiceSetsService: PracticeSetService) {}

  /**
   * function to get all practice sets
   * @param req
   * @returns
   */
  @UseGuards(AuthGuard)
  @Query('getAllPracticeSets')
  async getAllPracticeSets(@Context('req') req: Request) {
    return await this.practiceSetsService.findAll({ UserId: req.user.id });
  }

  /**
   * function to get a practice set
   * @param req
   * @param id
   * @returns
   */
  @UseGuards(AuthGuard)
  @Query('getAPracticeSet')
  async getAPracticeSet(
    @Context('req') req: Request,
    @Args('deletePracticeSet') id: string,
  ) {
    return await this.practiceSetsService.findOne({ id });
  }

  /**
   * function to create a practice set
   * @param practiceSetInput
   * @param req
   * @returns
   */
  @UseGuards(AuthGuard)
  @Mutation('createPracticeSet')
  async createPracticeSet(
    @Args('createPracticeSetInput') practiceSetInput: CreatePracticeSetDto,
    @Context('req') req: Request,
  ) {
    const createdPracticeSet = await this.practiceSetsService.create({
      ...practiceSetInput,
      UserId: req.user.id,
    });

    return await this.practiceSetsService.findOne(
      {
        id: createdPracticeSet.id,
      },
      { include: { User: true } },
    );
  }

  /**
   * function to delete a practice set
   * @param id
   * @returns
   */
  @UseGuards(AuthGuard)
  @Mutation('deletePracticeSet')
  async deletePracticeSet(@Args('deletePracticeSet') id: string) {
    return await this.practiceSetsService.deleteOne({ id });
  }
}

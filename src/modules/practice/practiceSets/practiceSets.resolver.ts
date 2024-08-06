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
import { AuthService } from 'src/modules/auth/auth.service';
import { PracticeSetService } from './practiceSets.service';
import { CreatePracticeSetDto } from './practiceSets.dto';

@Resolver('PracticeSet')
export class PracticeSetResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly practiceSetsService: PracticeSetService,
  ) {}

  @UseGuards(AuthGuard)
  @Query('getAllPracticeSets')
  async getAllPracticeSets(@Context('req') req: Request) {
    return await this.practiceSetsService.findAll({ UserId: req.user.id });
  }

  @UseGuards(AuthGuard)
  @Query('getAPracticeSet')
  async getAPracticeSet(
    @Context('req') req: Request,
    @Args('deletePracticeSet') id: string,
  ) {
    return await this.practiceSetsService.findOne({ id });
  }

  @UseGuards(AuthGuard)
  @Mutation('createPracticeSet')
  async createPracticeSet(
    @Args('practiceSetInput') practiceSetInput: CreatePracticeSetDto,
    @Context('req') req: Request,
  ) {
    return await this.practiceSetsService.create({
      ...practiceSetInput,
      userId: req.user.id,
    });
  }

  @UseGuards(AuthGuard)
  @Mutation('deletePracticeSet')
  async deletePracticeSet(@Args('deletePracticeSet') id: string) {
    return await this.practiceSetsService.deleteOne({ id });
  }
}

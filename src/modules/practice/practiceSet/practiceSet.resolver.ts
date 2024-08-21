import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators/user.decorator';
import IUser from 'src/common/types/user';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { CreatePracticeSetDto } from './practiceSet.dto';
import { PracticeSetService } from './practiceSet.service';

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
  async getAllPracticeSets(@User() user: IUser) {
    return await this.practiceSetsService.findAll({ userId: user.id });
  }

  /**
   * function to get a practice set
   * @param req
   * @param id
   * @returns
   */
  @UseGuards(AuthGuard)
  @Query('getAPracticeSet')
  async getAPracticeSet(@Args('id') id: string) {
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
    @Args('practiceSetData') practiceSetData: CreatePracticeSetDto,
    @User() user: IUser,
  ) {
    const createdPracticeSet = await this.practiceSetsService.create({
      ...practiceSetData,
      userId: user.id,
    });

    return await this.practiceSetsService.findOne(
      {
        id: createdPracticeSet.id,
      },
      { include: { user: true } },
    );
  }

  /**
   * function to delete a practice set
   * @param id
   * @returns
   */
  @UseGuards(AuthGuard)
  @Mutation('deletePracticeSet')
  async deletePracticeSet(@Args('id') id: string) {
    return await this.practiceSetsService.deleteOne({ id });
  }
}

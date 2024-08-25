import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators/user.decorator';
import IUser from 'src/common/types/user';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { CreatePracticeSetDto } from './practiceSet.dto';
import { PracticeSetService } from './practiceSet.service';
import { status } from 'constants/common.const';

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
    return await this.practiceSetsService.findAll({ status: status.LIVE });
  }

  /**
   * function to get all practice sets of a user
   * @param req
   * @param id
   * @returns
   */
  @UseGuards(AuthGuard)
  @Query('getMyPracticeSets')
  async getMyPracticeSets(@User() user: IUser) {
    return await this.practiceSetsService.findAll({
      userId: user.id,
      status: status.LIVE,
    });
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
    return await this.practiceSetsService.findOne({ id, status: status.LIVE });
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
  async deletePracticeSet(@Args('id') id: string, @User() user: IUser) {
    const practiceSet = await this.practiceSetsService.findOne({ id });

    if (practiceSet?.userId !== user.id) {
      throw new Error('You are not authorized to delete this practice set');
    }

    await this.practiceSetsService.updateOne(
      { id },
      {
        status: status.ACHIEVED,
      },
    );
    return id;
  }
}

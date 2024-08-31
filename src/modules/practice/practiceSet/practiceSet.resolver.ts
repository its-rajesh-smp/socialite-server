import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { status } from '../../../common/constants/common';
import { User } from '../../../common/decorators/user.decorator';
import IUser from '../../../common/types/user';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { UserPracticeSetService } from '../userPracticeSet/userPracticeSet.service';
import { CreatePracticeSetDto } from './practiceSet.dto';
import { PracticeSetService } from './practiceSet.service';

/**
 * Resolver for practice set
 */
@Resolver('PracticeSet')
export class PracticeSetResolver {
  constructor(
    private readonly practiceSetsService: PracticeSetService,
    private readonly userPracticeSetService: UserPracticeSetService,
  ) {}

  /**
   * function to get all practice sets
   * @param req
   * @returns
   */
  @UseGuards(AuthGuard)
  @Query('getAllPracticeSets')
  async getAllPracticeSets(@User() user: IUser) {
    const allPracticeSets = await this.practiceSetsService.findAll(
      {
        status: status.LIVE,
      },
      {
        include: {
          userPracticeSets: {
            where: {
              userId: user.id,
            },
          },
          user: true,
        },
      },
    );

    // Mapping practiceSet with userPracticeSet
    // If user has forked the practiceSet then isCurrentUserForked will be true
    return allPracticeSets.map((set: any) => {
      const isCurrentUserForked = set.userPracticeSets.length > 0;
      return {
        ...set,
        isCurrentUserForked,
      };
    });
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
    const allPracticeSetsOfUser = await this.practiceSetsService.findAll(
      {
        userId: user.id,
        status: status.LIVE,
      },
      {
        include: {
          userPracticeSets: {
            where: {
              userId: user.id,
            },
          },
          user: true,
        },
      },
    );

    return allPracticeSetsOfUser.map((set: any) => {
      return {
        ...set,
        isCurrentUserForked: set.userPracticeSets.length > 0,
      };
    });
  }

  /**
   * function to get all forked practice sets of a user
   * @param user
   * @returns
   */
  @UseGuards(AuthGuard)
  @Query('getMyForkedPracticeSets')
  async getMyForkedPracticeSets(@User() user: IUser) {
    const allPracticeSetsOfUser = await this.practiceSetsService.findAll(
      {
        status: status.LIVE,
        userPracticeSets: {
          some: {
            userId: user.id,
          },
        },
      },
      {
        include: {
          user: true,
        },
      },
    );

    const response = allPracticeSetsOfUser.map((set) => {
      return {
        ...set,
        isCurrentUserForked: true,
      };
    });

    return response;
  }

  /**
   * function to get a practice set
   * @param req
   * @param id
   * @returns
   */
  @UseGuards(AuthGuard)
  @Query('getAPracticeSet')
  async getAPracticeSet(@Args('id') id: string, @User() user: IUser) {
    const practiceSet: any = await this.practiceSetsService.findOne(
      {
        status: status.LIVE,
        id,
      },
      {
        include: {
          userPracticeSets: {
            where: {
              userId: user.id,
            },
          },
          user: true,
        },
      },
    );

    return {
      ...practiceSet,
      isCurrentUserForked: practiceSet.userPracticeSets.length > 0,
    };
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

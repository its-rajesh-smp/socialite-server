import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../../../common/decorators/user.decorator';
import IUser from '../../../common/types/user';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { PracticeSetService } from '../practiceSet/practiceSet.service';
import { UserPracticeSetService } from './userPracticeSet.service';

/**
 * Resolver for user practice set task
 */
@Resolver('UserPracticeSet')
export class UserPracticeSetResolver {
  constructor(
    private readonly practiceSetService: PracticeSetService,
    private readonly userPracticeSetService: UserPracticeSetService,
  ) {}

  /**
   * function to fork a practice set
   * @param req
   * @param data
   * @returns
   */
  @Mutation('forkPracticeSet')
  @UseGuards(AuthGuard)
  async forkPracticeSet(
    @User() user: IUser,
    @Args('practiceSetId') practiceSetId: string,
  ) {
    const [practiceSet, isForked] = await Promise.all([
      this.practiceSetService.findOne({
        id: practiceSetId,
      }),
      this.userPracticeSetService.findOne({
        userId: user.id,
        practiceSetId,
      }),
    ]);

    if (!practiceSet) {
      throw new Error('Practice set is not available');
    }

    if (isForked) {
      throw new Error('Practice set is already forked');
    }

    return await this.userPracticeSetService.create({
      userId: user.id,
      practiceSetId,
    });
  }
}

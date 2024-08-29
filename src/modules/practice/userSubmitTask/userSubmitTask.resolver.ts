import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../../../common/decorators/user.decorator';
import IUser from '../../../common/types/user';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { PracticeTaskService } from '../task/practiceTask.service';
import { UserPracticeSetService } from '../userPracticeSet/userPracticeSet.service';
import { CreateUserSubmitTaskDto } from './userSubmitTask.dto';
import { UserSubmitTaskService } from './userSubmitTask.service';

/**
 * Resolver for user submit task
 */
@Resolver('UserSubmitTask')
export class UserSubmitTaskResolver {
  constructor(
    private readonly practiceTaskService: PracticeTaskService,
    private readonly userPracticeSetService: UserPracticeSetService,
    private readonly userSubmitTaskService: UserSubmitTaskService,
  ) {}

  /**
   * function to submit a task
   * @param req
   * @param data
   * @returns
   */
  @Mutation('submitUserTask')
  @UseGuards(AuthGuard)
  async submitUserTask(
    @User() user: IUser,
    @Args('submitTaskData') submitTaskData: CreateUserSubmitTaskDto,
  ) {
    const practiceTask = await this.practiceTaskService.findOne({
      id: submitTaskData.practiceTaskId,
    });

    if (!practiceTask) {
      throw new Error('Practice task not found');
    }

    const userPracticeSetPayload = {
      userId: user.id,
      practiceSetId: practiceTask.practiceSetId,
    };

    // getting a user practice set  if not exists, then forking the practice set
    const userPracticeSet = await this.userPracticeSetService.findOneOrCreate(
      userPracticeSetPayload,
      userPracticeSetPayload,
    );

    return await this.handelSubmitResourceTask(
      submitTaskData,
      practiceTask,
      userPracticeSet,
      user,
    );
  }

  /**
   * helper function to handel resource task submission
   * @param practiceTask
   * @param submitTaskData
   */
  async handelSubmitResourceTask(
    submitTaskData: CreateUserSubmitTaskDto,
    practiceTask,
    userPracticeSet,
    user,
  ) {
    const { practiceSetId } = practiceTask;
    const { id: userPracticeSetId } = userPracticeSet;
    const { id: userId } = user;

    const submittedTask = await this.userSubmitTaskService.create({
      userId,
      practiceSetId,
      userPracticeSetId,
      ...submitTaskData,
    });

    return submittedTask;
  }
}

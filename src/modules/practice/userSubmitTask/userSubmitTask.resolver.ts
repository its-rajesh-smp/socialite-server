import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../../../common/decorators/user.decorator';
import IUser from '../../../common/types/user';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { PracticeTaskService } from '../task/practiceTask.service';
import { UserPracticeSetService } from '../userPracticeSet/userPracticeSet.service';
import { UserTaskMetadataService } from '../userTaskMetadata/userTaskMetadata.service';
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
    private readonly userTaskMetadataService: UserTaskMetadataService,
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
    const [practiceTask, userTaskMetadata] = await Promise.all([
      this.practiceTaskService.findOne({
        id: submitTaskData.practiceTaskId,
      }),
      this.userTaskMetadataService.findOne({
        userId: user.id,
        practiceTaskId: submitTaskData.practiceTaskId,
      }),
    ]);

    if (!practiceTask) {
      throw new Error('Practice task not found');
    }

    const userPracticeSetPayload = {
      userId: user.id,
      practiceSetId: practiceTask.practiceSetId,
    };

    const userTaskMetadataPayload = {
      submissionCount: (userTaskMetadata?.submissionCount ?? 0) + 1,
    };

    // getting a user practice set  if not exists, then forking the practice set
    const [userPracticeSet] = await Promise.all([
      this.userPracticeSetService.findOneOrCreate(
        userPracticeSetPayload,
        userPracticeSetPayload,
      ),
      this.userTaskMetadataService.createOrUpdateOne(
        { userId: user.id, practiceTaskId: practiceTask.id },
        userTaskMetadataPayload,
      ),
    ]);

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

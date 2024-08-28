import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { status } from 'constants/common.const';
import { User } from 'src/common/decorators/user.decorator';
import IUser from 'src/common/types/user';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { PracticeSetService } from '../practiceSet/practiceSet.service';
import { UserSubmitTaskService } from '../userSubmitTask/userSubmitTask.service';
import {
  CreatePracticeTaskDto,
  UpdatePracticeTaskDto,
} from './practiceTask.dto';
import { PracticeTaskService } from './practiceTask.service';

/**
 * Resolver for practice set task
 */
@Resolver('PracticeTask')
export class PracticeTaskResolver {
  constructor(
    private readonly practiceTaskService: PracticeTaskService,
    private readonly practiceSetService: PracticeSetService,
    private readonly userSubmitTaskService: UserSubmitTaskService,
  ) {}

  /**
   * function to get all practice tasks of a practice set
   * @param req
   * @returns
   */
  @Query('getAllPracticeTasks')
  @UseGuards(AuthGuard)
  async getAllPracticeTasks(
    @Args('practiceSetId') practiceSetId: string,
    @User() user: IUser,
  ) {
    // Getting all practice tasks
    const allPracticeTasks = await this.practiceTaskService.findAll({
      practiceSetId,
      status: status.LIVE,
    });

    // Extracting practiceTask Ids
    const practiceTaskIds = allPracticeTasks.map((set) => set.id);
    const promises = [];

    // For each practiceTask getting the userSubmitTask
    practiceTaskIds.forEach((taskId) => {
      promises.push(
        this.userSubmitTaskService.findOne(
          {
            practiceTaskId: taskId,
            userId: user.id,
          },
          {
            orderBy: {
              submittedAt: 'desc',
            },
          },
        ),
      );
    });

    const practiceTasks = await Promise.all(promises);

    // Mapping practiceTask with userSubmitTask
    // If user has submitted the practiceTask then isCurrentUserSubmitted will be the submittedAt date
    return allPracticeTasks.map((set, index) => {
      return {
        ...set,
        submittedAt: practiceTasks[index]?.submittedAt,
      };
    });
  }

  /**
   * function to get a practice task of a practice set
   * @param req
   * @returns
   */
  @Query('getAPracticeTask')
  @UseGuards(AuthGuard)
  async getAPracticeTask(@Args('id') id: string, @User() user: IUser) {
    // Getting practice task and user submit task
    const [practiceTask, userSubmitTask] = await Promise.all([
      await this.practiceTaskService.findOne({
        id,
        status: status.LIVE,
      }),
      await this.userSubmitTaskService.findOne(
        {
          practiceTaskId: id,
          userId: user.id,
        },
        {
          orderBy: {
            submittedAt: 'desc',
          },
        },
      ),
    ]);

    // If user has submitted the practice task then isCurrentUserSubmitted will be the submittedAt date
    return {
      ...practiceTask,
      submittedAt: userSubmitTask?.submittedAt,
    };
  }

  /**
   * function to create practice task
   * @param req
   * @param data
   * @returns
   */
  @Mutation('createPracticeTask')
  @UseGuards(AuthGuard)
  async createPracticeTask(
    @User() user: IUser,
    @Args('practiceTaskData') practiceTaskData: CreatePracticeTaskDto,
  ) {
    const { practiceSetId } = practiceTaskData;

    const practiceSet = await this.practiceSetService.findOne({
      id: practiceSetId,
    });

    // check if practice set belongs to user
    if (practiceSet?.userId !== user.id) {
      throw new Error('You are not authorized to create this practice task');
    }

    const newTaskData = {
      ...practiceTaskData,
      userId: user.id,
    };

    return await this.practiceTaskService.create(newTaskData);
  }

  /**
   * function to update practice task
   * @param req
   * @param data
   * @returns
   */
  @Mutation('updatePracticeTask')
  @UseGuards(AuthGuard)
  async updatePracticeTask(
    @Args('practiceTaskData') practiceTaskData: UpdatePracticeTaskDto,
    @User() user: IUser,
  ) {
    const { id } = practiceTaskData;

    const practiceTask = await this.practiceTaskService.findOne({
      id,
    });

    // check if practice task belongs to user
    if (practiceTask?.userId !== user.id) {
      throw new Error('You are not authorized to update this practice task');
    }

    console.log(practiceTaskData);

    return await this.practiceTaskService.updateOne({ id }, practiceTaskData);
  }

  /**
   * function to a delete practice  task
   * @param req
   * @param data
   * @returns
   */
  @Mutation('deletePracticeTask')
  @UseGuards(AuthGuard)
  async deletePracticeTask(@Args('id') id: string, @User() user: IUser) {
    const practiceTask = await this.practiceTaskService.findOne({
      id,
    });

    // check if practice task belongs to user
    if (practiceTask?.userId !== user.id) {
      throw new Error('You are not authorized to delete this practice task');
    }

    await this.practiceTaskService.updateOne(
      { id },
      {
        status: status.ACHIEVED,
      },
    );

    return id;
  }
}

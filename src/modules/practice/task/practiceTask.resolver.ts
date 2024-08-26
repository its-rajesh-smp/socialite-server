import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { status } from 'constants/common.const';
import { User } from 'src/common/decorators/user.decorator';
import IUser from 'src/common/types/user';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { PracticeSetService } from '../practiceSet/practiceSet.service';
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
  ) {}

  /**
   * function to get all practice tasks of a practice set
   * @param req
   * @returns
   */
  @Query('getAllPracticeTasks')
  @UseGuards(AuthGuard)
  async getAllPracticeTasks(@Args('practiceSetId') practiceSetId: string) {
    return await this.practiceTaskService.findAll({
      practiceSetId,
      status: status.LIVE,
    });
  }

  /**
   * function to get a practice task of a practice set
   * @param req
   * @returns
   */
  @Query('getAPracticeTask')
  @UseGuards(AuthGuard)
  async getAPracticeTask(@Args('id') id: string) {
    return await this.practiceTaskService.findOne({
      id,
      status: status.LIVE,
    });
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

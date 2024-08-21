import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/common/decorators/user.decorator';
import IUser from 'src/common/types/user';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
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
  constructor(private readonly practiceTaskService: PracticeTaskService) {}

  /**
   * function to get all practice tasks of a practice set
   * @param req
   * @returns
   */
  @Query('getAllPracticeTasks')
  @UseGuards(AuthGuard)
  async getAllPracticeTasks(@Args('practiceSetId') practiceSetId: string) {
    return await this.practiceTaskService.findAll({ practiceSetId });
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
  ) {
    const { id } = practiceTaskData;

    const practiceTask = await this.practiceTaskService.findOne({
      id,
    });

    // if task not found
    if (!practiceTask) {
      throw new Error('Task not found');
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
  async deletePracticeTask(@Args('id') id: string) {
    const practiceTask = await this.practiceTaskService.findOne({
      id,
    });

    // if task not found
    if (!practiceTask) {
      throw new Error('Task not found');
    }

    return await this.practiceTaskService.deleteOne({ id });
  }
}

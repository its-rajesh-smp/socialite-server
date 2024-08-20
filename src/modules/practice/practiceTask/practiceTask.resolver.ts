import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Request } from 'express';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import {
  CreatePracticeSetTaskDto,
  DeletePracticeSetTaskDto,
  GetPracticeSetTasksDto,
  UpdatePracticeSetTaskDto,
} from './practiceTask.dto';
import { PracticeSetTaskService } from './practiceTask.service';

const PracticeSetTaskType = {
  All: 'All',
  Current: 'Current',
};

/**
 * Resolver for practice set task
 */
@Resolver('PracticeSetTask')
export class PracticeSetTaskResolver {
  constructor(
    private readonly practiceSetTaskService: PracticeSetTaskService,
  ) {}

  /**
   * function to get all practice set tasks
   * @param req
   * @returns
   */
  @Query('getAllPracticeTasks')
  @UseGuards(AuthGuard)
  async getAllPracticeSetTasks(
    @Args('getPracticeSetTaskInput') data: GetPracticeSetTasksDto,
  ) {
    const { PracticeSetId, practiceSetTaskType } = data;

    const condition = {
      PracticeSetId,
    };

    return await this.practiceSetTaskService.findAll(condition);
  }

  /**
   * function to create practice set task
   * @param req
   * @param data
   * @returns
   */
  @Mutation('createPracticeTask')
  @UseGuards(AuthGuard)
  async createPracticeSetTask(
    @Context('req') req: Request,
    @Args('createPracticeTaskInput') data: CreatePracticeSetTaskDto,
  ) {
    const newTaskData = {
      ...data,
      UserId: req.user.id,
    };
    return await this.practiceSetTaskService.create(newTaskData);
  }

  /**
   * function to update practice set task
   * @param req
   * @param data
   * @returns
   */
  @Mutation('updatePracticeTask')
  @UseGuards(AuthGuard)
  async updatePracticeSetTask(
    @Args('updatePracticeTaskInput') data: UpdatePracticeSetTaskDto,
  ) {
    const practiceSetTask = await this.practiceSetTaskService.findOne({
      id: data.id,
    });

    // if task not found
    if (!practiceSetTask) {
      throw new Error('Task not found');
    }

    return await this.practiceSetTaskService.updateOne({ id: data.id }, data);
  }

  /**
   * function to a delete practice set task
   * @param req
   * @param data
   * @returns
   */
  @Mutation('deletePracticeTask')
  @UseGuards(AuthGuard)
  async deletePracticeSetTask(@Args('id') id: DeletePracticeSetTaskDto) {
    const practiceSetTask = await this.practiceSetTaskService.findOne({
      id,
    });

    // if task not found
    if (!practiceSetTask) {
      throw new Error('Task not found');
    }

    return await this.practiceSetTaskService.deleteOne({ id });
  }

  /* -------------------------------------------------------------------------- */
  /*                                UTIL FUNCTION                               */
  /* -------------------------------------------------------------------------- */
  async getCurrentPracticeSetTask(PracticeSetId: string) {}
}

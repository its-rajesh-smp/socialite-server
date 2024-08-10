import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PracticeSetService } from '../practiceSets/practiceSets.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import {
  CreatePracticeSetTaskDto,
  DeletePracticeSetTaskDto,
  UpdatePracticeSetTaskDto,
} from './practiceSetTasks.dto';
import { Request } from 'express';
import { PracticeSetTaskService } from './practiceSetTasks.service';

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
  async getAllPracticeSetTasks(@Args('id') id: string) {
    return await this.practiceSetTaskService.findAll();
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
}

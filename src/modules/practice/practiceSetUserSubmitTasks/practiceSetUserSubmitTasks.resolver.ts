import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { Request } from 'express';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { PracticeSetTaskService } from '../practiceSetTasks/practiceSetTasks.service';
import { CreatePracticeSetUserSubmitTaskDto } from './practiceSetUserSubmitTasks.dto';
import { PracticeSetUserSubmitTaskService } from './practiceSetUserSubmitTasks.service';

/**
 * Resolver for practice set
 */
@Resolver('PracticeSetUserSubmitTask')
export class PracticeSetUserSubmitTaskResolver {
  constructor(
    private readonly practiceSetTaskService: PracticeSetTaskService,
    private readonly practiceSetUserSubmitTaskService: PracticeSetUserSubmitTaskService,
  ) {}

  @Mutation('createSubmitPracticeTask')
  @UseGuards(AuthGuard)
  async createSubmitPracticeTask(
    @Args('createSubmitPracticeTaskInput')
    data: CreatePracticeSetUserSubmitTaskDto,
    @Context('req') req: Request,
  ) {
    const user = req.user;
    const { PracticeTaskId } = data;

    const practiceSetTask = await this.practiceSetTaskService.findOne({
      id: PracticeTaskId,
    });

    const payload = {
      UserId: user.id,
      PracticeSetId: practiceSetTask.PracticeSetId,
      PracticeSetTaskId: practiceSetTask.id,
    };

    return await this.practiceSetUserSubmitTaskService.create(payload);
  }
}

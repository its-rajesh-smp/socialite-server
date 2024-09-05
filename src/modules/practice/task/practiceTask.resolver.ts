import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { status } from '../../../common/constants/common';
import { User } from '../../../common/decorators/user.decorator';
import IUser from '../../../common/types/user';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { PracticeSetService } from '../practiceSet/practiceSet.service';
import { TaskTagService } from '../taskTag/taskTag.service';
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
    private readonly taskTagService: TaskTagService,
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
    const condition = {
      practiceSetId,
      status: status.LIVE,
    };

    const options = {
      include: {
        user: true,
        userSubmitTasks: {
          where: { userId: user.id },
          take: 1,
          orderBy: { createdAt: 'desc' },
        },
        userTaskMetadatas: {
          where: { userId: user.id },
        },
      },
    };

    // Getting all practice tasks
    const allPracticeTasks = await this.practiceTaskService.findAll(
      condition,
      options,
    );

    // Mapping practiceTask with userSubmitTask
    // If user has submitted the practiceTask then isCurrentUserSubmitted will be the submittedAt date
    let data = allPracticeTasks.map((set: any) => {
      return {
        ...set,
        submittedAt: set?.userSubmitTasks?.[0]?.submittedAt,
        userTaskMetadata: set?.userTaskMetadatas?.[0],
      };
    });

    return data;
  }

  /**
   * function to get a practice task of a practice set
   * @param req
   * @returns
   */
  @Query('getAPracticeTask')
  @UseGuards(AuthGuard)
  async getAPracticeTask(@Args('id') id: string, @User() user: IUser) {
    const options = {
      include: {
        user: true,
        userSubmitTasks: {
          where: { userId: user.id },
          take: 1,
          orderBy: { createdAt: 'desc' },
        },
        taskTags: true,
      },
    };

    const condition = {
      id,
      status: status.LIVE,
    };

    // Getting practice task and user submit task
    const practiceTask = await this.practiceTaskService.findOne(
      condition,
      options,
    );

    // If user has submitted the practice task then isCurrentUserSubmitted will be the submittedAt date
    return {
      ...practiceTask,
      submittedAt: practiceTask.userSubmitTasks?.[0]?.submittedAt,
      userTaskMetadata: practiceTask?.userTaskMetadatas?.[0],
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
    const { id, taskTags } = practiceTaskData;

    const practiceTask = await this.practiceTaskService.findOne(
      {
        id,
      },
      {
        include: {
          taskTags: true,
        },
      },
    );

    // check if practice task belongs to user
    if (practiceTask?.userId !== user.id) {
      throw new Error('You are not authorized to update this practice task');
    }

    const [tagsToConnect, tagsToDisconnect] = this.getTagsToUpdateAndDelete(
      practiceTask.taskTags,
      taskTags,
    );

    return await this.practiceTaskService.updateOne(
      { id },
      {
        ...practiceTaskData,
        taskTags: {
          connect: tagsToConnect,
          disconnect: tagsToDisconnect,
        },
      },
    );
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

  /**
   * helper function to get tags to connect and disconnect
   * @param currentTags
   * @param updatedTags
   * @returns
   */
  getTagsToUpdateAndDelete(currentTags, updatedTags) {
    // Create a set of current tag IDs
    const currentTagIds = new Set(currentTags.map((tag) => tag.id));

    // Create sets for the new tag IDs
    const newTagIds = new Set(updatedTags.map((tag) => tag.id));

    // Determine which tags to connect and which to disconnect
    const tagsToConnect = updatedTags.filter(
      (tag) => !currentTagIds.has(tag.id),
    );
    const tagsToDisconnect = currentTags.filter(
      (tag) => !newTagIds.has(tag.id),
    );

    return [tagsToConnect, tagsToDisconnect];
  }
}

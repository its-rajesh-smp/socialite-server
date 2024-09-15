import IUser from '@common/types/user';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../../../common/decorators/user.decorator';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { TaskTagService } from './taskTag.service';

/**
 * Resolver for task tag
 */
@Resolver('TaskTag')
export class TaskTagResolver {
  constructor(private readonly taskTagService: TaskTagService) {}

  /**
   * Get all task tags
   * @param user
   * @returns
   */
  @Query('getTags')
  @UseGuards(AuthGuard)
  async getTags(@User() user: IUser) {
    const condition = {
      userId: user.id,
    };
    return await this.taskTagService.findAll(condition);
  }

  /**
   * Create a task tag
   * @param user
   * @param tagData
   * @returns
   */
  @Mutation('createATaskTag')
  @UseGuards(AuthGuard)
  async createATaskTag(
    @User() user: IUser,
    @Args('tagData')
    tagData: {
      name: string;
    },
  ) {
    const payload = {
      ...tagData,
      userId: user.id,
    };
    console.log(payload);
    const tag = await this.taskTagService.findOne({
      userId: user.id,
      name: tagData.name,
    });

    if (tag) {
      throw new Error('Tag already exists');
    }

    return await this.taskTagService.create(payload);
  }

  /**
   * Delete a task tag
   * @param user
   * @param id
   * @returns
   */
  @Mutation('deleteATaskTag')
  @UseGuards(AuthGuard)
  async deleteATaskTag(@User() user: IUser, @Args('id') id: string) {
    const tag = await this.taskTagService.findOne({ id });

    if (tag?.userId !== user.id) {
      throw new Error('You are not authorized to delete this tag');
    }

    await this.taskTagService.deleteMany({ id });

    return tag.id;
  }
}

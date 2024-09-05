import { IsNotEmpty } from 'class-validator';

interface ITaskTags {
  id: string;
  name: string;
}

/**
 * Dto for create practice task
 */
export class CreatePracticeTaskDto {
  @IsNotEmpty()
  practiceSetId: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  taskType: string;

  description: string;

  visibility: string;
}

/**
 * Dto for update practice task
 */
export class UpdatePracticeTaskDto {
  @IsNotEmpty()
  id: string;

  title: string;

  description: string;

  visibility: string;

  taskType: string;

  taskTags: ITaskTags[];
}

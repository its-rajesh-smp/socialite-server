import { IsNotEmpty } from 'class-validator';

/**
 * Dto for create practice task
 */
export class CreatePracticeTaskDto {
  @IsNotEmpty()
  practiceSetId: string;

  @IsNotEmpty()
  title: string;

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

  link: string;

  visibility: string;
}

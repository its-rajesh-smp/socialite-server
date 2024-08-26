import { IsNotEmpty } from 'class-validator';

/**
 * Dto for create user submit task
 */
export class CreateUserSubmitTaskDto {
  @IsNotEmpty()
  practiceTaskId: string;

  @IsNotEmpty()
  submittedAt: string;

  userResponse: string;
}

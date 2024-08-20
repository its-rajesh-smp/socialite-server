import { IsNotEmpty } from 'class-validator';

export class CreatePracticeSetUserSubmitTaskDto {
  @IsNotEmpty()
  PracticeTaskId: string;
}

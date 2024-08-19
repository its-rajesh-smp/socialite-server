import { IsNotEmpty } from 'class-validator';

export class GetPracticeSetTasksDto {
  @IsNotEmpty()
  PracticeSetId: string;

  practiceSetTaskType: string = 'All';
}

export class CreatePracticeSetTaskDto {
  @IsNotEmpty()
  PracticeSetId: string;

  @IsNotEmpty()
  title: string;

  description: string;

  @IsNotEmpty()
  link: string;

  visibility: string;
}

export class UpdatePracticeSetTaskDto {
  @IsNotEmpty()
  id: string;

  title: string;

  description: string;

  link: string;

  visibility: string;
}

export class DeletePracticeSetTaskDto {
  @IsNotEmpty()
  id: string;
}

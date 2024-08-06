import { IsNotEmpty } from 'class-validator';

export class CreatePracticeSetDto {
  @IsNotEmpty()
  title: string;

  description: string;

  visibility: string;
}

export class UpdatePracticeSetDto {
  title: string;

  description: string;

  visibility: string;
}

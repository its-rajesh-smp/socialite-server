import { IsNotEmpty } from 'class-validator';

/**
 * Dto for create practice set
 */
export class CreatePracticeSetDto {
  @IsNotEmpty()
  title: string;

  description: string;

  visibility: string;
}

/**
 * Dto for update practice set
 */
export class UpdatePracticeSetDto {
  @IsNotEmpty()
  id: string;

  title: string;

  description: string;

  visibility: string;
}

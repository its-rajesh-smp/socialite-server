import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  text: string;

  @IsNotEmpty()
  visibility: string;
}

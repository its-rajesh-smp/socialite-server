import { IsNotEmpty } from 'class-validator';

/**
 * Dto for create post
 */
export class CreatePostDto {
  text: string;

  @IsNotEmpty()
  visibility: string;
}

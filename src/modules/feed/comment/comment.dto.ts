import { IsNotEmpty } from 'class-validator';

/**
 * Dto for create comment
 */
export class CreateCommentDto {
  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  postId: string;
}

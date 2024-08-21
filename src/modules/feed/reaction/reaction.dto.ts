import { IsNotEmpty } from 'class-validator';

/**
 * Dto for react post
 */
export class ReactPostDto {
  @IsNotEmpty()
  postId: string;

  @IsNotEmpty()
  operationType: string;

  @IsNotEmpty()
  reactionType: string;
}

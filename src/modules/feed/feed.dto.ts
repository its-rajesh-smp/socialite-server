import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  text: string;

  @IsNotEmpty()
  visibility: string;
}

export class ReactPostDto {
  @IsNotEmpty()
  postId: string;

  @IsNotEmpty()
  operationType: string;

  @IsNotEmpty()
  reactionType: string;
}

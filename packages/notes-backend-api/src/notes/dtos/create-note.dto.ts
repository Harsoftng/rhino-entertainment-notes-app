import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateNoteDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(200)
  title!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  note!: string;
}

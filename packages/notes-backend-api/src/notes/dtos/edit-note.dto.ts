import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateNoteDTO } from './create-note.dto';

export class EditNoteDTO extends CreateNoteDTO {
  @IsNotEmpty()
  @IsUUID(4)
  id!: string;
}

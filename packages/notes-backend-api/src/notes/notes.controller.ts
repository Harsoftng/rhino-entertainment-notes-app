import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { NotesService } from './notes.service';
import { INote, INotesResponse } from './types/note.interface';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get('/')
  async findAllNotes(): Promise<INotesResponse> {
    return this.notesService.findAllNotes();
  }

  @Get('/:id')
  async findNote(@Param('id', ParseUUIDPipe) id: string): Promise<INote> {
    return this.notesService.findNote(id);
  }
}

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { INote, INotesResponse } from './types/note.interface';
import { CreateNoteDTO } from './dtos/create-note.dto';

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

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createNote(@Body() createNoteDTO: CreateNoteDTO): Promise<INote> {
    return await this.notesService.createNote(createNoteDTO);
  }
}

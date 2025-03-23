import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { INote, INotesResponse } from './types/note.interface';
import { CreateNoteDTO } from './dtos/create-note.dto';
import { EditNoteDTO } from './dtos/edit-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async findAllNotes(): Promise<INotesResponse> {
    return this.notesService.findAllNotes();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findNote(@Param('id', ParseUUIDPipe) id: string): Promise<INote> {
    return this.notesService.findNote(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createNote(@Body() createNoteDTO: CreateNoteDTO): Promise<INote> {
    return await this.notesService.createNote(createNoteDTO);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateNote(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() editNoteDTO: EditNoteDTO,
  ): Promise<INote> {
    return this.notesService.updateNote(id, editNoteDTO);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteNote(@Param('id', ParseUUIDPipe) id: string): Promise<INote> {
    return this.notesService.deleteNote(id);
  }
}

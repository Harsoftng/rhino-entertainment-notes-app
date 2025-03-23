import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { EntityManager, EntityRepository, wrap } from '@mikro-orm/postgresql';
import { RedisService } from '../database/redis.service';
import { Note } from './entities/note.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { INote, INotesResponse } from './types/note.interface';
import { Utilities } from '../shared/utilities.class';
import { CreateNoteDTO } from './dtos/create-note.dto';
import { EditNoteDTO } from './dtos/edit-note.dto';
import { GenericNoteEvent } from './events/note.event';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class NotesService {
  constructor(
    private readonly em: EntityManager,
    private readonly redisService: RedisService,
    private readonly eventEmitter: EventEmitter2,

    @InjectRepository(Note as any)
    private readonly notesRepository: EntityRepository<Note>,
  ) {}

  // Todo: implement pagination if there is sufficient left
  async findAllNotes(): Promise<INotesResponse> {
    const notes = await this.redisService.remember<INote[]>(
      `notes`,
      async () =>
        await this.notesRepository.findAll({ orderBy: { updatedAt: 'DESC' } }),
    );

    return { notes: notes || [] };
  }

  async findNote(id: string): Promise<INote> {
    if (!id) {
      throw new HttpException(
        Utilities.getHttpResponse(`Invalid id '${id}' provided!`),
        HttpStatus.NOT_FOUND,
      );
    }

    return await this.redisService.remember<INote>(`note:${id}`, async () => {
      const note: INote = (await this.notesRepository.findOne({ id })) as INote;

      if (!note?.id) {
        throw new HttpException(
          Utilities.getHttpResponse(`Note with id ${id} not found!`),
          HttpStatus.NOT_FOUND,
        );
      }

      return note;
    });
  }

  async createNote(noteDTO: CreateNoteDTO): Promise<INote> {
    const { note, title } = noteDTO;

    const newNote = new Note(title, note);

    await this.em.persistAndFlush(newNote);
    await this.em.refresh(newNote);

    this.eventEmitter.emit('note.created', new GenericNoteEvent(newNote.id));

    return newNote;
  }

  async updateNote(id: string, noteDTO: EditNoteDTO): Promise<INote> {
    if (!id) {
      throw new HttpException(
        Utilities.getHttpResponse(`Invalid id '${id}' provided!`),
        HttpStatus.NOT_FOUND,
      );
    }

    const note: INote = (await this.notesRepository.findOne({ id })) as INote;

    if (!note?.id) {
      throw new HttpException(
        Utilities.getHttpResponse(`Note with id ${id} not found!`),
        HttpStatus.NOT_FOUND,
      );
    }

    if (id !== noteDTO.id) {
      throw new HttpException(
        Utilities.getHttpResponse(
          `Note id '${id}' / '${noteDTO.id}' mismatch!`,
        ),
        HttpStatus.NOT_FOUND,
      );
    }

    wrap(note).assign(noteDTO as any);
    await this.em.flush();
    await this.em.refresh(note);

    this.eventEmitter.emit('note.updated', new GenericNoteEvent(note.id));

    return note;
  }

  async deleteNote(id: string): Promise<INote> {
    const note = await this.notesRepository.findOne({ id });

    if (!note?.id) {
      throw new HttpException(
        Utilities.getHttpResponse(`Note with id ${id} not found!`),
        HttpStatus.NOT_FOUND,
      );
    }

    const deleted = await this.notesRepository.nativeDelete({ id });

    if (deleted < 0) {
      throw new HttpException(
        Utilities.getHttpResponse(
          `Error occurred. Note with id ${id} not deleted!`,
        ),
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    this.eventEmitter.emit('note.deleted', new GenericNoteEvent(note.id));

    return note;
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { RedisService } from '../database/redis.service';
import { Note } from './entities/note.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { INote, INotesResponse } from './types/note.interface';
import { Utilities } from '../shared/utilities.class';

@Injectable()
export class NotesService {
  constructor(
    private readonly em: EntityManager,
    private readonly redisService: RedisService,

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

    return await this.redisService.remember<INote>(
      `note:${id}`,
      async () => await this.notesRepository.findOneOrFail({ id }),
    );
  }
}

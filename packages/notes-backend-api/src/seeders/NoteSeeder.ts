import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { NoteFactory } from '../notes/factories/note.factory';

export class NoteSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    await new NoteFactory(em).create(10);
  }
}

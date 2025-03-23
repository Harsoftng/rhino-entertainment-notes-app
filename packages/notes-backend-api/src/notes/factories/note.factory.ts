import { Factory } from '@mikro-orm/seeder';
import { faker } from '@faker-js/faker';
import { Note } from '../entities/note.entity';

export class NoteFactory extends Factory<Note> {
  model = Note;

  definition(): Partial<Note> {
    return {
      title: faker.lorem.sentence(),
      note: faker.lorem.paragraph(),
    };
  }
}

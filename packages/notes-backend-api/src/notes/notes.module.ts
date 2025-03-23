import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { DatabaseModule } from '../database/database.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Note } from './entities/note.entity';

@Module({
  imports: [
    DatabaseModule,
    MikroOrmModule.forFeature({
      entities: [Note] as any,
    }),
  ],
  providers: [NotesService],
  controllers: [NotesController],
})
export class NotesModule {}

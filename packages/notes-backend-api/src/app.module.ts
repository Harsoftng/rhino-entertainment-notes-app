import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({ expandVariables: true }), NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

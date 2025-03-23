import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { RedisService } from '../../database/redis.service';
import { GenericNoteEvent } from '../events/note.event';

@Injectable()
export class NoteListener {
  constructor(private readonly redis: RedisService) {}

  @OnEvent('note.created')
  async onNoteCreated(event: GenericNoteEvent): Promise<void> {
    await this.evictCacheItems(event, false);
  }

  @OnEvent('note.updated')
  async onNoteUpdated(event: GenericNoteEvent): Promise<void> {
    await this.evictCacheItems(event);
  }

  @OnEvent('note.deleted')
  async onNoteDeleted(event: GenericNoteEvent): Promise<void> {
    await this.evictCacheItems(event);
  }

  private async evictCacheItems(
    event: GenericNoteEvent,
    evictNoteRecord: boolean = true,
  ): Promise<void> {
    if (event.id) {
      console.log(`Note updated: ${event.id}`);
      await this.redis.forget(`notes`);

      if (evictNoteRecord) {
        await this.redis.forget(`note:${event.id}`);
      }
    }
  }
}

import { Entity, Opt, PrimaryKey, Property, t } from '@mikro-orm/core';

@Entity()
export class Note {
  @PrimaryKey({ type: t.uuid, defaultRaw: 'gen_random_uuid()' })
  id!: string;

  @Property({ length: 200 })
  title: string;

  @Property({ columnType: 'text' })
  note: string;

  @Property()
  createdAt: Date & Opt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date & Opt = new Date();

  constructor(title: string, note: string) {
    this.title = title;
    this.note = note;
  }
}

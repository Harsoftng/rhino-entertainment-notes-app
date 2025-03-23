export interface INote {
  id: string;
  title: string;
  note: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface INotesResponse {
  notes: INote[];
}

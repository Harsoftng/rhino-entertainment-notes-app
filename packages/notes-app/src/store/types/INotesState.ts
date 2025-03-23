import { INote } from "@/components/app/types/INote";

export interface INotesState {
  dialogIsOpen: boolean;
  loading: boolean;
  selectedNoteId?: string | undefined;
  notes: INote[];
}

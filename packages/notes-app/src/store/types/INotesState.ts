import { INote } from "@/components/app/types/INote";
import { ENotesDialogView } from "@/store/types/ENotesDialogView";

export interface INotesState {
  dialogIsOpen: boolean;
  loading: boolean;
  view: ENotesDialogView;
  selectedNoteId?: string | undefined;
  notes: INote[];
}

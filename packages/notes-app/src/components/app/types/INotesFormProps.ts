import { INote } from "@/components/app/types/INote";

export interface INotesFormProps {
  note?: INote;
  mode: "edit" | "create";
}

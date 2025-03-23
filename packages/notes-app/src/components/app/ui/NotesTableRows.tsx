import React from "react";
import NotesTableRow from "./NotesTableRow";
import { INotesProps } from "@/components/app/types/INotesProps";
import { INote } from "@/components/app/types/INote";
import NotesNoDataFoundUI from "@/components/app/ui/NotesNoDataFoundUI";

const NotesTableRows = ({ notes = [] }: INotesProps): React.ReactElement => {
  return (
    <>
      {notes?.map((note: INote) => <NotesTableRow note={note} key={note.id} />)}

      {notes?.length === 0 && <NotesNoDataFoundUI />}
    </>
  );
};

export default NotesTableRows;

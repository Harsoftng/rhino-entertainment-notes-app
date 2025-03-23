import React from "react";
import NotesTableRows from "./NotesTableRows";
import { INotesProps } from "@/components/app/types/INotesProps";

const NotesTableContent = ({ notes }: INotesProps): React.ReactElement => {
  return (
    <tbody>
      <NotesTableRows notes={notes} />
    </tbody>
  );
};

export default NotesTableContent;

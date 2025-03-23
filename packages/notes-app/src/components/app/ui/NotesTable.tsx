import React from "react";
import NotesTableColumns from "./NotesTableColumns";
import NotesTableContent from "./NotesTableContent";
import { INotesProps } from "@/components/app/types/INotesProps";
import NotesSectionTitle from "@/components/app/ui/NotesSectionTitle";

const NotesTable = (props: INotesProps): React.ReactElement => {
  const { notes } = props;
  return (
    <>
      <NotesSectionTitle />
      <div className="overflow-x-auto p-3 rounded-lg dark:bg-gray-900 w-full mt-3 border-2 dark:border-0">
        <table className="table table-zebra w-full">
          <NotesTableColumns />
          <NotesTableContent notes={notes} />
        </table>
      </div>
    </>
  );
};

export default NotesTable;

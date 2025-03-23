import React from "react";
import useNoteState from "@/store/hooks/notes/useNoteState";
import { useGetNotesAPI } from "@/components/app/api/useGetNotesAPI";
import { BarLoader } from "react-spinners";
import NotesTable from "./NotesTable";
import CreateNotesButton from "./CreateNotesButton";

const NotesTableUI = (): React.ReactElement => {
  const { notes } = useNoteState();
  const { isLoading } = useGetNotesAPI();

  console.log({ notes });

  return (
    <>
      <CreateNotesButton />

      {isLoading && (
        <div className="flex items-center justify-center mb-2 mt-[30px]">
          <BarLoader loading={isLoading} width={"100%"} />
        </div>
      )}

      <NotesTable notes={notes} />
    </>
  );
};

export default NotesTableUI;

import React from "react";
import { INote } from "@/components/app/types/INote";
import { useNotesFunctions } from "@/components/app/api/useNotesFunctions";
import NotesForm from "@/components/app/forms/NotesForm";

const EditNoteUI = ({ note }: { note: INote }): React.ReactElement => {
  const { closeDialog } = useNotesFunctions();

  return (
    <div className="flex items-center justify-center flex-col min-w-[100%]">
      <div className="card lg:min-w-[50%] xl:min-w-[40%] md:min-w-[80%] sm:min-w-[90%] min-w-[90%] bg-base-100 shadow-xl rounded-b-none p-5 flex items-center justify-between flex-row">
        Edit Note ({note.title})
        <button className="btn btn-ghost" onClick={closeDialog}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <div className="card lg:min-w-[50%] xl:min-w-[40%] md:min-w-[80%] sm:min-w-[90%] min-w-[90%] bg-gray-300 shadow-xl rounded-t-none p-6">
        <NotesForm mode="edit" note={note} />
      </div>
    </div>
  );
};

export default EditNoteUI;

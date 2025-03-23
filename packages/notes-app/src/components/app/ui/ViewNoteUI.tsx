import React from "react";
import Utilities from "@/components/shared/utils/Utilities";
import { useNotesFunctions } from "@/components/app/api/useNotesFunctions";
import { INote } from "@/components/app/types/INote";
import NoteLabel from "@/components/app/ui/NoteLabel";

const ViewNoteUI = ({ note }: { note: INote }): React.ReactElement => {
  const { closeDialog, openEditNoteDialog } = useNotesFunctions();

  return (
    <div className="flex items-center justify-center flex-col min-w-[100%]">
      <div className="card lg:min-w-[50%] xl:min-w-[40%] md:min-w-[80%] sm:min-w-[90%] min-w-[90%] bg-base-100 shadow-xl rounded-b-none p-5 flex items-center justify-between flex-row">
        View Note
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
      <div className="card lg:max-w-[50%] xl:max-w-[40%] md:max-w-[80%] sm:max-w-[90%] max-w-[90%] bg-gray-300 shadow-xl rounded-t-none">
        <div className="flex flex-col p-5">
          <NoteLabel label="Title" value={note.title} />

          <NoteLabel label="Description" value={note.note} />

          <NoteLabel
            label="Date Created"
            value={Utilities.getUserFriendlyDateTime(note.createdAt)}
          />

          <NoteLabel
            label="Last Updated"
            value={Utilities.getUserFriendlyDateTime(note.updatedAt || "")}
          />

          <button
            className="btn btn-pill w-full btn-lg btn-warning mt-4 text-capitalize"
            onClick={() => openEditNoteDialog(note.id)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewNoteUI;

import React from "react";
import { useNotesFunctions } from "@/components/app/api/useNotesFunctions";

const CreateNotesButton = (): React.ReactElement => {
  const { openCreateNoteDialog } = useNotesFunctions();

  return (
    <div className="mb-3">
      <button
        className="btn btn-outline btn-primary capitalize"
        onClick={() => openCreateNoteDialog()}
      >
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
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>

        <span className="ml-2">Create New Note</span>
      </button>
    </div>
  );
};

export default CreateNotesButton;

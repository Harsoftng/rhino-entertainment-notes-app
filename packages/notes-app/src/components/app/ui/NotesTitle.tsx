import React from "react";
import { INoteProps } from "@/components/app/types/INotesProps";

const NotesTitle = ({ note }: INoteProps): React.ReactElement => {
  return (
    <div
      className="tooltip tooltip-primary py-3 w-full h-full cursor-pointer"
      data-tip="View Note"
      onClick={() => {}}
    >
      <div className="flex items-center space-x-3">
        <div>
          <div className="dark:font-bold">{note.title}</div>
        </div>
      </div>
    </div>
  );
};

export default NotesTitle;

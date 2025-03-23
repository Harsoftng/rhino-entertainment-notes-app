import React, { useMemo } from "react";
import { INoteProps } from "@/components/app/types/INotesProps";

const NotesContent = ({ note }: INoteProps): React.ReactElement => {
  const content = useMemo(() => {
    return note.note?.length > 500
      ? note.note.substring(0, 500) + "..."
      : note.note;
  }, [note]);

  return (
    <div>
      <div className="font-bold">{content}</div>
    </div>
  );
};

export default NotesContent;

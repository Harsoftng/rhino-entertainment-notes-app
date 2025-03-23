import React from "react";
import { INoteProps } from "@/components/app/types/INotesProps";
import NotesTitle from "@/components/app/ui/NotesTitle";
import NotesContent from "@/components/app/ui/NotesContent";
import Utilities from "@/components/shared/utils/Utilities";
import NotesActions from "@/components/app/ui/NotesActions";

const NotesTableRow = ({ note }: INoteProps): React.ReactElement => {
  return (
    <tr className="border-l-1 border-r-1">
      <td>
        <NotesTitle note={note} />
      </td>

      <td>
        <NotesContent note={note} />
      </td>

      <td>
        <small>{Utilities.getUserFriendlyDateTime(note.createdAt)}</small>
      </td>

      <td>
        <small>{Utilities.getUserFriendlyDateTime(note.updatedAt || "")}</small>
      </td>

      <th>
        <NotesActions note={note} />
      </th>
    </tr>
  );
};

export default NotesTableRow;

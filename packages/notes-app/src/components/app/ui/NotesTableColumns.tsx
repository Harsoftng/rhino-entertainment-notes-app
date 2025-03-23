import React from "react";
import NotesTableColumnRow from "./NotesTableColumnRow";

const NotesTableColumns = (): React.ReactElement => {
  return (
    <thead>
      <NotesTableColumnRow />
    </thead>
  );
};

export default NotesTableColumns;

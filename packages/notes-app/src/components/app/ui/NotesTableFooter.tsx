import React from "react";
import NotesTableColumnRow from "./NotesTableColumnRow";

const NotesTableFooter = (): React.ReactElement => {
  return (
    <tfoot>
      <NotesTableColumnRow />
    </tfoot>
  );
};

export default NotesTableFooter;

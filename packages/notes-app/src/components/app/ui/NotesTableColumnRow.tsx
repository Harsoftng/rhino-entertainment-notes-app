import React from "react";

const NotesTableColumnRow = (): React.ReactElement => {
  return (
    <tr className="dark:text-white font-bold sm:text-sm lg:text-lg xl:text-xl md:text-md">
      <th className="w-2/5">Title</th>
      <th className="w-3/5">Content</th>
      <th className="w-1/5">Date Created</th>
      <th className="w-1/5">Last Updated</th>
      <th className="w-1/5">Actions</th>
    </tr>
  );
};

export default NotesTableColumnRow;

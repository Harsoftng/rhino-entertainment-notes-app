import React from "react";
import Image from "next/image";
import CreateNotesButton from "@/components/app/ui/CreateNotesButton";

const NotesNoDataFoundUI = (): React.ReactElement => {
  return (
    <tr>
      <td colSpan={5}>
        <div className="flex items-center justify-center flex-col h-4/5 gap-8 mt-3">
          <Image
            alt="No Data Found"
            src={"/note-icon.png"}
            width={300}
            height={200}
          />
          <h4>No Notes Found</h4>

          <CreateNotesButton />
        </div>
      </td>
    </tr>
  );
};

export default NotesNoDataFoundUI;

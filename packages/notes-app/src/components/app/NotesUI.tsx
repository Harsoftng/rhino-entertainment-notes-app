import React from "react";
import NotesTableUI from "@/components/app/ui/NotesTableUI";

const NotesUI = (): React.ReactElement => {
  return (
    <div className="flex w-screen items-center justify-center flex-col gap-8 mt-12">
      <div className="md:w-10/12 lg:w-10/2 sm:w-12/12 xs:w-12/12 mx-auto">
        <NotesTableUI />
      </div>
    </div>
  );
};

export default NotesUI;

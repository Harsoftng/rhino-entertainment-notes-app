import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CreateNoteUI from "./CreateNoteUI";
import useNoteState from "@/store/hooks/notes/useNoteState";
import { useNotesFunctions } from "@/components/app/api/useNotesFunctions";

const NotesDialogUI = (): React.ReactElement => {
  const { dialogIsOpen } = useNoteState();
  const { closeDialog } = useNotesFunctions();

  return (
    <Transition appear show={dialogIsOpen} as={Fragment}>
      <Dialog open={dialogIsOpen} onClose={closeDialog}>
        <div
          className="fixed inset-0 dark:bg-black/30"
          aria-hidden="true"
          onClick={closeDialog}
        />
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 dark:bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto glass">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <CreateNoteUI />
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NotesDialogUI;

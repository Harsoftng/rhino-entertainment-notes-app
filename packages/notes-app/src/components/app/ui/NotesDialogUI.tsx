import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CreateNoteUI from "./CreateNoteUI";
import { useNotesFunctions } from "@/components/app/api/useNotesFunctions";
import { useGetSingleNoteAPI } from "@/components/app/api/useGetSingleNoteAPI";
import { ENotesDialogView } from "@/store/types/ENotesDialogView";
import { BeatLoader } from "react-spinners";
import EditNoteUI from "@/components/app/ui/EditNoteUI";
import ViewNoteUI from "@/components/app/ui/ViewNoteUI";
import useNoteState from "@/store/hooks/notes/useNoteState";

const NotesDialogUI = (): React.ReactElement => {
  const { dialogIsOpen, view, selectedNoteId } = useNoteState();
  const { closeDialog } = useNotesFunctions();
  const { isLoading, note } = useGetSingleNoteAPI(selectedNoteId || "");

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
            {view === ENotesDialogView.CREATE_NOTE_VIEW ? (
              <CreateNoteUI />
            ) : (
              <>
                {isLoading || note?.id !== selectedNoteId ? (
                  <div className="p-10">
                    <BeatLoader loading={true} />
                  </div>
                ) : (
                  <>
                    {note &&
                      note.id === selectedNoteId &&
                      view === ENotesDialogView.VIEW_NOTE_VIEW && (
                        <ViewNoteUI note={note} />
                      )}

                    {note &&
                      note.id === selectedNoteId &&
                      view === ENotesDialogView.EDIT_NOTE_VIEW && (
                        <EditNoteUI note={note} />
                      )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NotesDialogUI;

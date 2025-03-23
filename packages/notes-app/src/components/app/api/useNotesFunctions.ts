import { useCallback, useState } from "react";
import { IFormInitialValues } from "@/components/app/types/IFormInitialValues";
import { createNoteApi } from "./createNoteApi";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { notesActions } from "@/store/slices/notes/notesSlice";
import { ENotesDialogView } from "@/store/types/ENotesDialogView";
import { editNoteApi } from "@/components/app/api/editNoteApi";

export const useNotesFunctions = () => {
  const dispatch = useAppDispatch();
  const [deleting, setDeleting] = useState<boolean>(false);
  const [updating, setUpdating] = useState<boolean>(false);

  const createNote = useCallback(
    async (values: IFormInitialValues): Promise<void> => {
      setUpdating(true);
      if (!values) {
        setUpdating(false);
        return;
      }

      await dispatch(createNoteApi({ ...values }));
      setUpdating(false);
    },
    [],
  );

  const editNote = useCallback(
    async (values: IFormInitialValues & { id: string }): Promise<void> => {
      setUpdating(true);
      if (!values) {
        setUpdating(false);
        return;
      }

      await dispatch(editNoteApi({ ...values }));
      setUpdating(false);
    },
    [],
  );

  const closeDialog = useCallback((): void => {
    dispatch(notesActions.closeNoteDialog());
  }, []);

  const openCreateNoteDialog = useCallback((): void => {
    dispatch(notesActions.setSelectedNoteId(""));
    dispatch(notesActions.setView(ENotesDialogView.CREATE_NOTE_VIEW));
    dispatch(notesActions.openNoteDialog());
  }, []);

  const openEditNoteDialog = useCallback((id: string): void => {
    dispatch(notesActions.setSelectedNoteId(id));
    dispatch(notesActions.setView(ENotesDialogView.EDIT_NOTE_VIEW));
    dispatch(notesActions.openNoteDialog());
  }, []);

  return {
    createNote,
    editNote,
    deleting,
    closeDialog,
    openCreateNoteDialog,
    openEditNoteDialog,
    updating,
  };
};

import { useCallback, useState } from "react";
import { IFormInitialValues } from "../types/IFormInitialValues";
import { createNoteApi } from "./createNoteApi";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { notesActions } from "@/store/slices/notes/notesSlice";

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

  const closeDialog = useCallback((): void => {
    dispatch(notesActions.closeNoteDialog());
  }, []);

  const openCreateNoteDialog = useCallback((): void => {
    dispatch(notesActions.setSelectedNoteId(""));
    dispatch(notesActions.openNoteDialog());
  }, []);

  return {
    createNote,
    deleting,
    closeDialog,
    openCreateNoteDialog,
    updating,
  };
};

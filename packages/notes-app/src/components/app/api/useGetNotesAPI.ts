import useSWR from "swr";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { INote } from "@/components/app/types/INote";
import { notesActions } from "@/store/slices/notes/notesSlice";

interface INoteData {
  notes: INote[];
}

export const useGetNotesAPI = () => {
  const dispatch = useAppDispatch();

  const endPoint: string = "/api/notes/";

  const { data, error } = useSWR<INoteData>(endPoint, {
    onSuccess: (data: INoteData) => {
      const notes: INote[] = data?.notes || [];
      console.log({ notes, data });

      if (notes && notes?.length > 0) {
        dispatch(notesActions.setNotes(notes));
      }
    },
  });

  const isLoading: boolean = !data && !error;

  return {
    data,
    error: error,
    isLoading: isLoading,
  };
};

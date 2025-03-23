import { useMemo, useState } from "react";
import { INote } from "@/components/app/types/INote";
import { getAxiosClient } from "@/store/hooks/useAxiosClient";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { notesActions } from "@/store/slices/notes/notesSlice";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface INoteData {
  data: INote;
}

export const useGetSingleNoteAPI = (id: string) => {
  const [note, setNote] = useState<INote>();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { data } = useMemo(async () => {
    setLoading(true);
    const axiosClient = getAxiosClient();
    let response;

    try {
      if (id) {
        response = await axiosClient.get(`/api/notes/${id}`);

        if (response?.data) {
          setNote(response.data);
        }
      } else {
        setNote(null);
      }
    } catch (error: AxiosError) {
      const message =
        error?.response?.data?.message ?? "Error Occurred while fetching data";

      toast(message, {
        type: "error",
      });

      dispatch(notesActions.closeNoteDialog());
    }

    setLoading(false);

    return {
      data: response?.data,
      error: !response?.data,
    };
  }, [id]);

  return {
    data,
    isLoading: loading,
    note,
    setNote,
  };
};

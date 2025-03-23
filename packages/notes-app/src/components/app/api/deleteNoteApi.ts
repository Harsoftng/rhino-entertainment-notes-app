import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { INote } from "@/components/app/types/INote";
import { notesActions } from "@/store/slices/notes/notesSlice";
import Utilities from "@/components/shared/utils/Utilities";
import { getAxiosClient } from "@/store/hooks/useAxiosClient";

interface IDeleteNoteData {
  id: string;
}

interface IDeleteNoteOkResponse {
  data: INote;
}

export const deleteNoteApi = createAsyncThunk(
  "notes/deleteNoteApi",
  async (inputData: IDeleteNoteData, { dispatch }): Promise<any> => {
    try {
      const axiosClient = getAxiosClient();

      const response: IDeleteNoteOkResponse = await axiosClient.delete(
        `/api/notes/${inputData?.id}`,
      );

      if (response?.data && response?.data?.title) {
        toast("Note deleted successfully!", { type: "success" });

        dispatch(notesActions.deleteNote(inputData.id));
      } else {
        // @ts-ignore
        toast(Utilities.processResponse(response?.data?.message), {
          type: "error",
        });
      }
    } catch (error: any) {
      if (!error?.response) {
        toast("Network Error! Could not contact Rhino Servers!", {
          type: "error",
        });
      } else {
        toast(Utilities.processResponse(error?.response?.data?.message), {
          type: "error",
        });
      }
    }
  },
) as any;

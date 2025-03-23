import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IFormInitialValues } from "@/components/app/types/IFormInitialValues";
import { INote } from "@/components/app/types/INote";
import { getAxiosClient } from "@/store/hooks/useAxiosClient";
import { notesActions } from "@/store/slices/notes/notesSlice";
import Utilities from "@/components/shared/utils/Utilities";

interface IEditNoteOkResponse {
  data: INote;
}
interface IEditNoteData extends IFormInitialValues {
  id: string;
}

export const editNoteApi = createAsyncThunk(
  "notes/editNoteApi",
  async (inputData: IEditNoteData, { dispatch }): Promise<any> => {
    try {
      const axiosClient = getAxiosClient();

      const { id, title, note } = inputData;

      const formData = new FormData();
      formData.append("title", title || "");
      formData.append("note", note || "");
      formData.append("id", id || "");

      const response: IEditNoteOkResponse = await axiosClient.put(
        `/api/notes/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response?.data && response?.data?.title) {
        toast("Note updated successfully!", { type: "success" });
        dispatch(notesActions.closeNoteDialog());
        dispatch(notesActions.updateNote(response?.data as INote));
      } else {
        // @ts-ignore
        toast(Utilities.processResponse(response?.data?.message), {
          type: "error",
        });
      }
    } catch (error: any) {
      console.log({ error });

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

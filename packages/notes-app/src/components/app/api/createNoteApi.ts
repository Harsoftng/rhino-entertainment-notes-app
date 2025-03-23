import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IFormInitialValues } from "@/components/app/types/IFormInitialValues";
import { INote } from "@/components/app/types/INote";
import { getAxiosClient } from "@/store/hooks/useAxiosClient";
import { notesActions } from "@/store/slices/notes/notesSlice";
import Utilities from "@/components/shared/utils/Utilities";

interface ICreateNoteOkResponse {
  data: INote;
}

interface ICreateNoteData extends IFormInitialValues {}

export const createNoteApi = createAsyncThunk(
  "notes/createNoteApi",
  async (inputData: ICreateNoteData, { dispatch }): Promise<any> => {
    try {
      const axiosClient = getAxiosClient();

      const { note, title } = inputData;

      const formData = new FormData();
      formData.append("note", note || "");
      formData.append("title", title || "");

      const response: ICreateNoteOkResponse = await axiosClient.post(
        `/api/notes`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log({ response: response.data });

      if (response?.data && response?.data?.title) {
        toast("Note created successfully!", { type: "success" });
        dispatch(notesActions.closeNoteDialog());
        dispatch(notesActions.addNote(response?.data as INote));
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

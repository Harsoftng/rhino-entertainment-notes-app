import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotesState } from "@/store/types/INotesState";
import { INote } from "@/components/app/types/INote";

const defaultNoteState: INotesState = {
  dialogIsOpen: false,
  loading: false,
  notes: [],
  selectedNoteId: "",
};

const notesSlice = createSlice({
  name: "notes",
  initialState: defaultNoteState,
  reducers: {
    openNoteDialog(state: INotesState) {
      state.dialogIsOpen = true;
    },
    closeNoteDialog(state: INotesState) {
      state.dialogIsOpen = false;
      state.selectedNoteId = "0";
    },
    setLoading(state: INotesState, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    addNote(state: INotesState, action: PayloadAction<INote>) {
      state.notes = [action.payload, ...state.notes];
    },
    deleteNote(state: INotesState, action: PayloadAction<number>) {
      state.notes =
        state.notes?.filter((note: INote) => note.id !== action.payload) || [];
    },
    updateNote(state: INotesState, action: PayloadAction<INote>) {
      const otherNotes: INote[] =
        state.notes?.filter((note: INote) => note.id !== action.payload.id) ||
        [];
      state.notes = [...otherNotes, action.payload];
    },

    setNotes(state: INotesState, action: PayloadAction<INote[]>) {
      state.notes = action.payload;
    },
    clearNotes(state: INotesState) {
      state.notes = [];
    },

    setSelectedNoteId(state: INotesState, action: PayloadAction<string>) {
      state.selectedNoteId = action.payload;
    },
    clearNoteState() {
      return defaultNoteState;
    },
  },
});

export const { actions: notesActions } = notesSlice;

export default notesSlice;

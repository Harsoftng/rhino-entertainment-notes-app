import { useAppSelector } from "@/store/hooks/useAppSelector";
import { RootAppState } from "@/store";
import { INotesState } from "@/store/types/INotesState";

export default function useNoteState(): INotesState {
  return <INotesState>useAppSelector((state: RootAppState) => state.notes);
}

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootAppState } from "@/store";

export const useAppSelector: TypedUseSelectorHook<RootAppState> = useSelector;

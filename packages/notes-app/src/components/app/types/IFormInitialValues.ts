import { INote } from "@/components/app/types/INote";

export interface IFormInitialValues
  extends Pick<Partial<INote>, "title" | "note"> {}

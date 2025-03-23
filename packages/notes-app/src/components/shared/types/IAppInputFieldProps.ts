import React from "react";

export interface IAppInputFieldProps {
  label: string;
  readOnly?: boolean;
  name: string;
  type: "text" | "datetime-local" | "hidden";
  placeholder?: string;
  hasErrors?: boolean;

  // eslint-disable-next-line no-unused-vars
  onInputValueChanged?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

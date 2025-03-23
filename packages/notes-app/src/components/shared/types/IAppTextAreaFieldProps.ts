import React from "react";

export interface IAppTextAreaFieldProps {
  label: string;
  readOnly?: boolean;
  name: string;
  placeholder?: string;
  hasErrors?: boolean;

  // eslint-disable-next-line no-unused-vars
  onInputValueChanged?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

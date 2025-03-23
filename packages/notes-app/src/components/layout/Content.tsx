import React from "react";
import { IContentProps } from "./types/IContentProps";

const Content = (props: IContentProps): React.ReactElement => {
  const { children } = props;
  return (
    <div className="p-5 bg-gray dark:glass w-screen pb-52 min-h-[100vh] h-auto overflow-y-auto">
      {children}
    </div>
  );
};

export default Content;

import React, { useContext } from "react";
import Header from "./Header";
import Content from "./Content";
import { IMainLayoutProps } from "./types/IMainLayoutProps";
import { AppContext } from "@/store/context/AppContext";

const MainLayout = (props: IMainLayoutProps): React.ReactElement => {
  const { children } = props;
  const { theme } = useContext(AppContext);

  return (
    <div
      data-theme={theme}
      className="flex items-start justify-start flex-col h-screen w-screen"
    >
      <Header />

      <Content>{children}</Content>
    </div>
  );
};

export default MainLayout;

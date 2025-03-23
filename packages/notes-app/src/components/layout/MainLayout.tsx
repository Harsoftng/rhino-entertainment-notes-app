import React, { useContext } from "react";
import Header from "./Header";
import Content from "./Content";
import { IMainLayoutProps } from "./types/IMainLayoutProps";
import { AppContext } from "@/store/context/AppContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeFactory from "@/store";
import SuspenseLoading from "@/components/shared/misc/SuspenseLoading";

const MainLayout = (props: IMainLayoutProps): React.ReactElement => {
  const { children } = props;
  const { store, persistor } = storeFactory();
  const { theme } = useContext(AppContext);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<SuspenseLoading />}>
        <div
          data-theme={theme}
          className="flex items-start justify-start flex-col h-screen w-screen"
        >
          <Header />

          <Content>{children}</Content>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default MainLayout;

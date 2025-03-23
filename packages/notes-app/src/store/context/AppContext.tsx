import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  IAppContextProps,
  ThemeType,
  ToastType,
} from "@/store/types/IAppContextProps";
import { getDefaultTheme } from "@/components/shared/utils/functions";
import "react-toastify/dist/ReactToastify.css";

export const AppContext = React.createContext<IAppContextProps>({
  theme: getDefaultTheme(),
  changeTheme: (f: ThemeType) => f,
  showToast: (message: string, type?: ToastType) => [message, type],
});

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const defaultTheme = getDefaultTheme();
  // @ts-ignore
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const changeTheme = (t: ThemeType) => {
    setTheme(t || "forest");
    localStorage.setItem("theme", t || "forest");
  };
  const showToast = (message: string, type: ToastType = "success") =>
    toast(message, {
      type,
      autoClose: 3000,
      closeOnClick: true,
      closeButton: true,
      draggable: true,
      pauseOnHover: true,
      position: "top-right",
    });

  return (
    <AppContext.Provider value={{ theme, changeTheme, showToast }}>
      {children}
      <ToastContainer />
    </AppContext.Provider>
  );
};

export default AppContextProvider;

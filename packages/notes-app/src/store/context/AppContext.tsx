import React, { useCallback, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  IAppContextProps,
  ThemeType,
  ToastType,
} from "@/store/types/IAppContextProps";
import { getDefaultTheme } from "@/components/shared/utils/functions";

export const AppContext = React.createContext<IAppContextProps>({
  theme: getDefaultTheme(),
  changeTheme: (f: ThemeType) => f,
  showToast: (message: string, type?: ToastType) => [message, type],
});

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const defaultTheme: ThemeType = getDefaultTheme();

  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const changeTheme = useCallback((t: ThemeType) => {
    setTheme(t || "forest");
    localStorage.setItem("theme", t || "forest");
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType = "success") =>
      toast(message, {
        type,
        autoClose: 3000,
        closeOnClick: true,
        closeButton: true,
        draggable: true,
        pauseOnHover: true,
        position: "top-right",
      }),
    [],
  );

  return (
    <AppContext.Provider value={{ theme, changeTheme, showToast }}>
      {children}
      <ToastContainer />
    </AppContext.Provider>
  );
};

export default AppContextProvider;

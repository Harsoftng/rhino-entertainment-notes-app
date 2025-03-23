export type ThemeType = "forest" | "light";
export type ToastType = "info" | "success" | "error";

export interface IAppContextProps {
  theme: ThemeType;

  changeTheme: (theme: ThemeType) => void;

  showToast: (message: string, type?: ToastType) => void;
}

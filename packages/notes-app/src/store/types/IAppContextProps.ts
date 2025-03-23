export type ThemeType = "forest" | "light";
export type ToastType = "info" | "success" | "error";

export interface IAppContextProps {
  theme: ThemeType;

  // eslint-disable-next-line no-unused-vars
  changeTheme: (theme: ThemeType) => void;

  // eslint-disable-next-line no-unused-vars
  showToast: (message: string, type?: ToastType) => void;
}

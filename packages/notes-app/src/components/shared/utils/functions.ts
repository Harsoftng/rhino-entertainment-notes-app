import { ThemeType } from "@/store/types/IAppContextProps";

export function getDefaultTheme(): ThemeType {
  let defaultTheme: ThemeType = "forest";

  if (typeof window !== "undefined") {
    defaultTheme =
      (localStorage.getItem("theme")?.toString() as ThemeType) || defaultTheme;
  }

  return defaultTheme;
}

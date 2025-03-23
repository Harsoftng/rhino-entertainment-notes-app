import { ThemeType } from "@/store/types/IAppContextProps";
import { toast } from "react-toastify";
import { AxiosInstance, AxiosResponse } from "axios";

export function getDefaultTheme(): ThemeType {
  let defaultTheme: ThemeType = "forest";

  if (typeof window !== "undefined") {
    defaultTheme =
      (localStorage.getItem("theme")?.toString() as ThemeType) || defaultTheme;
  }

  return defaultTheme;
}

export function getAppAPIFetcher(axiosClient: AxiosInstance) {
  return function appAPIFetcher(resource: string) {
    return axiosClient
      .get(resource)
      .then((response: AxiosResponse) => response?.data)
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          const code: number = error?.response?.status;

          if (code === 404) {
            toast("Error occurred: Could not fetch the requested resource!", {
              type: "error",
            });
          } else {
            toast("Error occurred: Could not fetch the requested resource!", {
              type: "error",
            });
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of

          toast("Network Error! Could not contact Rhino Servers!", {
            type: "error",
          });
        } else {
          toast("Network Error! Could not contact Rhino Servers!", {
            type: "error",
          });
        }
      });
  };
}

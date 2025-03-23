import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppContextProvider from "@/store/context/AppContext";
import MainLayout from "@/components/layout/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppContextProvider>
  );
}

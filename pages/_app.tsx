import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar/Navbar";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 300100,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const persister = createSyncStoragePersister({
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  });

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/logoaninfo.svg" />
      </Head>
      <PersistQueryClientProvider
        client={queryclient}
        persistOptions={{ persister, maxAge: 300000 }}
      >
        <ThemeProvider attribute="class">
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </PersistQueryClientProvider>
    </>
  );
}

export default MyApp;

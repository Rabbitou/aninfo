import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar/Navbar";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import SearchBar from "../components/Navbar/SearchBar";

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 300100,
      refetchOnWindowFocus: false,
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
          <div className="flex items-center justify-center md:hidden">
            <div className="w-[92%] relative flex md:hidden my-3">
              <SearchBar />
            </div>
          </div>
          <Component {...pageProps} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </PersistQueryClientProvider>
    </>
  );
}

export default MyApp;

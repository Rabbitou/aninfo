import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";

const queryclient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  // const { theme, setTheme, systemTheme } = useTheme();
  // useEffect(() => {
  //   if (systemTheme) setTheme(systemTheme);
  // }, [systemTheme]);
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/logoaninfo.svg" />
      </Head>
      <QueryClientProvider client={queryclient}>
        <ThemeProvider attribute="class">
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

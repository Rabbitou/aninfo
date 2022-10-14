import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  // const { theme, setTheme, systemTheme } = useTheme();
  // useEffect(() => {
  //   if (systemTheme) setTheme(systemTheme);
  // }, [systemTheme]);
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

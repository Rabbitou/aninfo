import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import Gradient from "../components/Gradientborder/Gradient";

export default function Home() {
  const { theme, setTheme, systemTheme } = useTheme();
  console.log(systemTheme);
  console.log("theme", theme);
  return <div></div>;
}

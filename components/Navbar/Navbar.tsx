import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import Gradient from "../Gradientborder/Gradient";

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  return (
    <div className="sticky top-0 left-0 bg-gray-100 dark:bg-black px-4 py-3 flex items-center justify-between">
      <div className="logo">Aninfo</div>
      <ul className="home flex items-center space-x-8">
        <Gradient>
          <button
            className="btn-default"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Dark
          </button>
        </Gradient>
        <Link href="/home">Home</Link>
        <li>Anime List</li>
        <li>
          <button>Sign in</button>
        </li>
      </ul>
    </div>
  );
}

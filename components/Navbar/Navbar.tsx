import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import Gradient from "../Gradientborder/Gradient";

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  return (
    <div className="sticky top-0 left-0 bg-black px-4 py-3 flex items-center justify-between text-white z-[9999]">
      <div className="logo bg-gradient-purple bg-clip-text text-transparent text-xl">
        <Link href="/">Aninfo</Link>
      </div>
      <ul className="home flex items-center space-x-8">
        <Gradient>
          <button
            className="btn-default"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Dark
          </button>
        </Gradient>
        <li>
          <Link href="Search">Search</Link>
        </li>
        <li>Anime List</li>
        <li>
          <button>Sign in</button>
        </li>
      </ul>
    </div>
  );
}

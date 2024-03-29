import Link from "next/link";
import React from "react";
import Gradient from "../Gradientborder/Gradient";
import SearchBar from "./SearchBar";
import SwitchMode from "./SwitchMode";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 left-0 bg-black px-4 py-3 flex flex-col items-center justify-between text-white z-[9999]">
        <div className="flex items-center justify-between w-full">
          <div className="logo bg-gradient-purple bg-clip-text text-transparent text-xl cursor-pointer">
            <Link href="/">
              <a>
                <img src="/logoaninfo.svg" alt="" />
              </a>
            </Link>
          </div>
          <div className="w-2/3 max-w-2xl relative items-center  hidden md:flex">
            <SearchBar />
          </div>
          <div>
            <div className="home flex items-center space-x-4 md:space-x-8">
              <div>
                <SwitchMode />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

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
              <img src="/logoaninfo.svg" alt="" />
            </Link>
          </div>
          <div className="w-1/3 relative items-center  hidden sm:flex">
            <SearchBar />
          </div>
          <div>
            <div className="home flex items-center space-x-4 md:space-x-8">
              <div>
                <SwitchMode />
              </div>
              <div>
                <Link href="/search" prefetch={false}>
                  Anime List
                </Link>
              </div>
              <div>
                <button>Coming Soon...</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative flex sm:hidden mt-3">
          <SearchBar />
        </div>
      </nav>
    </>
  );
}

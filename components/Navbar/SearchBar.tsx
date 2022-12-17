import React, { Fragment, useEffect, useRef, useState } from "react";
import { useAnimeSearchName } from "../../hooks/useAnimeSearchName";
import { useDebounce } from "../../hooks/useDebounce";
import SearchCardAnime from "../AnimeInfo/SearchCardAnime";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function SearchBar() {
  const searchList = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const [colorSearch, setColorSearch] = useState<string>("");
  const {
    data: searchanime,
    fetchNextPage,
    isLoading,
  } = useAnimeSearchName(debouncedSearchValue);
  const handleFocus = () => {
    if (searchList && searchList.current) {
      setIsFocused(true);
    }
  };
  const handleClickOutside = (e: any) => {
    if (input && input.current && !input.current.contains(e.target)) {
      if (searchList && searchList.current) {
        setIsFocused(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutside(e));

    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e));
    };
  }, []);

  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") setColorSearch("#9CA3AF");
    else setColorSearch("#6A7280");
  }, [theme]);

  return (
    <>
      <div
        className="flex flex-1 rounded-sm overflow-hidden relative items-center gap-2"
        ref={input}
      >
        <input
          className="flex-1 w-full px-2 py-1 outline-none text-black dark:text-white bg-gray-300 dark:bg-[#3B3B3B] placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          onFocus={handleFocus}
        />
        <div className="absolute right-12">
          <svg
            fill={colorSearch}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="25px"
            height="25px"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
          </svg>
        </div>
        <Link href={"/search"} prefetch={false}>
          <a className="block w-8 h-8 p-[2px] bg-gray-300 dark:bg-[#3B3B3B] rounded-sm cursor-pointer">
            <img src="/details.png" alt="" />
          </a>
        </Link>
      </div>
      <div
        ref={searchList}
        className={`absolute w-full ${
          searchValue && isFocused ? "h-[300px]" : "h-0"
        } top-full dark:bg-[#3B3B3B] bg-gray-300 mt-2 rounded-sm overflow-hidden overflow-y-scroll transition-all duration-300 scrollbar-thin scrollbar-thumb-secondary scrollbar-track-gray-300 dark:scrollbar-track-[#3B3B3B] z-50`}
      >
        {!searchanime ? (
          <div className="flex items-center justify-center h-full w-full">
            <div className="cascade">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          searchanime.pages.map((page, index) => (
            <Fragment key={index}>
              {page.media.map((anime) => (
                <SearchCardAnime data={anime} />
              ))}
            </Fragment>
          ))
        )}
      </div>
    </>
  );
}

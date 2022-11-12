import React, { Fragment, useEffect, useRef, useState } from "react";
import { useAnimeSearchName } from "../../hooks/useAnimeSearchName";
import SearchCardAnime from "../AnimeInfo/SearchCardAnime";

export default function SearchBar() {
  const searchList = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const {
    data: searchanime,
    fetchNextPage,
    isFetching,
  } = useAnimeSearchName(searchValue);
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

  useEffect(() => {
    return () => {};
  }, [searchValue]);

  return (
    <>
      <div className="flex-1 rounded-sm overflow-hidden relative" ref={input}>
        <input
          className="flex-1 w-full px-2 py-1 outline-none text-black dark:text-white"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          onFocus={handleFocus}
        />
      </div>
      <div
        ref={searchList}
        className={`absolute w-full ${
          searchValue && isFocused ? "h-[300px]" : "h-0"
        } top-full bg-[#554E5B] mt-2 rounded-sm overflow-hidden overflow-y-scroll transition-all duration-300`}
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

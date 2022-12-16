import { dividerClasses, Skeleton } from "@mui/material";
import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import Animedata from "../components/AnimeInfo/Animedata";
import InputTextCustom from "../components/Input/InputTextCustom";
import CustomSelector from "../components/Selector/CustomSelector";
import Multipleselector from "../components/Selector/Multipleselector";
import SimpleSelector from "../components/Selector/SimpleSelector";
import LoadingAnimeSearch from "../components/Skeleton/LoadingAnimeSearch";
import { useAnimeSearch } from "../hooks/useAnimeSearch";
import { useDebounce } from "../hooks/useDebounce";
import { useGenreCollection } from "../hooks/useGenreCollection";

export default function Search() {
  let yearStart = 1940;
  const yearEnd = new Date().getFullYear() + 1;
  const years = Array(yearEnd - yearStart + 1)
    .fill("0")
    .map(() => `${yearStart++}`);
  const seasons = ["Winter", "Spring", "Summer", "Fall"];
  const formatList = [
    "TV",
    "TV_SHORT",
    "MOVIE",
    "SPECIAL",
    "OVA",
    "ONA",
    "MUSIC",
    "MANGA",
    "NOVEL",
    "ONE_SHOT",
  ];
  const airingStatutList = [
    "FINISHED",
    "RELEASING",
    "NOT_YET_RELEASED",
    "CANCELLED",
    "HIATUS",
  ];
  const perPage: number = 50;
  const [searchName, setSearchName] = useState<string | null>(null);
  const debouncedSearchValue = useDebounce<string | null>(searchName, 500);
  const [genreList, setGenreList] = useState<string[] | null>(null);
  const [seasonYear, setSeasonYear] = useState<string | null>(null);
  const [season, setSeason] = useState<string | null>(null);
  const [format, setFormat] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [scrollUp, setScrollUp] = useState(false);
  const searchOptions = {
    perPage,
    searchName: debouncedSearchValue,
    genreList,
    seasonYear,
    season,
    format,
    status,
  };

  const {
    data: searchanime,
    fetchNextPage,
    isFetching,
  } = useAnimeSearch(searchOptions);
  const { data: genrelist } = useGenreCollection();

  const genrefiltered = genrelist?.filter((e) => e !== "Hentai");
  const arraySkeleton = [...new Array(10)].map((_, i) => (
    <LoadingAnimeSearch key={i} />
  ));

  useEffect(() => {
    const handleScroll = (e: any) => {
      if (
        e.currentTarget.scrollY + e.currentTarget.innerHeight >=
        e.currentTarget.document.body.clientHeight
      ) {
        fetchNextPage();
      }
      if (e.currentTarget.scrollY > 100) {
        setScrollUp(true);
      } else if (e.currentTarget.scrollY <= 100) {
        setScrollUp(false);
      }
    };
    window.addEventListener("scroll", (e) => handleScroll(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleScroll(e));
    };
  }, []);

  return (
    <>
      <Head>
        <title>Anime List</title>
      </Head>
      <div className="searchtools flex flex-wrap m-10 gap-4 justify-center">
        <div className="searchdiv text-center">
          <h3 className="m-2">Search</h3>
          <InputTextCustom place="Search" onChange={setSearchName} />
        </div>
        <div className="genreselector text-center w-44">
          <h3 className="m-2">Genres</h3>
          {genrefiltered ? (
            <CustomSelector
              options={
                genrefiltered
                  ? genrefiltered.map((g) => {
                      return g;
                    })
                  : []
              }
              setOptions={setGenreList}
            />
          ) : (
            <div className="selector h-[36px] rounded-sm overflow-hidden shadow-[0px_2px_5px_#666666] outline-1 outline-gray-300 outline-double">
              <div
                className="bg-[#737373] w-44 h-[38px] rounded-sm flex items-center"
                // onClick={handleClick}
              >
                <input
                  className="w-32 h-full outline-none p-2 bg-transparent"
                  placeholder="Any"
                  type="text"
                />
                <div className="separator h-[24px] w-[1px] bg-gray-400 mx-1.5"></div>
                <div className="group h-full w-full flex justify-center items-center">
                  <div className="w-[10px] h-[10px] border-[2px] rounded-sm group-hover:border-r-[#999999] group-hover:border-b-[#999999]  border-l-transparent border-t-transparent transition-all rotate-45 -translate-y-[2px] -translate-x-[2px]"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="yearselector text-center w-44">
          <h3 className="m-2">Year</h3>
          <SimpleSelector
            options={years
              .map((i) => ({ label: i, value: i }))
              .sort((a, b) => +b.label - +a.label)}
            setOption={setSeasonYear}
          />
        </div>
        <div className="seasonselector text-center w-44">
          <h3 className="m-2">Season</h3>
          <SimpleSelector
            options={seasons.map((i) => ({ label: i, value: i.toUpperCase() }))}
            setOption={setSeason}
          />
        </div>
        <div className="formatselector text-center w-44">
          <h3 className="m-2">Format</h3>
          <SimpleSelector
            options={formatList.map((i) => ({ label: i, value: i }))}
            setOption={setFormat}
          />
        </div>
        <div className="airingselector text-center w-44">
          <h3 className="m-2">Airing Status</h3>
          <SimpleSelector
            options={airingStatutList.map((i) => ({ label: i, value: i }))}
            setOption={setStatus}
          />
        </div>
      </div>
      <section className="animelist w-full">
        <div className="popularlist m-4 flex flex-wrap justify-center xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {!searchanime
            ? arraySkeleton
            : searchanime.pages.map((page, index) => (
                <Fragment key={index}>
                  {page.media.map((anime) => (
                    <Animedata key={anime.id} data={anime} />
                  ))}
                </Fragment>
              ))}
          {isFetching && arraySkeleton}
        </div>
      </section>
      <div
        className={`fixed bottom-[2%] right-[2%] w-12 h-12 shadow-md bg-gray-500 hover:bg-gray-600 dark:bg-gradient-purple dark:hover:bg-slate-400 rounded-full justify-center items-center cursor-pointer ${
          !scrollUp ? "hidden" : "flex"
        }`}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <img className="w-6 object-cover invert-0" src="/arrow-up.png" alt="" />
      </div>
      {/* )} */}
    </>
  );
}

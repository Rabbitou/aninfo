import { dividerClasses, Skeleton } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Animedata from "../components/AnimeInfo/Animedata";
import InputTextCustom from "../components/Input/InputTextCustom";
import CustomSelector from "../components/Selector/CustomSelector";
import Multipleselector from "../components/Selector/Multipleselector";
import SimpleSelector from "../components/Selector/SimpleSelector";
import LoadingAnimeSearch from "../components/Skeleton/LoadingAnimeSearch";
import { useAnimeSearch } from "../hooks/useAnimeSearch";
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
  const perPage: number = 20;
  const [searchName, setSearchName] = useState<string | null>(null);
  const [genreList, setGenreList] = useState<string[] | null>(null);
  const [seasonYear, setSeasonYear] = useState<string | null>(null);
  const [season, setSeason] = useState<string | null>(null);
  const [format, setFormat] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const searchOptions = {
    perPage,
    searchName,
    genreList,
    seasonYear,
    season,
    format,
    status,
  };
  // const searchanime = "";
  const { data: searchanime } = useAnimeSearch(searchOptions);
  const { data: genrelist } = useGenreCollection();
  // const genrelist = [];
  // console.log(
  //   "genre > ",
  //   genreList?.map((g) => `"${g}"`)
  // );

  const genrefiltered = genrelist?.filter((e) => e !== "Hentai");
  // if (!genrelist) return <h2>Loading...</h2>;
  // if (!searchanime) return <h2>Loading...</h2>;
  // if (!genrefiltered) return <h2>Loading...</h2>;
  // console.log(searchanime);

  return (
    <>
      <Head>Search</Head>
      <div className="searchtools flex flex-wrap m-10 gap-4 justify-center">
        <div className="searchdiv text-center">
          <h3 className="m-2">Search</h3>
          <InputTextCustom place="Search" onChange={setSearchName} />
        </div>
        <div className="genreselector text-center w-44">
          <h3 className="m-2">Genres</h3>
          {/* <Multipleselector
            options={
              genrefiltered
                ? genrefiltered.map((g) => {
                    return { value: g, label: g };
                  })
                : []
            }
            setOptions={setGenreList}
          /> */}
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
            <div className="selector rounded-sm overflow-hidden shadow-[0px_2px_5px_#666666]">
              <div
                className="bg-red-300 w-44 h-[38px] rounded-sm flex items-center"
                // onClick={handleClick}
              >
                <input
                  className="w-32 h-full outline-none p-2"
                  placeholder="Any"
                  type="text"
                />
                <div className="separator h-[24px] w-[1px] bg-gray-400 mx-1.5"></div>
                <div className="bg-blue-400 h-full w-full flex justify-center items-center">
                  <div className="w-[10px] h-[10px] border-[2px] rounded-sm border-r-green-700 border-b-green-700  border-l-transparent border-t-transparent rotate-45 -translate-y-[2px] -translate-x-[2px]"></div>
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
      {/* {!searchanime ? (
        <h2>Loading...</h2>
      ) : ( */}
      <div className="animelist w-full">
        <div className="popularlist m-4 flex flex-wrap justify-center xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {!searchanime
            ? [...new Array(6)].map((_, i) => <LoadingAnimeSearch key={i} />)
            : searchanime.map((anime) => (
                <Animedata key={anime.id} data={anime} />
              ))}
        </div>
      </div>
      {/* )} */}
    </>
  );
}

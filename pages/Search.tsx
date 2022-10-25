import { Skeleton } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Animedata from "../components/AnimeInfo/Animedata";
import InputTextCustom from "../components/Input/InputTextCustom";
import Multipleselector from "../components/Selector/Multipleselector";
import SimpleSelector from "../components/Selector/SimpleSelector";
import LoadingAnimeSearch from "../components/Skeleton/LoadingAnimeSearch";
import { useAnimeSearch } from "../hooks/useAnimeSearch";
import { useGenreCollection } from "../hooks/useGenreCollection";

export default function Search() {
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
  const { data: searchanime } = useAnimeSearch(searchOptions);
  // console.log(" >> ", searchOptions);
  const { data: genrelist } = useGenreCollection();
  // console.log(
  //   "genre > ",
  //   genreList?.map((g) => `"${g}"`)
  // );
  // if (!genrelist) return <h2>Loading...</h2>;
  // if (!searchanime) return <h2>Loading...</h2>;

  const genrefiltered = genrelist?.filter((e) => e !== "Hentai");
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
          <Multipleselector
            options={
              genrefiltered
                ? genrefiltered.map((g) => {
                    return { value: g, label: g };
                  })
                : []
            }
            setOptions={setGenreList}
          />
        </div>
        <div className="yearselector text-center w-44">
          <h3 className="m-2">Year</h3>
          <SimpleSelector
            options={[
              { label: "2018", value: "2018" },
              { label: "2017", value: "2017" },
            ]}
          />
        </div>
        <div className="seasonselector text-center w-44">
          <h3 className="m-2">Season</h3>
          {/* <Multipleselector /> */}
        </div>
        <div className="formatselector text-center w-44">
          <h3 className="m-2">Format</h3>
          {/* <Multipleselector /> */}
        </div>
        <div className="airingselector text-center w-44">
          <h3 className="m-2">Airing Status</h3>
          {/* <Multipleselector /> */}
        </div>
      </div>
      {/* {!searchanime ? (
        <h2>Loading...</h2>
      ) : ( */}
      <div className="animelist w-full">
        <div className="popularlist m-4 flex flex-wrap justify-center xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {!searchanime
            ? [...new Array(6)].map(() => <LoadingAnimeSearch />)
            : searchanime.map((anime) => (
                <Animedata key={anime.id} data={anime} />
              ))}
        </div>
      </div>
      {/* )} */}
    </>
  );
}

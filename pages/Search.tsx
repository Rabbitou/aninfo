import { TextField } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import InputTextCustom from "../components/Input/InputTextCustom";
import Multipleselector from "../components/Selector/Multipleselector";
import { useGenreCollection } from "../hooks/useGenreCollection";

export default function Search() {
  const [searchvalue, setSearchvalue] = useState("");

  const { data: genrelist } = useGenreCollection();
  if (!genrelist) return <h2>Loading...</h2>;

  const genrefiltered = genrelist.filter((e) => e !== "Hentai");

  return (
    <>
      <Head>Search</Head>
      <div className="searchtools flex flex-wrap m-10 gap-4 justify-center">
        <div className="searchdiv text-center">
          <h3 className="m-2">Search</h3>
          <InputTextCustom place="Search" onChange={setSearchvalue} />
        </div>
        <div className="genreselector text-center w-44">
          <h3 className="m-2">Genres</h3>
          <Multipleselector
            options={genrefiltered.map((g) => {
              return { value: g, label: g };
            })}
          />
        </div>
        <div className="yearselector text-center w-44">
          <h3 className="m-2">Year</h3>
          <Multipleselector />
        </div>
        <div className="seasonselector text-center w-44">
          <h3 className="m-2">Season</h3>
          <Multipleselector />
        </div>
        <div className="formatselector text-center w-44">
          <h3 className="m-2">Format</h3>
          <Multipleselector />
        </div>
        <div className="airingselector text-center w-44">
          <h3 className="m-2">Airing Status</h3>
          <Multipleselector />
        </div>
      </div>
    </>
  );
}

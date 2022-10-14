import Head from "next/head";
import React from "react";
import Animedata from "../components/AnimeInfo/Animedata";

export default function home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex">
        <div className="seasondiv w-full">
          <div className="titleseason">
            <h2 className="p-4">Season Anime</h2>
            <hr className="mx-4" />
          </div>
          <div className="animeseasonlist m-4 grid grid-cols-2 gap-5">
            <Animedata />
            <Animedata />
          </div>
        </div>
      </div>
    </>
  );
}

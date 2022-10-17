import Head from "next/head";
import React from "react";
import Animedata from "../components/AnimeInfo/Animedata";
import Gradient from "../components/Gradientborder/Gradient";

export default function Home() {
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
          <div className="animeseasonlist m-4 grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            <Animedata />
            <Animedata />
            <Animedata />
            <Animedata />
            <Animedata />
          </div>
        </div>
      </div>
    </>
  );
}

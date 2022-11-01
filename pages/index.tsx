import Head from "next/head";
import React from "react";
import Animedata from "../components/AnimeInfo/Animedata";
import TinyAnimeData from "../components/AnimeInfo/TinyAnimeData";
import Gradient from "../components/Gradientborder/Gradient";
import SwiperBox from "../components/Swiper/SwiperBox";
import { endpoint } from "../endpoint/endpoint";
import { usePopularAnime } from "../hooks/usePopularAnime";
import { usePopularMovie } from "../hooks/usePopularMovie";
import { useTrendingAnime } from "../hooks/useTrendingAnime";

export default function Home() {
  // const { data: datatrending } = useTrendingAnime(20);
  // const { data: popularanime } = usePopularAnime(20);
  // const { data: popularmovie } = usePopularMovie(20);
  // if (!datatrending) return <h2>Loading...</h2>;
  // if (!popularanime) return <h2>Loading...</h2>;
  // if (!popularmovie) return <h2>Loading...</h2>;
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="flex flex-col">
        <div className="trendingdiv w-full">
          <div className="titletrending">
            <h2 className="p-4 capitalize">trending now</h2>
            <hr className="mx-4" />
          </div>
          <div className="animeseasonlist m-4 flex flex-wrap justify-center xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {/* {datatrending.map((anime) => (
              <Animedata key={anime.id} data={anime} />
            ))} */}
            {/* {[...new Array(6)].map((_, i) => (
              <TinyAnimeData key={i} />
            ))} */}
          </div>
          <SwiperBox />
        </div>
        <div className="populardiv w-full">
          <div className="titlepopular">
            <h2 className="p-4 capitalize">popular anime</h2>
            <hr className="mx-4" />
          </div>
          <div className="popularlist m-4 flex flex-wrap justify-center xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {/* {popularanime.map((anime) => (
              <Animedata key={anime.id} data={anime} />
            ))} */}
          </div>
        </div>
        <div className="popularmoviediv w-full">
          <div className="titlepopularmovie">
            <h2 className="p-4 capitalize">popular movies</h2>
            <hr className="mx-4" />
          </div>
          <div className="popularmovielist m-4 flex flex-wrap justify-center xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {/* {popularmovie.map((anime) => (
              <Animedata key={anime.id} data={anime} />
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
}

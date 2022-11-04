import Head from "next/head";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Animedata from "../components/AnimeInfo/Animedata";
import TinyAnimeData from "../components/AnimeInfo/TinyAnimeData";
import Gradient from "../components/Gradientborder/Gradient";
import TinyAnimeSkeleton from "../components/Skeleton/TinyAnimeSkeleton";
import SwiperBox from "../components/Swiper/SwiperBox";
import { endpoint } from "../endpoint/endpoint";
import { usePopularAnime } from "../hooks/usePopularAnime";
import { usePopularMovie } from "../hooks/usePopularMovie";
import { useTrendingAnime } from "../hooks/useTrendingAnime";

export default function Home() {
  const { data: datatrending } = useTrendingAnime(20);
  // const { data: datatrending } = "";
  const { data: popularanime } = usePopularAnime(20);
  // const { data: popularanime } = "";
  const { data: popularmovie } = usePopularMovie(20);
  // const { data: popularmovie } = "";
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
          <div className="titletrending mb-6">
            <h2 className="p-4 capitalize">trending now</h2>
            <hr className="mx-4" />
          </div>
          <SwiperBox>
            {datatrending
              ? datatrending.map((anime, i) => (
                  <SwiperSlide key={i} className="!w-[170px]">
                    {" "}
                    <TinyAnimeData data={anime} />
                  </SwiperSlide>
                ))
              : [...new Array(10)].map((_, i) => (
                  <SwiperSlide key={i} className="!w-[170px]">
                    {" "}
                    {<TinyAnimeSkeleton />}
                  </SwiperSlide>
                ))}
          </SwiperBox>
        </div>
        <div className="populardiv w-full">
          <div className="titlepopular mb-6">
            <h2 className="p-4 capitalize">popular anime</h2>
            <hr className="mx-4" />
          </div>
          <SwiperBox>
            {popularanime
              ? popularanime.map((anime, i) => (
                  <SwiperSlide key={i} className="!w-[170px]">
                    {" "}
                    <TinyAnimeData data={anime} />
                  </SwiperSlide>
                ))
              : [...new Array(10)].map((_, i) => (
                  <SwiperSlide key={i} className="!w-[170px]">
                    {" "}
                    {<TinyAnimeSkeleton />}
                  </SwiperSlide>
                ))}
          </SwiperBox>
        </div>
        <div className="popularmoviediv w-full">
          <div className="titlepopularmovie mb-6">
            <h2 className="p-4 capitalize">popular movies</h2>
            <hr className="mx-4" />
          </div>
          <SwiperBox>
            {popularmovie
              ? popularmovie.map((anime, i) => (
                  <SwiperSlide key={i} className="!w-[170px]">
                    {" "}
                    <TinyAnimeData data={anime} />
                  </SwiperSlide>
                ))
              : [...new Array(10)].map((_, i) => (
                  <SwiperSlide key={i} className="!w-[170px]">
                    {" "}
                    {<TinyAnimeSkeleton />}
                  </SwiperSlide>
                ))}
          </SwiperBox>
        </div>
      </section>
    </>
  );
}

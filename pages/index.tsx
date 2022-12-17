import Head from "next/head";
import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import AnimeBanner from "../components/AnimeBanner/AnimeBanner";
import Animedata from "../components/AnimeInfo/Animedata";
import SearchCardAnime from "../components/AnimeInfo/SearchCardAnime";
import TinyAnimeData from "../components/AnimeInfo/TinyAnimeData";
import Gradient from "../components/Gradientborder/Gradient";
import AnimeBannerSkeleton from "../components/Skeleton/AnimeBannerSkeleton";
import TinyAnimeSkeleton from "../components/Skeleton/TinyAnimeSkeleton";
import SwiperBanner from "../components/Swiper/SwiperBanner";
import SwiperBox from "../components/Swiper/SwiperBox";
import { endpoint } from "../endpoint/endpoint";
import { useAnimeBanner } from "../hooks/useAnimeBanner";
import { usePopularAnime } from "../hooks/usePopularAnime";
import { usePopularMovie } from "../hooks/usePopularMovie";
import { useTrendingAnime } from "../hooks/useTrendingAnime";

export default function Home() {
  const { data: datatrending } = useTrendingAnime(20);
  // const { data: datatrending } = "";
  const { data: popularanime } = usePopularAnime(20);
  // const { data: popularanime } = "";
  const { data: popularmovie } = usePopularMovie(20);
  const { data: banneranime } = useAnimeBanner();
  const [changeMovetr, setChangeMovetr] = useState(0);
  const [changeMovepo, setChangeMovepo] = useState(0);
  const [changeMovemov, setChangeMovemov] = useState(0);
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
        <div className="w-full">
          <SwiperBanner>
            {banneranime
              ? banneranime.map((anime, i) => (
                  <SwiperSlide key={i} className="!w-full md:!w-[1200px]">
                    {" "}
                    {<AnimeBanner data={anime} />}
                  </SwiperSlide>
                ))
              : [...new Array(3)].map((_, i) => (
                  <SwiperSlide key={i} className="!w-full md:!w-[1200px]">
                    {" "}
                    {<AnimeBannerSkeleton />}
                  </SwiperSlide>
                ))}
          </SwiperBanner>
        </div>
        <div className="trendingdiv w-full">
          <div className="titletrending mb-6">
            <h2 className="p-4 capitalize">trending now</h2>
            <hr className="mx-4 border-black dark:border-white" />
          </div>
          <SwiperBox setChangeMove={setChangeMovetr}>
            {datatrending
              ? datatrending.map((anime, i) => (
                  <SwiperSlide key={i} className="!w-[170px]">
                    {" "}
                    <TinyAnimeData data={anime} activeSlide={changeMovetr} />
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
            <hr className="mx-4 border-black dark:border-white" />
          </div>
          <SwiperBox setChangeMove={setChangeMovepo}>
            {popularanime
              ? popularanime.map((anime, i) => (
                  <SwiperSlide key={i} className="!w-[170px]">
                    {" "}
                    <TinyAnimeData data={anime} activeSlide={changeMovepo} />
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
            <hr className="mx-4 border-black dark:border-white" />
          </div>
          <SwiperBox setChangeMove={setChangeMovemov}>
            {popularmovie
              ? popularmovie.map((anime, i) => (
                  <SwiperSlide key={i} className="!w-[170px]">
                    {" "}
                    <TinyAnimeData data={anime} activeSlide={changeMovemov} />
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
      <footer className="py-6"></footer>
    </>
  );
}

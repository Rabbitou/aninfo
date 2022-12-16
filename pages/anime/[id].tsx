import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MainDetails from "../../components/AnimeDetail/MainDetails";
import SideBarDetails from "../../components/AnimeDetail/SideBarDetails";
import { useAnimeById } from "../../hooks/useAnimeById";
import parse from "html-react-parser";
import AnimeIdSkeleton from "../../components/Skeleton/AnimeId/AnimeIdSkeleton";
import Head from "next/head";

export default function AnimePage() {
  const router = useRouter();
  const animeId = Number(router.query.id);
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { data } = useAnimeById(animeId || 0);
  if (!data) return <AnimeIdSkeleton />;

  return (
    <>
      <Head>
        <title>{data.title.romaji}</title>
      </Head>
      <section className="w-full relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="header">
            <div className="banner w-full h-[400px] absolute top-0 left-0 opacity-50 dark:opacity-40">
              <img
                className="w-full h-full object-cover"
                src={data.bannerImage || data.coverImage.extraLarge}
                alt=""
              />
            </div>
            <div className="flex flex-col md:flex-row relative px-6 pt-[180px] w-full items-center md:items-start">
              <div className="coverimg w-[270px] h-[430px] col-span-1 shrink-0 grow-0 rounded-sm overflow-hidden shadow-md">
                <img
                  src={data.coverImage.extraLarge}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col mt-10 md:mt-[180px] px-6">
                <h4 className="text-2xl text-center md:text-left font-bold uppercase mb-4">
                  {data.title.romaji}
                </h4>
                <p>
                  {data.description
                    ? parse(data.description)
                    : "No description"}
                </p>
              </div>
            </div>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{ borderBottom: 1, borderColor: "#454545", width: "100%" }}
              className="dark:text-white"
              TabIndicatorProps={{ style: { backgroundColor: "#9733EE" } }}
              centered
            >
              <Tab
                label="Overview"
                value={0}
                className={`${
                  value === 0 ? "dark:text-secondary" : ""
                } dark:text-white`}
              />
              <Tab
                label="Characters"
                value={1}
                className={`${
                  value === 1 ? "dark:text-secondary" : ""
                } dark:text-white`}
              />
              <Tab
                label="Staff"
                value={2}
                className={`${
                  value === 2 ? "dark:text-secondary" : ""
                } dark:text-white`}
              />
            </Tabs>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start px-6 mt-6 gap-10">
            <SideBarDetails data={data} />
            <MainDetails index={value} data={data} />
          </div>

          <footer className="py-10"></footer>
        </div>
      </section>
    </>
  );
}

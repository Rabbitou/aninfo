import { Skeleton, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import parse from "html-react-parser";
import SideBarDetailsSkeleton from "./SideBarDetailsSkeleton";
import MainDetailsSkeleton from "./MainDetailsSkeleton";

export default function AnimeIdSkeleton() {
  const router = useRouter();
  const animeId = Number(router.query.id);
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className="w-full relative">
      <div className="max-w-[1400px] mx-auto ">
        <div className="header">
          <div className="banner w-full h-[400px] absolute top-0 left-0 opacity-50 dark:opacity-40">
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={"100%"}
              sx={{ bgcolor: "#505050" }}
            />
          </div>
          <div className="flex flex-col md:flex-row relative px-6 pt-[180px] w-full items-center md:items-start">
            <div className="coverimg w-[270px] h-[430px] col-span-1 shrink-0 grow-0 rounded-sm overflow-hidden shadow-md">
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"100%"}
                sx={{ bgcolor: "#505050" }}
              />
            </div>
            <div className="flex flex-col mt-10 md:mt-[180px] px-6">
              <h4 className="text-2xl h-8 w-[350px] md:w-[420px] text-center md:text-left font-bold uppercase mb-4">
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={"100%"}
                  sx={{ bgcolor: "#505050" }}
                />
              </h4>
              <p className="h-36 w-[350px] md:w-[420px]">
                {" "}
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={"100%"}
                  sx={{ bgcolor: "#505050" }}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start px-6 mt-6 gap-10">
          <SideBarDetailsSkeleton />
          <MainDetailsSkeleton />
        </div>

        <footer className="py-10"></footer>
      </div>
    </section>
  );
}

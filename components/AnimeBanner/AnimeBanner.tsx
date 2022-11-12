import Link from "next/link";
import React from "react";
import { AnimeBanner as AnimeType } from "../../types/AnimeBanner";
import Gradient from "../Gradientborder/Gradient";
import parse from "html-react-parser";

export default function AnimeBanner({ data }: { data: AnimeType }) {
  return (
    <div className="w-full md:w-[1200px] h-[400px] relative">
      <div className="w-full md:w-[1200px] h-[360px] absolute top-0 right-0 ">
        <div className="bg-gradient-to-r from-[#1b1b1b] to-transparent absolute h-full w-full"></div>
        <img
          className="w-full h-full object-cover"
          src={data.bannerImage || "?"}
          alt=""
        />
      </div>
      <div className="flex flex-col pt-16 px-10 w-full md:w-[50%] relative">
        <h1 className="pb-10 font-bold text-3xl text-white">
          {data.title.romaji || "?"}
        </h1>
        <p className="mb-5 text-ellipsis line-clamp-3 text-white opacity-70">
          {parse(data?.description || "No description")}
        </p>
        <Link href={`/anime/${data.id}`} prefetch={false}>
          <a>
            <Gradient>
              <button className="py-1 px-10  hover:text-white transition-colors text-white">
                More Details
              </button>
            </Gradient>
          </a>
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import { Anime } from "../../types/Anime";
import parse from "html-react-parser";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

export default function Animedata({ data }: { data: Anime }) {
  const nextairing = moment.duration(
    data.nextAiringEpisode?.timeUntilAiring * 1000,
    "milliseconds"
  );
  return (
    <div className="rounded-sm overflow-hidden bg-gray-300 dark:bg-gray-700 flex flex-col basis-[250px] flex-shrink-0 flex-grow-0 md:basis-[400px] shadow-[0px_2px_8px_#666666] dark:shadow-[0px_2px_8px_#454545]">
      <div className="flex flex-col md:flex-row">
        <Link href={`/anime/${data.id}`} prefetch={false}>
          <a className="animeimg basis-[200px] h-[350px] flex-grow-0 flex-shrink-0 cursor-pointer hover:opacity-80 transition-all relative">
            <Image
              src={data.coverImage.extraLarge}
              layout={"fill"}
              objectFit={"cover"}
            />
          </a>
        </Link>
        <div className="synopsis flex flex-col items-center justify-center bg-gray-300 dark:bg-[#272727] h-[250px] md:h-full w-full">
          <div className="titleepisodes flex flex-col items-center space-x-2">
            <Link href={`/anime/${data.id}`} prefetch={false}>
              <a className="animetitle p-2 text-center hover:text-[#2b2b2bb9] dark:hover:text-[#c7c7c7b9] transition-all">
                {data.title.romaji || "?"}
              </a>
            </Link>
            <div className="episodesinfo flex flex-col items-center">
              {data.status !== "FINISHED" ? (
                <div className="episodes px-2 text-xs font-bold">
                  Episode {data.nextAiringEpisode?.episode || "?"} of{" "}
                  {data.episodes || "?"} in
                </div>
              ) : (
                <div className="episodes px-2 text-xs font-bold">
                  {data.episodes || "?"} Episodes
                </div>
              )}
              {data.status !== "FINISHED" && (
                <div className="timeepisode text-xs">
                  {" "}
                  {nextairing.days()} days, {nextairing.hours()} hours
                </div>
              )}
            </div>
          </div>
          <div className="detailsstudio p-4 max-h-44 overflow-y-auto text-center text-xs flex flex-col scrollbar-thumb-[#9733ee99] scrollbar-track-gray-400 dark:scrollbar-track-[#404040] scrollbar-thin">
            <p>{parse(data?.description || "No description")}</p>
            <span>
              Studio:{" "}
              {data.studios.nodes.length > 0 ? data.studios.nodes[0].name : "?"}
            </span>
          </div>
        </div>
      </div>
      <div className="secondary flex flex-col flex-1">
        <div className="ratingstatus flex md:flex-row flex-col items-center justify-center space-x-4 bg-gray-400 dark:bg-[#3b3b3b] p-2">
          <div className="rating flex items-center">
            <img
              src="/star-small.png"
              className="w-4 md:w-5 h-4 md:h-5 mx-[6px] md:mx-[10px]"
            />{" "}
            {data.averageScore / 10 || "?"}
          </div>
          <div className="status py-1 text-xs md:text-sm">
            {data.format || "?"}, Year |{" "}
            <span className="capitalize">
              {data.status?.toLowerCase() || "?"}
            </span>{" "}
            | {data.episodes || "?"} eps, {data.duration || "?"} min
          </div>
        </div>
        <div className="genre bg-gray-300 dark:bg-[#4e4e4e] flex-1 flex  items-center justify-center">
          <ul className="flex space-x-2 flex-wrap p-2 justify-center text-xs md:text-sm">
            {data.genres.map((ge) => (
              <li key={data.id + ge}>{ge}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

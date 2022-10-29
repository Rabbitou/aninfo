import React from "react";
import { Anime } from "../../types/Anime";
import Primaryinfo from "./Primaryinfo";
import Secondaryinfo from "./Secondaryinfo";
import parse from "html-react-parser";
import moment from "moment";

export default function Animedata({ data }: { data: Anime }) {
  const nextairing = moment.duration(
    data.nextAiringEpisode?.timeUntilAiring * 1000,
    "milliseconds"
  );
  return (
    <div className="rounded-sm overflow-hidden bg-[#E5E5E5] dark:bg-[#5D5D5D] flex flex-col basis-[250px] flex-shrink-0 flex-grow-0 md:basis-[400px]">
      {/* <Primaryinfo /> */}
      <div className="flex flex-col md:flex-row">
        <div className="animeimg bg-slate-200 basis-[200px] h-[350px] flex-grow-0 flex-shrink-0">
          <img
            className="w-full h-[350px] object-cover"
            alt="anime img"
            src={data.coverImage.extraLarge}
          />
        </div>
        <div className="synopsis flex text-white  flex-col items-center justify-center bg-blue-400 dark:bg-transparent h-[250px] md:h-full">
          <div className="titleepisodes flex flex-col items-center space-x-2">
            <h2 className="animetitle p-2 text-center">
              {data.title.romaji || "?"}
            </h2>
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
          <div className="detailsstudio p-4 max-h-44 overflow-y-auto text-center text-xs flex flex-col">
            <span className="">{parse(data?.description || "")}</span>
            <span className="">
              Studio:{" "}
              {data.studios.nodes.length > 0 ? data.studios.nodes[0].name : "?"}
            </span>
          </div>
        </div>
      </div>
      {/* <Secondaryinfo /> */}
      <div className="secondary flex flex-col flex-1">
        <div className="ratingstatus flex md:flex-row flex-col items-center justify-center space-x-4 bg-[#CACACA] dark:bg-[#2B2B2B] p-2">
          <div className="rating flex items-center">
            <img src="/icons8-star-48.png" className="w-5 h-5 mx-1" />{" "}
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
        <div className="genre bg-[#AFAFAF] dark:bg-[#444444] flex-1 flex  items-center justify-center">
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

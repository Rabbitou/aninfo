import React, { useEffect, useRef, useState } from "react";
import { TinyAnime } from "../../types/TinyAnime";
import Gradient from "../Gradientborder/Gradient";
import parse from "html-react-parser";
import Link from "next/link";

export default function TinyAnimeData({ data }: { data: TinyAnime }) {
  const [positionBox, setPositionBox] = useState(0);
  const [windowSize, setWindowSize] = useState(0);
  const tinyAnime = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    if (tinyAnime && tinyAnime.current)
      setPositionBox(tinyAnime.current.getBoundingClientRect().left);
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      if (tinyAnime && tinyAnime.current)
        setPositionBox(tinyAnime.current.getBoundingClientRect().left);
    };
    // console.log(
    //   tinyAnime?.current?.parentElement?.parentElement?.parentElement
    // );
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      if (tinyAnime && tinyAnime.current) {
        setPositionBox(tinyAnime.current.getBoundingClientRect().left);
        // console.log(tinyAnime.current.getBoundingClientRect().left);
      }
    };

    tinyAnime?.current?.parentElement?.parentElement?.parentElement?.addEventListener(
      "mouseup",
      handleScroll
    );

    return () => {
      tinyAnime?.current?.parentElement?.parentElement?.parentElement?.removeEventListener(
        "mouseup",
        handleScroll
      );
      window.removeEventListener("resize", handleResize);
    };
  }, [tinyAnime]);

  return (
    <div className="group relative" ref={tinyAnime}>
      <div className="containeranime w-[170px]">
        <div className="animeimg w-[170px] h-[260px] flex-grow-0 flex-shrink-0">
          <img
            className="w-full h-[260px] object-cover"
            draggable={false}
            alt="CoverImg"
            src={data.coverImage.extraLarge}
          />
        </div>
        <div className="title text-center truncate py-1">
          {data.title.romaji || "?"}
        </div>
      </div>
      <div
        className={` absolute w-0 top-0 h-full group-hover:w-full md:group-hover:w-[215px] z-[1] ${
          windowSize / 2 > positionBox
            ? "md:left-full md:group-hover:pl-3"
            : "md:right-full md:group-hover:pr-3"
        } overflow-hidden transition-all`}
      >
        <div className="relative moreinfoDiv w-full h-full bg-gray-300 dark:bg-white flex flex-col text-sm p-2">
          <div className="font-bold text-black text-center mb-2">
            {data.title.romaji || "?"}
          </div>
          <div className="text-center italic text-black text-xs mb-1">
            {data.format || "? format ?"}
            {data.episodes ? ` / ${data.episodes} episodes` : ""}
          </div>
          <p className="h-[170px] overflow-y-scroll text-center px-3 scrollbar-thin text-xs scrollbar-track-gray-500 scrollbar-thumb-gray-600 text-gray-500">
            {parse(data?.description || "")}
          </p>
          <div className="text-center my-1 text-black text-xs text-[10px] px-2">
            {data.genres.map((g) => `${g} `)}
          </div>
          <div className="flex justify-center">
            <Link href={`anime/${data.id}`}>
              <a>
                <Gradient>
                  <button className="py-1 px-4  hover:text-white transition-colors text-white">
                    Details
                  </button>
                </Gradient>
              </a>
            </Link>
          </div>
          <div
            className={`border-8 top-2 hidden md:block border-transparent ${
              windowSize / 2 > positionBox
                ? "right-full dark:border-r-white border-r-gray-300"
                : "left-full dark:border-l-white border-l-gray-300"
            }  absolute`}
          ></div>
        </div>
      </div>
    </div>
  );
}

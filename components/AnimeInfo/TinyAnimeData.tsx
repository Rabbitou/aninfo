import React, { useEffect, useRef, useState } from "react";
import Gradient from "../Gradientborder/Gradient";

export default function TinyAnimeData() {
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
        console.log(tinyAnime.current.getBoundingClientRect().left);
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
    <div className="flex group relative" ref={tinyAnime}>
      <div className="containeranime">
        <div className="animeimg bg-slate-200 w-[200px] h-[350px] flex-grow-0 flex-shrink-0">
          <img
            className="w-full h-[350px] object-cover"
            draggable={false}
            alt="CoverImg"
            src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png"
          />
        </div>
        <div className="title text-center">Chainsaw Man</div>
      </div>
      <div
        className={` absolute w-0 h-full group-hover:w-64 z-[1] ${
          windowSize / 2 > positionBox
            ? "left-full group-hover:pl-4"
            : "right-full group-hover:pr-4"
        } overflow-hidden transition-all`}
      >
        <div className="relative moreinfoDiv w-full h-full bg-gray-400 flex flex-col text-sm">
          <div className="m-2  text-center">Chainsaw Man</div>
          <div className="ml-5 italic">TV / 25 episodes</div>
          <div className="h-[180px] overflow-y-scroll text-center m-2 px-3 scrollbar-thin scrollbar-track-gray-500 scrollbar-thumb-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            fugit reprehenderit praesentium, iste ab maiores saepe quasi maxime
            sed officiis! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Dolorem alias, autem tenetur distinctio quibusdam natus nemo
            iste repellendus voluptates sapiente.
          </div>
          <div className="text-center m-2 my-4">
            Psychological Psychological Psychological Psychological
            Psychological
          </div>
          <div className="flex justify-center mb-4">
            <Gradient>
              <button className="py-1 px-4 bg-gray-400  hover:bg-transparent hover:text-white transition-colors dark:hover:bg-transparent">
                Coming Soon...
              </button>
            </Gradient>
          </div>
          <div
            className={`border-8 top-2 border-transparent ${
              windowSize / 2 > positionBox
                ? "right-full border-r-gray-400"
                : "left-full border-l-gray-400"
            }  absolute`}
          ></div>
        </div>
      </div>
    </div>
  );
}

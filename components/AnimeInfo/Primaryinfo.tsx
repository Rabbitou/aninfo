import React from "react";

export default function Primaryinfo() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="animeimg bg-slate-200 basis-[180px] flex-grow-0 flex-shrink-0">
        <img
          className="w-full"
          alt="anime img"
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png"
        />
      </div>
      <div className="synopsis flex text-white  flex-col items-center justify-center bg-blue-400 dark:bg-transparent">
        <div className="titleepisodes flex flex-col items-center space-x-2">
          <h2 className="animetitle px-2 text-center">Chainsaw Man</h2>
          <div className="episodesinfo flex flex-col items-center">
            <div className="episodes px-2 text-xs font-bold">
              Episode 2 of 12 in
            </div>
            <div className="timeepisode text-xs"> 2 days, 5 hours</div>
          </div>
        </div>
        <div className="detailsstudio p-4 max-h-44 overflow-y-auto text-center text-xs flex flex-col">
          <span className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore
            quaerat ipsam numquam, voluptas magni hic nobis praesentium
            asperiores natus? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid est voluptas in nesciunt enim corporis dolore facilis
            optio quisquam eveniet!
          </span>
          <span className="">Studio: MAPPA</span>
        </div>
      </div>
    </div>
  );
}

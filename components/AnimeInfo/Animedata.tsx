import React from "react";
import Primaryinfo from "./Primaryinfo";
import Secondaryinfo from "./Secondaryinfo";

export default function Animedata() {
  return (
    <div className="rounded-sm overflow-hidden bg-[#E5E5E5] dark:bg-[#5D5D5D] flex flex-col">
      <Primaryinfo />
      {/* <div className="animeimg col-start-1 row-start-1 w-[100%] bg-slate-200">
        <img
          alt="anime img"
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png"
        />
      </div>
      <div className="synopsis col-start-2 row-start-1 flex flex-col items-center justify-center">
        <h2 className="animetitle">Title Anime</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore
          quaerat ipsam numquam, voluptas magni hic nobis praesentium asperiores
          natus?
        </span>
      </div> */}
      <Secondaryinfo />
    </div>
  );
}

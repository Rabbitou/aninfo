import React from "react";

export default function SearchCardAnime() {
  return (
    <div className="flex bg-slate-500 w-[350px] p-1">
      <div className="w-[91px] h-[127px]">
        <img
          className="w-full h-full object-cover"
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21-tXMN3Y20PIL9.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 text-xs p-2">
        <span>Title (TV)</span>
        <p>Aired: Oct 20, 1999 to ?</p>
        <p>Score: 8.67</p>
        <p>Status: Finished</p>
      </div>
    </div>
  );
}

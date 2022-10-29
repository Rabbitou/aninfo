import React from "react";

export default function TinyAnimeData() {
  return (
    <div className="containeranime">
      <div className="animeimg bg-slate-200 basis-[200px] h-[350px] flex-grow-0 flex-shrink-0">
        <img
          className="w-full h-[350px] object-cover"
          alt="CoverImg"
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png"
        />
      </div>
      <div className="title text-center">Chainsaw Man</div>
    </div>
  );
}

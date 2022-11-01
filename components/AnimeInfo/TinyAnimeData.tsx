import React from "react";

export default function TinyAnimeData() {
  return (
    <div className="flex group relative">
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
      <div className="pl-4 w-56 absolute invisible h-full group-hover:visible z-[1] left-full overflow-hidden">
        <div className="moreinfoDiv w-full h-full bg-gray-400 flex flex-col text-sm">
          <div className="m-2  text-center">Title</div>
          <div className="m-2 italic">format / ep</div>
          <div className="max-h-[200px] overflow-y-scroll text-center m-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            fugit reprehenderit praesentium, iste ab maiores saepe quasi maxime
            sed officiis!
          </div>
          <div className="text-center m-2">
            Action Action Action Action Action
          </div>
        </div>
        <div className="w-6 h-6 bg-white border-b-2 border-l-2 top-0 right-0 border-white rotate-45 relative"></div>
      </div>
    </div>
  );
}

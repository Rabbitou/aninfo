import React from "react";
import Gradient from "../Gradientborder/Gradient";

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
      <div className="group-hover:pl-4 absolute w-0 h-full group-hover:w-64 z-[1] left-full overflow-hidden transition-all">
        <div className="relative moreinfoDiv w-full h-full bg-gray-400 flex flex-col text-sm">
          <div className="m-2  text-center">Chainsaw Man</div>
          <div className="m-2 italic">TV / 25 episodes</div>
          <div className="h-[200px] overflow-y-scroll text-center m-2 px-3 scrollbar-thin scrollbar-track-red-700 scrollbar-thumb-orange-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            fugit reprehenderit praesentium, iste ab maiores saepe quasi maxime
            sed officiis! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Dolorem alias, autem tenetur distinctio quibusdam natus nemo
            iste repellendus voluptates sapiente.
          </div>
          <div className="text-center m-2">
            Action Action Action Action Action
          </div>
          <div className="flex justify-center">
            <Gradient>
              <button className="py-1 px-4 bg-gray-400  hover:bg-transparent hover:text-white  transition-colors dark:hover:bg-transparent">
                Coming Soon...
              </button>
            </Gradient>
          </div>
          <div className="border-8 top-2 right-full border-transparent border-r-gray-400  absolute"></div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Characters } from "../../types/AnimeDetails";

export default function CharactersCard({ data }: { data: Characters }) {
  return (
    <div className="flex h-40 w-full lg:w-[47%] bg-slate-300 dark:bg-gray-700">
      <div className="w-[106px]">
        <img
          className="w-full h-full object-cover"
          src={data.image.large}
          alt=""
        />
      </div>
      <div className="p-1 pl-3">
        <h3 className="font-semibold text-md">{data.name.userPreferred}</h3>
        <p className="text-sm opacity-50">{data.name.native}</p>
      </div>
    </div>
  );
}

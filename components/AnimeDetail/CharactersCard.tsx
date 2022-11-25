import Image from "next/image";
import React from "react";
import { Characters } from "../../types/AnimeDetails";

export default function CharactersCard({ data }: { data: Characters }) {
  return (
    <div className="flex h-40 w-full lg:w-[47%] bg-slate-300 dark:bg-gray-700">
      <div className="w-[106px]">
        <Image
          src={data.image.large}
          width={106}
          height={160}
          objectFit={"cover"}
        />
      </div>
      <div className="p-1 pl-3">
        <h3 className="font-semibold text-md">{data.name.userPreferred}</h3>
        <p className="text-sm opacity-50">{data.name.native}</p>
      </div>
    </div>
  );
}

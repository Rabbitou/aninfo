import Image from "next/image";
import React from "react";
import { Staff } from "../../types/AnimeDetails";

export default function StaffCard({ data }: { data: Staff }) {
  return (
    <div className="flex h-40 w-full lg:w-[47%] bg-slate-300 dark:bg-[#272727]">
      <div className="w-[106px]">
        <Image
          src={data.image.large}
          width={106}
          height={160}
          objectFit={"cover"}
        />
      </div>
      <div className="p-1 pl-3">
        <h3 className="font-semibold text-md">{data.name.full}</h3>
        <p className="text-sm opacity-50">{data.primaryOccupations[0]}</p>
      </div>
    </div>
  );
}

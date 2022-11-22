import React from "react";
import { AnimeSearch } from "../../types/AnimeSearch";
import moment from "moment";
import Link from "next/link";

export default function SearchCardAnime({ data }: { data: AnimeSearch }) {
  return (
    <Link href={`/anime/${data.id}`} prefetch={false}>
      <div className="flex dark:bg-[#554E5B] bg-[#AD9FB5] hover:bg-[#978b9f] dark:hover:bg-[#635b6a] dark:text-white text-black w-full p-1 cursor-pointer">
        <div className="w-[91px] h-[127px]">
          <img
            className="w-full h-full object-cover"
            src={data.coverImage?.extraLarge || "?"}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col gap-1 text-xs p-2">
          <span>
            {data.title.romaji || "?"} ({data.format || "?"})
          </span>
          {data.startDate && data.endDate && (
            <p>
              Aired:{" "}
              {moment(
                `${data.startDate.month} ${data.startDate.day} ${data.startDate.year}`
              ).format("MMM DD, YYYY")}{" "}
              to{" "}
              {data.endDate ? (
                <p>
                  {moment(
                    `${data.endDate.month} ${data.endDate.day} ${data.endDate.year}`
                  ).format("MMM DD, YYYY")}
                </p>
              ) : (
                "?"
              )}
            </p>
          )}
          <p>Score: {data.averageScore / 10 || "?"}</p>
          <p className="capitalize">
            Status: {data.status?.toLowerCase() || "?"}
          </p>
        </div>
      </div>
    </Link>
  );
}

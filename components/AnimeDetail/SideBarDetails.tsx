import React, { ReactNode } from "react";
import { AnimeDetails } from "../../types/AnimeDetails";
import { ExternalLinksType } from "../../types/interfaces/ExternalLinksType";
import moment from "moment";
import { useTheme } from "next-themes";
import Image from "next/image";

function ExternalLinks({ link }: { link: ExternalLinksType }) {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme !== "system" ? theme : systemTheme;
  return (
    <a
      href={link.url}
      onMouseEnter={(e: any) => (e.target.style.backgroundColor = link.color)}
      onMouseLeave={(e: any) =>
        (e.target.style.backgroundColor = `${
          currentTheme === "dark"
            ? "rgb(39 39 39  / 1)"
            : "rgb(203 213 225 / 1)"
        }`)
      }
      className={`flex no-underline rounded-sm text-sm gap-3 md:mb-1 bg-slate-300 dark:bg-[#272727] items-center transition-all p-[2px] w-[48%] md:w-52`}
    >
      <div
        style={{ backgroundColor: link.color || "#505050" }}
        className={`flex p-1 w-6 h-6 justify-center items-center m-1 rounded-[3px]`}
      >
        <Image
          src={link.icon || "/icons8-link-64.png"}
          width={24}
          height={24}
        />
      </div>
      <span>{link.site}</span>
    </a>
  );
}

function Info({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col pb-[14px]">
      <h5 className="capitalize font-semibold text-sm mb-1">{title}</h5>
      <div className="text-xs text-gray-800 dark:text-gray-400">{children}</div>
    </div>
  );
}

export default function SideBarDetails({ data }: { data: AnimeDetails }) {
  const nextairing = moment.duration(
    data.nextAiringEpisode?.timeUntilAiring * 1000,
    "milliseconds"
  );
  return (
    <div className="">
      <div className="w-auto md:w-52 p-6 bg-slate-300 dark:bg-[#272727] rounded-sm flex flex-wrap md:flex-col gap-6 md:gap-0">
        {data.status !== "FINISHED" &&
          data.format !== "MANGA" &&
          data.nextAiringEpisode && (
            <Info title="airing">
              <p className="bg-gradient-purple bg-clip-text text-transparent">
                Ep {data.nextAiringEpisode?.episode || "?"} :{" "}
                {nextairing.days()}d {nextairing.hours()}h{" "}
                {nextairing.minutes()}m
              </p>
            </Info>
          )}
        <Info title="Format">
          <p>{data.format || "?"}</p>
        </Info>
        {data.format !== "MANGA" && (
          <Info title="Episode Duration">
            <p>{data.duration || "?"} mins</p>
          </Info>
        )}
        <Info title="Status">
          <p className="capitalize">{data.status?.toLowerCase() || "?"}</p>
        </Info>
        <Info title="Start Date">
          <p>
            {moment(
              `${data.startDate.month} ${data.startDate.day} ${data.startDate.year}`
            ).format("MMM DD, YYYY")}
          </p>
        </Info>
        {data.format !== "MANGA" && (
          <Info title="Season">
            <p className="capitalize">{`${data.season?.toLowerCase() || "?"} ${
              data.seasonYear
            }`}</p>
          </Info>
        )}
        <Info title="Rating">
          <p>{data.averageScore ? data.averageScore / 10 : "?"}</p>
        </Info>
        {data.format !== "MANGA" && (
          <Info title="Studios">
            {data.studios.nodes.map((n, i) => <p key={i}>{n.name}</p>) || "?"}
          </Info>
        )}
        <Info title="Source">
          <p className="capitalize">
            {data.source ? data.source.toLowerCase() : "?"}
          </p>
        </Info>
        <Info title="Genres">
          {data.genres.map((n, i) => (
            <p key={i}>{n}</p>
          ))}
        </Info>
        <Info title="Romaji">
          <p>{data.title.romaji || "?"}</p>
        </Info>
        <Info title="English">
          <p>{data.title.english || "?"}</p>
        </Info>
        <Info title="Native">
          <p>{data.title.native || "?"}</p>
        </Info>
      </div>
      <h2 className="capitalize my-2">External Links</h2>
      <div className="flex flex-wrap md:flex-col flex-grow-0 gap-3">
        {data.externalLinks.map((l, i) => (
          <ExternalLinks key={i} link={l} />
        ))}
      </div>
    </div>
  );
}

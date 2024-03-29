import React from "react";
import { SwiperSlide } from "swiper/react";
import { AnimeDetails, Characters, Staff } from "../../types/AnimeDetails";
import TinyAnimeData from "../AnimeInfo/TinyAnimeData";
import CharacStaffSkeleton from "../Skeleton/CharacStaffSkeleton";
import TinyAnimeSkeleton from "../Skeleton/TinyAnimeSkeleton";
import SwiperBox from "../Swiper/SwiperBox";
import CharactersCard from "./CharactersCard";
import StaffCard from "./StaffCard";

function Overview({ data }: { data: AnimeDetails }) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="relations">
        <h3 className="font-semibold text-lg">Relations</h3>
        <hr className="w-[50%] border-black dark:border-white" />
        <div className="flex flex-wrap gap-6 mt-6">
          {data.relations?.nodes.map((anime, i) => (
            <TinyAnimeData key={i} data={anime} />
          ))}
        </div>
      </div>
      <div className="characters">
        <h3 className="font-semibold text-lg">Characters</h3>
        <hr className="w-[50%] border-black dark:border-white" />
        <div className="flex flex-wrap gap-4 mt-6">
          {data.characters.nodes.slice(0, 6).map((c, i) => (
            <CharactersCard key={i} data={c} />
          ))}
        </div>
      </div>
      <div className="staff">
        <h3 className="font-semibold text-lg">Staff</h3>
        <hr className="w-[50%] border-black dark:border-white" />
        <div className="flex flex-wrap gap-4 mt-6">
          {data.staff.nodes.slice(0, 6).map((s, i) => (
            <StaffCard key={i} data={s} />
          ))}
        </div>
      </div>
      {data.trailer && (
        <div className="trailer">
          <h3 className="font-semibold text-lg">Trailer</h3>
          <hr className="w-[50%] border-black dark:border-white" />
          <div className="mt-6 w-3/4">
            <iframe
              className="aspect-video w-full"
              src={`https://youtube.com/embed/${data.trailer.id}`}
            ></iframe>
          </div>
        </div>
      )}
      <div className="recommendations">
        <h3 className="font-semibold text-lg">Recommendation</h3>
        <hr className="w-[50%] mb-6" />
        <div className="flex flex-wrap gap-6">
          {data.recommendations.nodes
            .filter((media) => media.mediaRecommendation)
            .slice(0, 6)
            .map(({ mediaRecommendation }, i) => (
              <TinyAnimeData key={i} data={mediaRecommendation} />
            ))}
        </div>
      </div>
    </div>
  );
}
function Characters({ data }: { data: Characters[] }) {
  return (
    <div className="characters w-full">
      <div className="flex flex-wrap gap-4 mt-6">
        {data
          ? data.map((c, i) => <CharactersCard key={i} data={c} />)
          : [...new Array(8)].map((_, i) => <CharacStaffSkeleton key={i} />)}
      </div>
    </div>
  );
}
function Staff({ data }: { data: Staff[] }) {
  return (
    <div className="staff w-full">
      <div className="flex flex-wrap gap-4 mt-6">
        {data
          ? data.map((s, i) => <StaffCard key={i} data={s} />)
          : [...new Array(8).map((_, i) => <CharacStaffSkeleton key={i} />)]}
      </div>
    </div>
  );
}

export default function MainDetails({
  index,
  data,
}: {
  index: number;
  data: AnimeDetails;
}) {
  switch (index) {
    case 0:
      return <Overview data={data} />;
    case 1:
      return <Characters data={data.characters.nodes} />;
    case 2:
      return <Staff data={data.staff.nodes} />;
    default:
      break;
  }
  return <div>Main</div>;
}

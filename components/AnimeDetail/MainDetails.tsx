import React from "react";
import { SwiperSlide } from "swiper/react";
import { AnimeDetails } from "../../types/AnimeDetails";
import TinyAnimeData from "../AnimeInfo/TinyAnimeData";
import CharacStaffSkeleton from "../Skeleton/CharacStaffSkeleton";
import TinyAnimeSkeleton from "../Skeleton/TinyAnimeSkeleton";
import SwiperBox from "../Swiper/SwiperBox";
import CharactersCard from "./CharactersCard";
import StaffCard from "./StaffCard";

function Overview({ data }: { data: AnimeDetails }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relations">
        <h3 className="font-semibold text-lg">Relations</h3>
        <hr className="w-[50%]" />
        <div className="flex flex-wrap gap-6 mt-6">
          {data.relations?.nodes.slice(0, 20).map((anime, i) => (
            <TinyAnimeData key={i} data={anime} />
          ))}
        </div>
      </div>
      <div className="characters">
        <h3 className="font-semibold text-lg">Characters</h3>
        <hr className="w-[50%]" />
        <div className="flex flex-wrap gap-4 mt-6">
          {data.characters.nodes.slice(0, 6).map((c, i) => (
            <CharactersCard key={i} data={c} />
          ))}
        </div>
      </div>
      <div className="staff">
        <h3 className="font-semibold text-lg">Staff</h3>
        <hr className="w-[50%]" />
        <div className="flex flex-wrap gap-4 mt-6">
          {data.staff.nodes.slice(0, 6).map((s, i) => (
            <StaffCard key={i} data={s} />
          ))}
        </div>
      </div>
      {data.trailer && (
        <div className="trailer">
          <h3 className="font-semibold text-lg">Trailer</h3>
          <hr className="w-[50%]" />
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
            .slice(0, 10)
            .map(({ mediaRecommendation }, i) => (
              <TinyAnimeData key={i} data={mediaRecommendation} />
            ))}
        </div>
      </div>
    </div>
  );
}
function Characters() {
  return (
    <div>
      <h1>Coming Soon...</h1>
    </div>
  );
}
function Staff() {
  return (
    <div>
      <h1>Coming Soon...</h1>
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
      return <Characters />;
    case 2:
      return <Staff />;
    default:
      break;
  }
  return <div>Main</div>;
}

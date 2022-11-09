import React from "react";
import { SwiperSlide } from "swiper/react";
import CharacStaffSkeleton from "../CharacStaffSkeleton";
import TinyAnimeSkeleton from "../TinyAnimeSkeleton";

export default function MainDetailsSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <div className="relations">
        <h3 className="font-semibold text-lg">Relations</h3>
        <hr className="w-[50%]" />
        <div className="flex flex-wrap gap-6 mt-6">
          {[...new Array(5)].map((_, i) => (
            <TinyAnimeSkeleton key={i} />
          ))}
        </div>
      </div>
      <div className="characters">
        <h3 className="font-semibold text-lg">Characters</h3>
        <hr className="w-[50%]" />
        <div className="flex flex-wrap gap-4 mt-6">
          {[...new Array(5)].map((_, i) => (
            <CharacStaffSkeleton key={i} />
          ))}
        </div>
      </div>
      <div className="staff">
        <h3 className="font-semibold text-lg">Staff</h3>
        <hr className="w-[50%]" />
        <div className="flex flex-wrap gap-4 mt-6">
          {[...new Array(5)].map((_, i) => (
            <CharacStaffSkeleton key={i} />
          ))}
        </div>
      </div>
      <div className="recommendations">
        <h3 className="font-semibold text-lg">Recommendation</h3>
        <hr className="w-[50%] mb-6" />
        <div className="flex flex-wrap gap-6">
          {[...new Array(5)].map((_, i) => (
            <TinyAnimeSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

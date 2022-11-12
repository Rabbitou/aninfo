import React, { ReactNode } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function SwiperBox({
  children,
  setChangeMove,
}: {
  children: ReactNode;
  setChangeMove: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Swiper
      modules={[FreeMode, Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
        waitForTransition: true,
      }}
      speed={1000}
      slidesPerView="auto"
      freeMode={true}
      className="mySwiper"
      spaceBetween={20}
      onTransitionEnd={(s) => setChangeMove(s.activeIndex)}
    >
      {children}
    </Swiper>
  );
}

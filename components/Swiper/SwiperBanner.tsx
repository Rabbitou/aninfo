import React, { ReactNode } from "react";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function SwiperBanner({ children }: { children: ReactNode }) {
  return (
    <Swiper
      modules={[FreeMode, Pagination, Autoplay]}
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      freeMode={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false,
      }}
      speed={1500}
      slidesPerView="auto"
      spaceBetween={20}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}

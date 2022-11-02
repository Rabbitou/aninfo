import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import TinyAnimeData from "../AnimeInfo/TinyAnimeData";

export default function SwiperBox() {
  const swiperContainer = useRef<HTMLDivElement>(null);
  const [startScroll, setStartScroll] = useState(0);
  const [previousmovement, setPreviousmovement] = useState(0);
  // const [Scroll, setScroll] =
  //   useState<React.RefObject<HTMLDivElement>>(swiperContainer);
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (swiperContainer && swiperContainer.current) {
        setStartScroll(e.clientX);
        // setPreviousmovement(0);
        // console.log(e.clientX);
        // swiperContainer.current.scrollLeft += e.clientX;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (swiperContainer && swiperContainer.current && startScroll !== 0) {
        // setStartScroll(e.clientX);
        setPreviousmovement(e.movementX);
        swiperContainer.current.scrollLeft -= e.movementX;
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (swiperContainer && swiperContainer.current) {
        setStartScroll(0);
        // console.log(previousmovement);
        // swiperContainer.current.scrollLeft -= previousmovement * 10;
        // setPreviousmovement(0);
      }
    };

    if (swiperContainer && swiperContainer.current) {
      swiperContainer.current.addEventListener("mousedown", handleMouseDown);
      swiperContainer.current.addEventListener("mousemove", handleMouseMove);
      swiperContainer.current.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (swiperContainer && swiperContainer.current) {
        swiperContainer.current.removeEventListener(
          "mousedown",
          handleMouseDown
        );
        swiperContainer.current.removeEventListener(
          "mousemove",
          handleMouseMove
        );
        swiperContainer.current.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [swiperContainer, startScroll]);

  return (
    <>
      <Swiper
        slidesPerView="auto"
        // spaceBetween={30}
        // initialSlide={6}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        spaceBetween={20}
      >
        {[...new Array(20)].map((_, i) => (
          <SwiperSlide key={i} className="!w-[200px]">
            {" "}
            <TinyAnimeData />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div
        className="flex overflow-x-auto scrollbar-hide gap-4"
        ref={swiperContainer}
      >
        {[...new Array(20)].map((_, i) => (
          <TinyAnimeData key={i} />
        ))}
      </div> */}
    </>
  );
}

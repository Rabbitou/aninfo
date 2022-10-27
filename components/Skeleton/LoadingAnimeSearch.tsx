import { Skeleton } from "@mui/material";
import React from "react";

export default function LoadingAnimeSearch() {
  return (
    <div className="rounded-sm overflow-hidden bg-[#E5E5E5] dark:bg-[#5D5D5D] flex flex-col basis-[250px] flex-shrink-0 flex-grow-0 md:basis-[400px] h-[700px] md:h-[430px]">
      <div className="flex flex-col md:flex-row">
        <div className="animeimg md:basis-[200px] h-[250px] md:h-[350px] flex-grow-0 flex-shrink-0">
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
        </div>
        <div className="synopsis flex text-white  flex-col items-center  dark:bg-transparent h-[250px] md:h-full">
          <div className="titleepisodes flex flex-col items-center space-x-2 w-[100%] h-[80px] md:h-[100px] mt-2">
            <div className="episodesinfo flex flex-col m-1 md:m-8 items-center w-[140px] h-[40px]">
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"100%"}
                sx={{ bgcolor: "#757575" }}
              />
              <div className="timeepisode text-xs w-[140px] h-[40px] flex justify-center items-center mt-3">
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={"100%"}
                  sx={{ bgcolor: "#757575" }}
                />
              </div>
            </div>
          </div>
          <div className="detailsstudio max-h-44 w-[153px] h-[120px] md:h-[150px] text-center text-xs flex flex-col">
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={"100%"}
              sx={{ bgcolor: "#757575" }}
            />
          </div>
        </div>
      </div>
      <div className="secondary flex flex-col flex-1">
        <div className="ratingstatus bg-[#444444] dark:bg-[#2B2B2B] flex md:flex-row flex-col items-center justify-center md:space-x-4 md:h-[36px]">
          <div className="rating h-6 w-20 my-1">
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={"100%"}
              sx={{ bgcolor: "#757575" }}
            />
          </div>
          <div className="status h-6 w-40 my-1">
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={"100%"}
              sx={{ bgcolor: "#757575" }}
            />
          </div>
        </div>
        <div className="genre bg-[#AFAFAF] dark:bg-[#444444] flex-1 flex  items-center justify-center h-[36px] space-x-4">
          <div className="genre1 h-6 w-12">
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={"100%"}
              sx={{ bgcolor: "#2B2B2B" }}
            />
          </div>
          <div className="genre2 h-6 w-12">
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={"100%"}
              sx={{ bgcolor: "#2B2B2B" }}
            />
          </div>
          <div className="genre3 h-6 w-12">
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={"100%"}
              sx={{ bgcolor: "#2B2B2B" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

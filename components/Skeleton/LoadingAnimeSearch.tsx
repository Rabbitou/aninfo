import { Skeleton } from "@mui/material";
import React from "react";

export default function LoadingAnimeSearch() {
  return (
    <div className="rounded-sm overflow-hidden bg-[#E5E5E5] dark:bg-[#5D5D5D] flex flex-col basis-[250px] flex-shrink-0 flex-grow-0 md:basis-[400px] h-[430px]">
      <div className="flex flex-col md:flex-row">
        <div className="animeimg  basis-[200px] h-[350px] flex-grow-0 flex-shrink-0">
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
        </div>
        <div className="synopsis flex text-white  flex-col items-center justify-center dark:bg-transparent h-[250px] md:h-full">
          <div className="titleepisodes flex flex-col items-center space-x-2 w-[100%] h-[100px] mt-2">
            <div className="episodesinfo flex flex-col m-8 items-center w-[140px] h-[40px]">
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
          <div className="detailsstudio -2 max-h-44 w-[153px] h-[300px] overflow-y-auto text-center text-xs flex flex-col">
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
        <div className="ratingstatus flex md:flex-row flex-col items-center justify-center space-x-4 h-[36px]">
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"100%"}
            sx={{ bgcolor: "#2B2B2B" }}
          />
        </div>
        <div className="genre bg-[#AFAFAF] dark:bg-[#444444] flex-1 flex  items-center justify-center h-[36px]">
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"100%"}
            sx={{ bgcolor: "#444444" }}
          />
        </div>
      </div>
    </div>
  );
}

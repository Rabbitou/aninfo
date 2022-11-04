import { Skeleton } from "@mui/material";
import React from "react";

export default function TinyAnimeSkeleton() {
  return (
    <div className="flex group relative">
      <div className="containeranime">
        <div className="animeimg w-[170px] h-[260px] flex-grow-0 flex-shrink-0">
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"95%"}
            sx={{ bgcolor: "#505050" }}
          />
        </div>
        <div className="title text-center h-6 flex justify-center">
          {" "}
          <Skeleton
            variant="rectangular"
            width={"80%"}
            height={"95%"}
            sx={{ bgcolor: "#505050" }}
          />
        </div>
      </div>
    </div>
  );
}

import { Skeleton } from "@mui/material";
import React from "react";

export default function AnimeBannerSkeleton() {
  return (
    <div className="w-full md:w-[1200px] h-[400px] relative">
      <div className="w-full md:w-[1200px] h-[360px] absolute top-0 right-0 ">
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          sx={{ bgcolor: "#707070" }}
        />
      </div>
      <div className="flex flex-col pt-16 px-10 w-full md:w-[50%] relative">
        <div className="w-[400px] h-[50px] mb-10">
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
        </div>
        <div className="w-[500px] h-[100px] mb-8">
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
        </div>
        <div className="h-10 w-32">
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
        </div>
      </div>
    </div>
  );
}

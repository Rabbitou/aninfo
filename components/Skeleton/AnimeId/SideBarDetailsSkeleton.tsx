import React, { ReactNode } from "react";
import moment from "moment";
import { Skeleton } from "@mui/material";

function ExternalLinksSkeleton() {
  return (
    <div className="flex no-underline rounded-sm bg-slate-300 dark:bg-gray-700 text-sm gap-3 md:mb-1 items-center transition-all p-[2px] w-[48%] md:w-52">
      <div className="flex p-1 w-6 h-6 justify-center items-center m-1 rounded-[3px]">
        {" "}
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          sx={{ bgcolor: "#505050" }}
        />
      </div>
      <div className="h-5 w-24">
        {" "}
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          sx={{ bgcolor: "#505050" }}
        />
      </div>
    </div>
  );
}

function InfoSkeleton() {
  return (
    <div>
      <div className="h-5 w-9 m-[10px]">
        {" "}
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          sx={{ bgcolor: "#505050" }}
        />
      </div>
      <div className="h-5 w-36">
        {" "}
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          sx={{ bgcolor: "#505050" }}
        />
      </div>
    </div>
  );
}

export default function SideBarDetailsSkeleton() {
  return (
    <div className="">
      <div className="w-auto md:w-52 p-6 bg-slate-300 dark:bg-gray-700 rounded-sm flex flex-wrap md:flex-col gap-6 md:gap-0">
        {[...new Array(10)].map((_, i) => (
          <InfoSkeleton key={i} />
        ))}
      </div>
      <h2 className="capitalize my-2">External Links</h2>
      <div className="flex flex-wrap md:flex-col flex-grow-0 gap-3">
        {[...new Array(6)].map((_, i) => (
          <ExternalLinksSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

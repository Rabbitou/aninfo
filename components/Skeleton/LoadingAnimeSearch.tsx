import { Skeleton } from "@mui/material";
import React from "react";

export default function LoadingAnimeSearch() {
  return (
    <div className="rounded-sm overflow-hidden bg-[#E5E5E5] dark:bg-[#5D5D5D] flex flex-col basis-[250px] flex-shrink-0 flex-grow-0 md:basis-[400px] h-[430px]">
      <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
    </div>
  );
}

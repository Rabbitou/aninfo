import { Skeleton } from "@mui/material";
import React from "react";

export default function CharacStaffSkeleton() {
  return (
    <div className="flex h-40 w-full lg:w-[47%] bg-gray-700">
      <div className="h-40 w-[106px]">
        <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
      </div>
      <div className="p-1 pl-3">
        <h3 className="mt-1 font-semibold text-md w-[136px] h-[18px] mb-2">
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
        </h3>
        <p className="text-sm opacity-50 w-[136px] h-[18px]">
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
        </p>
      </div>
    </div>
  );
}

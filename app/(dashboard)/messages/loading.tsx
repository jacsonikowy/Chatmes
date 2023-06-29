import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex w-full overflow-x-hidden">
      <div className="min-w-[341px]">
        <div className="flex justify-between items-center">
          <Skeleton className="h-14 w-60 ml-[28px] my-[28px]" />
        </div>
        <div className="flex flex-col gap-4 min-h-[calc(100vh-100px)]">
          <div className="ml-[28px] flex gap-6 items-center">
            <Skeleton className="rounded-full w-[65px] h-[65px]" />
            <Skeleton className="w-40 h-12" />
          </div>
          <div className="ml-[28px] flex gap-6 items-center">
            <Skeleton className="rounded-full w-[65px] h-[65px]" />
            <Skeleton className="w-40 h-12" />
          </div>
          <div className="ml-[28px] flex gap-6 items-center">
            <Skeleton className="rounded-full w-[65px] h-[65px]" />
            <Skeleton className="w-40 h-12" />
          </div>
          <div className="ml-[28px] flex gap-6 items-center">
            <Skeleton className="rounded-full w-[65px] h-[65px]" />
            <Skeleton className="w-40 h-12" />
          </div>
          <div className="ml-[28px] flex gap-6 items-center">
            <Skeleton className="rounded-full w-[65px] h-[65px]" />
            <Skeleton className="w-40 h-12" />
          </div>
          <div className="ml-[28px] flex gap-6 items-center">
            <Skeleton className="rounded-full w-[65px] h-[65px]" />
            <Skeleton className="w-40 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;

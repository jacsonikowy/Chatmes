import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="w-full relative flex flex-col justify-between max-h-screen overflow-y-hidden">
      <div className="flex gap-[25px] items-center w-full px-[50px] sm:px-[25px]">
        <Skeleton className="rounded-full w-[75px] h-[75px]" />
        <Skeleton className="w-40 h-8" />
      </div>
      <div className="ml-[25px] mb-[37px] mr-5 sm:mr-[52px] max-h-screen max-w-screen">
        <div className="flex flex-col gap-[16px] p-0 py-3 sm:p-6 h-[calc(100vh-240px)] justify-center max-w-full overflow-y-scroll">
          <div className="flex flex-row-reverse gap-[8px] items-center">
            <Skeleton className="w-[65px] h-[65px] rounded-full" />
            <Skeleton className="w-40 h-12" />
          </div>
          <div className="flex gap-[8px] items-center">
            <Skeleton className="w-[65px] h-[65px] rounded-full" />
            <Skeleton className="w-40 h-12" />
          </div>
          <div className="flex flex-row-reverse gap-[8px] items-center">
            <Skeleton className="w-[65px] h-[65px] rounded-full" />
            <Skeleton className="w-40 h-12" />
          </div>{" "}
          <div className="flex gap-[8px] items-center">
            <Skeleton className="w-[65px] h-[65px] rounded-full" />
            <Skeleton className="w-40 h-12" />
          </div>
          <div className="flex gap-[8px] items-center">
            <Skeleton className="w-[65px] h-[65px] rounded-full" />
            <Skeleton className="w-40 h-12" />
          </div>
          <div className="flex flex-row-reverse gap-[8px] items-center">
            <Skeleton className="w-[65px] h-[65px] rounded-full" />
            <Skeleton className="w-40 h-12" />
          </div>
          <div className="flex flex-row-reverse gap-[8px] items-center">
            <Skeleton className="w-[65px] h-[65px] rounded-full" />
            <Skeleton className="w-40 h-12" />
          </div>
          <div className="flex gap-[8px] items-center">
            <Skeleton className="w-[65px] h-[65px] rounded-full" />
            <Skeleton className="w-40 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <section className="w-full">
      <div className="w-full py-[26px]">
        <Skeleton className="h-12 w-80 py-[13px] m-auto" />
      </div>
      <div className="ml-[64px] mt-[72px]">
        <Skeleton className="h-12 w-60" />
        <div className="mt-[20px] flex gap-[14px] max-h-[57px]">
          <Skeleton className="h-20 w-96" />
        </div>
      </div>
      <div className="ml-[64px] mt-[72px]">
        <Skeleton className="h-12 w-60" />
        <div className="mt-[20px] flex gap-[14px] max-h-[57px]">
          <Skeleton className="h-20 w-96" />
        </div>
      </div>
    </section>
  );
};

export default loading;

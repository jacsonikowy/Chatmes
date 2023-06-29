import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <section className="flex w-full justify-center text-center">
      <Skeleton className="w-60 h-24 pt-12" />
    </section>
  );
};

export default loading;

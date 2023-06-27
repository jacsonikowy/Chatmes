import React from "react";
import Image from "next/image";

const CurrentUser = ({ name, avatar }: { name: string; avatar: string }) => {
  return (
    <div className="flex gap-6 p-6 items-center bg-slate-100 dark:bg-slate-800">
      <Image
        className="rounded-full"
        src={avatar}
        alt="User Avatar"
        width={50}
        height={50}
      />
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
};

export default CurrentUser;

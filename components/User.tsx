import React from "react";
import Image from "next/image";
import { Icons } from "./Icons";

const User = ({
  username,
  message,
  avatar,
  active,
}: {
  username: string;
  message: string;
  avatar: string;
  active: boolean;
}) => {
  return (
    <div className="flex items-center max-w-[200px] min-h-[50px] gap-[12px]">
      <div className="relative">
        <Image src={avatar} alt="Avatar" height={65} width={65} />
        {active && (
          <div className="absolute left-12 top-12">
            <Icons.active />
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-[16px]">{username}</p>
        <p className="font-medium text-[12px] text-secondary">{message}</p>
      </div>
    </div>
  );
};

export default User;

"use client";
import React, { FC } from "react";
import { UserPlus } from "lucide-react";
import { Icons } from "./Icons";
import { userId } from "@/types/next-auth";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { useSession } from "next-auth/react";

interface IFriendRequest {
  mail: string;
  idToAdd: userId;
  handleAccept: (id: string) => void;
  handleDeny: (id: string) => void;
}

const FriendRequest: FC<IFriendRequest> = ({
  mail,
  idToAdd,
  handleAccept,
  handleDeny,
}) => {
  return (
    <div className="flex gap-[18px] items-center">
      <UserPlus />
      {mail}
      <button onClick={() => handleAccept(idToAdd)}>
        <Icons.check />
      </button>
      <button onClick={() => handleDeny(idToAdd)}>
        <Icons.deny />
      </button>
    </div>
  );
};

export default FriendRequest;

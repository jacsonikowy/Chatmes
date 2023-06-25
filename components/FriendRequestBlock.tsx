"use client";
import React, { FC, useEffect } from "react";
import { UserPlus } from "lucide-react";
import { Icons } from "./Icons";
import { userId } from "@/types/next-auth";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { pusherClient } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";
import { useSession } from "next-auth/react";

interface IFriendRequest {
  mail: string;
  idToAdd: userId;
}

const FriendRequest: FC<IFriendRequest> = ({ mail, idToAdd }) => {
  const { toast } = useToast();
  const { data: session } = useSession();

  const handleAccept = async (idToAdd: userId) => {
    try {
      await axios.post("/api/friends/accept", {
        idToAdd: idToAdd,
      });
      toast({
        title: "Accepted Friend request",
        description: "Successfully accepted friend request",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeny = async (idToDeny: userId) => {
    try {
      await axios.post("/api/friends/deny", {
        idToDeny: idToDeny,
      });
      toast({
        title: "Denied friend request",
        description: "You just denied friend request. How dare you!",
      });
    } catch (error) {
      console.log(error);
    }
  };

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

"use client";
import React, { useEffect, useState } from "react";
import AddFriend from "./AddFriend";
import { pusherClient } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { userId } from "@/types/next-auth";
import FriendRequest from "./FriendRequestBlock";
import { Session } from "next-auth";
import { useToast } from "./ui/use-toast";
import axios from "axios";

interface IncomingFriendRequests {
  senderId: userId;
  senderEmail: string;
}

const FriendRequests = ({
  friends,
  session,
}: {
  friends: IncomingFriendRequests[];
  session: Session;
}) => {
  const { toast } = useToast();

  const [friendsRequests, setFriendRequests] =
    useState<IncomingFriendRequests[]>(friends);

  useEffect(() => {
    console.log("subscribe");
    pusherClient.subscribe(
      toPusherKey(`user:${session?.user.id}:incoming_friends_requests`)
    );

    const handleBind = ({ senderId, senderEmail }: IncomingFriendRequests) => {
      setFriendRequests((prev) => [...prev, { senderId, senderEmail }]);
      toast({
        title: "Friend request",
        description: `You got friend request from ${senderEmail}`,
      });
    };

    pusherClient.bind("incoming_friends_requests", handleBind);

    return () => {
      console.log("unsubscribe");
      pusherClient.unsubscribe(
        toPusherKey(`user:${session?.user.id}:incoming_friends_requests`)
      );
      pusherClient.unbind("incoming_friends_requests", handleBind);
    };
  }, [session?.user.id, toast]);

  const handleAccept = async (idToAdd: userId) => {
    try {
      await axios.post("/api/friends/accept", {
        idToAdd: idToAdd,
      });
      toast({
        title: "Accepted Friend request",
        description: "Successfully accepted friend request",
      });
      setFriendRequests((prev) =>
        prev.filter((friend) => friend.senderId !== idToAdd)
      );
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
      setFriendRequests((prev) =>
        prev.filter((friend) => friend.senderId !== idToDeny)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-[64px] mt-[72px]">
      <h3 className="font-medium text-[32px]">Search by e-mail</h3>
      <div className="mt-[20px] flex gap-[14px] max-h-[57px]">
        <AddFriend />
      </div>
      <div className="mt-[72px]">
        <h3 className="text-[32px] font-medium">Friend Requests</h3>
        <div className="mt-[18px] flex flex-col gap-[18px]">
          {friendsRequests.map((request) => {
            return (
              <FriendRequest
                key={request.senderId}
                idToAdd={request.senderId}
                mail={request.senderEmail}
                handleAccept={handleAccept}
                handleDeny={handleDeny}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;

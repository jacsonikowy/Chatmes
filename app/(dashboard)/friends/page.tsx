import FriendRequest from "@/components/FriendRequestBlock";
import Sidebar from "@/components/Sidebar";
import React, { useEffect } from "react";
import AddFriend from "@/components/AddFriend";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { userId } from "@/types/next-auth";
import { pusherClient } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";
import FriendRequests from "@/components/FriendRequests";

const page = async () => {
  const session = await getServerSession(authOptions);

  const friendRequests = (await db.smembers(
    `user:${session?.user.id}:incoming_friends_requests`
  )) as string[];

  const friends = await Promise.all(
    friendRequests.map(async (id: userId) => {
      const user = (await db.get(`user:${id}`)) as User;
      const senderId = id;
      const senderEmail = user.email;
      return { senderId, senderEmail };
    })
  );

  return (
    <section className="w-full">
      <div className="w-full">
        <h1 className="text-primary text-[48px] font-semibold text-center py-[13px]">
          Friends
        </h1>
        <hr />
        <FriendRequests friends={friends} session={session!} />
      </div>
    </section>
  );
};

export default page;

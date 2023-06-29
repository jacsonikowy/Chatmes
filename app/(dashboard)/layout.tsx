import React from "react";
import { getFriendRequests } from "@/helpers/get-friend_requests";
import { getServerSession } from "next-auth";
import Sidebar from "@/components/Sidebar";
import { notFound } from "next/navigation";
import { authOptions } from "@/lib/authOptions";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session) {
    notFound();
  }

  const friendRequests = await getFriendRequests(session.user.id);

  return (
    <div className="flex">
      <Sidebar friendRequestsDb={friendRequests} />
      {children}
    </div>
  );
};

export default layout;

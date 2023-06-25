import React from "react";
import { getFriendRequests } from "@/helpers/get-friend_requests";
import { getServerSession } from "next-auth";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
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

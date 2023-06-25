import React from "react";
import Sidebar from "@/components/Sidebar";
import Messages from "@/components/Messages";
import { getServerSession } from "next-auth";
import { getFriendsByUserId } from "@/helpers/get-friends-by-user-id";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getFriendRequests } from "@/helpers/get-friend_requests";

const page = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const friends = await getFriendsByUserId(session.user.id);

  return (
    <div className="flex w-full">
      <Messages friends={friends} />
      {children}
    </div>
  );
};

export default page;

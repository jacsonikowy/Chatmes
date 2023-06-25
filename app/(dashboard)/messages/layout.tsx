import React from "react";
import Messages from "@/components/Messages";
import { getServerSession } from "next-auth";
import { getFriendsByUserId } from "@/helpers/get-friends-by-user-id";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

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

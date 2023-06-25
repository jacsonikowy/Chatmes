"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavElement from "./NavElement";
import { MessageSquare } from "lucide-react";
import { LogOut } from "lucide-react";
import { Users } from "lucide-react";
import { Settings } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { pusherClient } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";
import { userId } from "@/types/next-auth";

const Sidebar = ({ friendRequestsDb }: { friendRequestsDb: number }) => {
  const { data: session } = useSession();
  const [friendRequests, setFriendRequests] = useState(friendRequestsDb);

  useEffect(() => {
    pusherClient.subscribe(
      toPusherKey(`user:${session?.user.id}:incoming_friends_requests`)
    );

    const handleBind = () => {
      setFriendRequests(friendRequests + 1);
    };

    pusherClient.bind("incoming_friends_requests", handleBind);
    return () => {
      pusherClient.unsubscribe(
        toPusherKey(`user:${session?.user.id}:incoming_friends_requests`)
      );
      pusherClient.unbind("incoming_friends_requests", handleBind);
    };
  }, [friendRequests, session?.user.id]);

  const currentRoute = usePathname();
  return (
    <div className="relative h-screen border-r max-w-[247px]">
      <div className="px-[28px] py-[28px]">
        <Logo />
      </div>
      <hr />
      <div className="flex flex-col pt-[37px] gap-[23px] pl-[28px] pr-[80px]">
        <Link
          href="/messages"
          className={currentRoute === "/messages" ? "active" : ""}
        >
          <NavElement text="Messages" logo={<MessageSquare />} />
        </Link>
        <Link
          href="/friends"
          className={`${currentRoute === "/friends" ? "active" : ""} relative`}
        >
          <NavElement text="Friends" logo={<Users />} />
          {friendRequests > 0 && (
            <div className="absolute left-4 -bottom-2 bg-primary text-white w-4 h-4 text-center text-[12px] font-semibold rounded-full">
              {friendRequests}
            </div>
          )}
        </Link>
        <Link
          href="/settings"
          className={`${currentRoute === "/settings" ? "active" : ""} relative`}
        >
          <NavElement text="Settings" logo={<Settings />} />
        </Link>
        <div className="absolute left-[28px] bottom-10 text-danger">
          <NavElement
            text="Logout"
            logo={<LogOut />}
            onClick={() => signOut()}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

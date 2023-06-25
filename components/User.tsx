"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { Icons } from "./Icons";
import { useFriendStore } from "@/store";
import { userId } from "@/types/next-auth";
import { useRouter } from "next/navigation";
import { chatHref } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { db } from "../lib/db";
import axios from "axios";
import { getLatestMessage } from "@/helpers/get-latest-message";

const User = ({
  username,
  message,
  avatar,
  active,
  id,
  email,
}: {
  username: string;
  message: string;
  avatar: string;
  active: boolean;
  id: userId;
  email: string;
}) => {
  const friend = useFriendStore((state) => state);
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    return;
  }

  return (
    <div
      className="flex items-center w-full min-h-[50px] gap-[12px] py-[20px] pl-[28px] hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
      onClick={() => {
        friend.setFriend({
          name: username,
          email: email,
          id: id,
          image: avatar,
        });
        router.replace(`/messages/chat/${chatHref(session?.user.id, id)}`);
      }}
    >
      <div className="relative">
        <Image
          className="rounded-full"
          src={avatar}
          alt="Avatar"
          height={50}
          width={50}
        />
        {active && (
          <div className="absolute left-9 top-9">
            <Icons.active />
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-[16px]">{username}</p>
        <p className="font-medium text-[12px] text-secondary">{message}</p>
      </div>
    </div>
  );
};

export default User;

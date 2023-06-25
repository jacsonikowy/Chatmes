"use client";
import React, { useState } from "react";
import User from "./User";
import { ChevronsLeft } from "lucide-react";
import { ChevronsRight } from "lucide-react";
import { userId } from "@/types/next-auth";

interface IFriends {
  name: string;
  email: string;
  image: string;
  emailVerified: null | boolean;
  id: userId;
}

const Messages = ({ friends }: { friends: IFriends[] }) => {
  const [isHidden, setIsHidden] = useState(false);

  if (isHidden) {
    return (
      <div
        className="cursor-pointer pt-[62px]"
        onClick={() => {
          setIsHidden(false);
        }}
      >
        <ChevronsRight size={36} />
        <hr />
      </div>
    );
  }

  return (
    <div className={`border-r ${isHidden ? "w-0" : "min-w-[341px]"}`}>
      <div
        className={`flex justify-between items-center ${
          isHidden ? "hidden" : "flex"
        }`}
      >
        <h2 className="text-primary text-[28px] font-semibold pl-[28px] py-[28px]">
          Messages
        </h2>
        <div
          className="cursor-pointer pr-[18px]"
          onClick={() => {
            setIsHidden(true);
          }}
        >
          <ChevronsLeft size={36} />
        </div>
      </div>
      <hr />
      <div
        className={`flex flex-col gap-[36px] ${isHidden ? "hidden" : "flex"}`}
      >
        {friends.map((friend) => {
          return (
            <User
              key={friend.id}
              avatar={friend.image}
              username={friend.name}
              active
              message="asd"
              id={friend.id}
              email={friend.email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Messages;

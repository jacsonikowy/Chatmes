"use client";
import Image from "next/image";
import React, { FC } from "react";
import { formatTime } from "@/helpers/formatTime";

interface ITextMessage {
  avatar: string;
  text: string;
  isCurrentUser: boolean;
  timestamp: number;
}

const TextMessage: FC<ITextMessage> = ({
  avatar,
  text,
  isCurrentUser,
  timestamp,
}) => {
  return (
    <div
      className={`${
        isCurrentUser ? "flex-row-reverse" : "flex"
      } flex items-center gap-[8px] `}
    >
      <div
        className={`${
          isCurrentUser ? "primaryText" : "secondaryText"
        } max-w-[35ch] sm:max-w-[55ch]`}
      >
        <p className="overflow-hidden break-words">{text}</p>
        <p
          className={`text-[12px]
          ${isCurrentUser ? "text-white" : "text-slate-400"}`}
        >
          {formatTime(timestamp)}
        </p>
      </div>
      <Image
        className="rounded-full"
        src={avatar}
        alt="avatar"
        width={65}
        height={65}
      />
    </div>
  );
};

export default TextMessage;

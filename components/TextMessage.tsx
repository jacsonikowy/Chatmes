"use client";
import Image from "next/image";
import format from "date-fns/format";
import React, { FC } from "react";

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
        } max-w-[55ch]`}
      >
        <p className="overflow-hidden break-words">{text}</p>
        <p
          className={`text-[12px]
          ${isCurrentUser ? "text-white" : "text-slate-400"}`}
        >
          {format(timestamp, "HH:mm")}
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

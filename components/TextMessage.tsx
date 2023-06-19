import Image from "next/image";
import React, { FC } from "react";

interface ITextMessage {
  avatar: string;
  text: string;
  isCurrentUser: boolean;
}

const TextMessage: FC<ITextMessage> = ({ avatar, text, isCurrentUser }) => {
  return (
    <div className="flex items-center gap-[8px]">
      <div className={isCurrentUser ? "primaryText" : "secondaryText"}>
        {text}
      </div>
      <Image src={avatar} alt="avatar" width={65} height={65} />
    </div>
  );
};

export default TextMessage;

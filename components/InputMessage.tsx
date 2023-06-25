"use client";
import React, { useState } from "react";
import { Icons } from "./Icons";
import { usePathname, useSearchParams } from "next/navigation";
import axios from "axios";

const InputMessage = ({ chatId }: { chatId: string }) => {
  const [message, setMessage] = useState("");

  // const URL = usePathname().split("/");
  // const chatId = URL[URL.length - 1];
  // console.log(chatId);

  const handleSend = async (text: string) => {
    await axios.post("/api/message/send", { chatId, text });
  };

  return (
    <div className="flex gap-[20px] mt-[27px]">
      <input
        className="w-full border-[#b3b3b3] border-2 rounded-lg text-black"
        type="text"
        placeholder="Type here your message..."
        onChange={(e) => {
          setMessage(e.currentTarget.value);
        }}
        value={message}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend(message);
            setMessage("");
          }
        }}
      />
      <div
        className="cursor-pointer rounded-full"
        onClick={() => {
          handleSend(message);
          setMessage("");
        }}
      >
        <Icons.send />
      </div>
    </div>
  );
};

export default InputMessage;

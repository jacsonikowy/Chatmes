"use client";
import React, { useState } from "react";
import { Icons } from "./Icons";
import axios, { AxiosError } from "axios";
import { useToast } from "./ui/use-toast";
import TextareaAutosize from "react-textarea-autosize";

const InputMessage = ({ chatId }: { chatId: string }) => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSend = async (text: string) => {
    try {
      await axios.post("/api/message/send", { chatId, text });
    } catch (error) {
      if (error instanceof AxiosError) {
        // yeah i know that's terrible error handling
        console.log(error.response?.data[0].message);
        toast({
          title: error.response?.data[0].message,
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Something went wrong",
      });
    }
  };

  return (
    <div className="flex gap-[20px] mt-[12px]">
      <TextareaAutosize
        minRows={3}
        maxRows={3}
        className="w-full border-[#b3b3b3] border-2 rounded-lg text-black"
        placeholder="Type here your message..."
        onChange={(e) => {
          setMessage(e.currentTarget.value);
        }}
        value={message}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend(message);
            setMessage("");
            e.currentTarget.blur();
          }
        }}
      />
      <div
        className="cursor-pointer rounded-full"
        onClick={(e) => {
          handleSend(message);
          setMessage("");
          e.currentTarget.blur();
        }}
      >
        <Icons.send />
      </div>
    </div>
  );
};

export default InputMessage;

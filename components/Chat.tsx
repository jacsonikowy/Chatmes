"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import InputMessage from "./InputMessage";
import { useFriendStore } from "@/store";
import TextMessage from "./TextMessage";
import { useSession } from "next-auth/react";
import { pusherClient, pusherServer } from "@/lib/pusher";
import { useToast } from "./ui/use-toast";
import { toPusherKey } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Chat = ({ chatId, data }: { chatId: string; data: Message[] }) => {
  const friend = useFriendStore((state) => state);
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>(data);
  const url = usePathname();
  console.log(url);
  const { toast } = useToast();

  useEffect(() => {
    pusherClient.subscribe(toPusherKey(`chat:${chatId}:messages`));
    const bindHandler = ({ message }: { message: Message }) => {
      setMessages((prev) => [...prev, message]);
    };
    pusherClient.bind(`messages`, bindHandler);

    return () => {
      pusherClient.unsubscribe(toPusherKey(`chat:${chatId}:messages`));
      pusherClient.unbind(`messages`, bindHandler);
    };
  }, [messages, chatId]);

  if (friend.id === null) {
    return (
      <div className="grid place-content-center w-full text-[32px] text-danger font-medium">
        Oh man! Click someone to chat with!
      </div>
    );
  }

  return (
    <div className="w-full relative flex flex-col justify-between max-h-screen overflow-y-hidden">
      <div className="flex gap-[25px] items-center w-full border-b px-[25px] py-[11.5px]">
        <Image
          className="rounded-full"
          src={friend.image}
          alt="Man"
          width={75}
          height={75}
        />
        <h1 className="text-[24px] font-semibold">{friend.name}</h1>
      </div>
      <div className="ml-[25px] mb-[37px] mr-[52px] max-h-screen">
        <div className="flex flex-col gap-[16px] p-6 h-[calc(100vh-210px)] overflow-y-scroll">
          {messages.map((message: Message) => {
            return (
              <TextMessage
                key={message.id}
                text={message.text}
                isCurrentUser={
                  message.senderId === session?.user.id ? true : false
                }
                avatar={
                  message.senderId === session?.user.id
                    ? (session.user.image as string)
                    : (friend.image as string)
                }
                timestamp={message.timestamp}
              ></TextMessage>
            );
          })}
        </div>
        <InputMessage chatId={chatId} />
      </div>
    </div>
  );
};

export default Chat;

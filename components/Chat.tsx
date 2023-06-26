"use client";
import React, { useEffect, useRef, useState, FC } from "react";
import Image from "next/image";
import InputMessage from "./InputMessage";
import { useFriendStore } from "@/store";
import TextMessage from "./TextMessage";
import { useSession } from "next-auth/react";
import { pusherClient } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface IChat {
  chatId: string;
  data: Message[];
}

const Chat: FC<IChat> = ({ chatId, data }) => {
  const friend = useFriendStore((state) => state);
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>(data);
  const scrollDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollDownRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [friend]);

  useEffect(() => {
    scrollDownRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    pusherClient.subscribe(toPusherKey(`chat:${chatId}:messages`));
    const bindHandler = ({ message }: { message: Message }) => {
      console.log(message);
      setMessages((prev) => [...prev, message]);
    };
    pusherClient.bind(`messages`, bindHandler);

    return () => {
      pusherClient.unsubscribe(toPusherKey(`chat:${chatId}:messages`));
      pusherClient.unbind(`messages`, bindHandler);
    };
  }, [chatId]);

  const router = useRouter();

  if (friend.id === null) {
    router.replace("/messages");
  }

  return (
    <div className="w-full relative flex flex-col justify-between max-h-screen overflow-y-hidden">
      <div className="flex gap-[25px] items-center w-full border-b px-[25px] pt-[10px] pb-[13px]">
        <Image
          className="rounded-full"
          src={friend.image}
          alt="Man"
          width={75}
          height={75}
        />
        <h1 className="text-[24px] font-semibold">{friend.name}</h1>
      </div>
      <div className="ml-[25px] mb-[37px] mr-[52px] max-h-screen max-w-full">
        <div className="flex flex-col gap-[16px] p-6 h-[calc(100vh-240px)] max-w-full overflow-y-scroll">
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
          <div ref={scrollDownRef}></div>
        </div>
        <InputMessage chatId={chatId} />
      </div>
    </div>
  );
};

export default Chat;

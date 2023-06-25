import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Chat from "@/components/Chat";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import React from "react";

interface PageProps {
  params: {
    chatId: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { chatId } = params;
  const data = (await db.zrange(`chat:${chatId}:messages`, 0, -1)) as Message[];

  return (
    <div className="w-full">
      <Chat chatId={chatId} data={data} />
    </div>
  );
};

export default page;

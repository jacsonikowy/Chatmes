import { db } from "@/lib/db";
import axios from "axios";
import { FileBadge } from "lucide-react";

export const getLatestMessage: (chatId: string) => Promise<any> = async (
  chatId: string
) => {
  const response = db.zrange(
    `chat:${chatId}:messages`,
    -1,
    -1
  ) as unknown as Message;

  return response;
};

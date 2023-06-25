import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { pusherServer } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { text, chatId } = body;

    const timestamp = Date.now();

    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const message: Message = {
      id: crypto.randomUUID(),
      senderId: session?.user.id,
      timestamp: Date.now(),
      text: text,
    };

    db.zadd(`chat:${chatId}:messages`, {
      score: timestamp,
      member: JSON.stringify(message),
    });

    pusherServer.trigger(toPusherKey(`chat:${chatId}:messages`), "messages", {
      message,
    });

    return new Response("OK");
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Internal Server Error", { status: 500 });
  }
};

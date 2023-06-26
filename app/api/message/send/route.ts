import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { pusherServer } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";
import { messageValidator } from "@/lib/validations/send-message";
import { z } from "zod";
import { zhCN } from "date-fns/esm/locale";

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

    const validatedMessage = messageValidator.parse(message);

    db.zadd(`chat:${chatId}:messages`, {
      score: timestamp,
      member: JSON.stringify(validatedMessage),
    });

    pusherServer.trigger(toPusherKey(`chat:${chatId}:messages`), `messages`, {
      message: validatedMessage,
    });

    return new Response("OK");
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      console.log("asd");
      return new Response(error.message, { status: 500 });
    }
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Internal Server Error", { status: 500 });
  }
};

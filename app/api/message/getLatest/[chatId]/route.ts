import { db } from "@/lib/db";

export const GET = async (
  req: Request,
  { params }: { params: { chatId: number } }
) => {
  try {
    if (!params.chatId) {
      return new Response("Not passed chatId", { status: 400 });
    }

    const response = await db.zrange(`chat:${params.chatId}:messages`, -1, -1);

    return new Response(JSON.stringify(response));
  } catch (error) {
    return new Response("Initial server error", { status: 500 });
  }
};

import { db } from "@/lib/db";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const { idToDeny } = z.object({ idToDeny: z.string() }).parse(body);

    const session = await getServerSession(authOptions);

    await db.srem(
      `user:${session?.user.id}:incoming_friends_requests`,
      idToDeny
    );
    return new Response("Success", { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};

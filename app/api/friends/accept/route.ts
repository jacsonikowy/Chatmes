import { db } from "@/lib/db";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { idToAdd } = body;

    const session: Session | null = await getServerSession(authOptions);
    const id = session?.user.id;

    await db.srem(`user:${id}:incoming_friends_requests`, idToAdd);
    await db.sadd(`user:${id}:friends`, idToAdd);
    await db.sadd(`user:${idToAdd}:friends`, id);

    return new Response("success", { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};

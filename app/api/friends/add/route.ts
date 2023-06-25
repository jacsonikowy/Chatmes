import { db } from "@/lib/db";
import { addFriendValidator } from "@/lib/validations/add-friend";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { pusherServer } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const { email } = addFriendValidator.parse(body.email);

    const idUserByEmail = await db.get(`user:email:${email}`);

    // If not exist user on db
    if (!idUserByEmail) {
      return new Response("This person does not exist", { status: 400 });
    }

    // If user is you
    const session = await getServerSession(authOptions);

    if (idUserByEmail === session!.user?.id) {
      return new Response("You cannot add yourself as a user", { status: 400 });
    }

    // If user already added
    const isAdded = (await db.sismember(
      `user:${idUserByEmail}:incoming_friends_requests`,
      session?.user.id
    )) as 0 | 1;

    if (isAdded) {
      return new Response("User is already added", { status: 400 });
    }

    // If already friends
    const isFriends = await db.sismember(
      `user:${idUserByEmail}:friends`,
      session?.user.id
    );

    if (isFriends) {
      return new Response("Already friends", { status: 400 });
    }

    // Adding user

    console.log("triggetriggerr");
    pusherServer.trigger(
      toPusherKey(`user:${idUserByEmail}:incoming_friends_requests`),
      "incoming_friends_requests",
      {
        senderId: session?.user.id,
        senderEmail: session?.user.email,
      }
    );

    await db.sadd(
      `user:${idUserByEmail}:incoming_friends_requests`,
      session?.user.id
    );

    return new Response(`Successfully addded ${email} as user`, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed", { status: 500 });
  }
};

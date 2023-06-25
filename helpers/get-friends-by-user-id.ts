import { userId } from "@/types/next-auth";
import { db } from "@/lib/db";

interface IFriends {
  name: string;
  email: string;
  image: string;
  emailVerified: null | boolean;
  id: userId;
}

export const getFriendsByUserId: (
  userId: userId
) => Promise<IFriends[]> = async (userId: userId) => {
  const friendsId = (await db.smembers(`user:${userId}:friends`)) as userId[];

  const friends = Promise.all(
    friendsId.map(async (id: userId) => {
      const friend = (await db.get(`user:${id}`)) as IFriends;
      return friend;
    })
  );

  return friends;
};

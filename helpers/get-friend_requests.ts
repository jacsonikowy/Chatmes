import { userId } from "@/types/next-auth";
import { db } from "@/lib/db";

export const getFriendRequests = async (userId: userId) => {
  const friendRequests = await db.smembers(
    `user:${userId}:incoming_friends_requests`
  );
  let countFriendRequests = 0;
  console.log(friendRequests);
  friendRequests.map(() => {
    countFriendRequests++;
  });
  return countFriendRequests;
};

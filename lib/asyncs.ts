import { userId } from "@/types/next-auth";
import { db } from "./db";
import axios from "axios";

export const getFriends = async (userId: userId) => {
  const response = await db.get(`user:${userId}:friends`);
  return response;
};

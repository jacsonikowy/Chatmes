import { userId } from "@/types/next-auth";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const chatHref = (id1: userId, id2: userId) => {
  const sortedIds = [id1, id2].sort();
  return `${sortedIds[0]}--${sortedIds[1]}`;
};

export const toPusherKey = (key: string) => {
  return key.replace(/:/g, "__");
};

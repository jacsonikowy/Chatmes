import { z } from "zod";

export const messageValidator = z.object({
  id: z.string(),
  senderId: z.string(),
  timestamp: z.number(),
  text: z.string().nonempty("Message cannot be empty"),
});

export const messageArrayValidator = z.array(messageValidator);

export type mEssage = z.infer<typeof messageValidator>;

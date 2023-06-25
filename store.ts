import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useFriendStore = create<IStoreFriend>((set) => ({
  email: null,
  id: null,
  image: "",
  name: null,
  setFriend: (friend: IFriends) =>
    set({
      email: friend.email,
      id: friend.id,
      image: friend.image,
      name: friend.name,
    }),
}));

export const useChatIdStore = create((set) => ({
  chatId: "",
  setChatId: (chatId: string) => {
    set({
      chatId: chatId,
    });
  },
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useFriendStore);
}

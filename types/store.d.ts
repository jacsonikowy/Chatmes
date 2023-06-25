interface IFriends {
  name: string;
  email: string;
  image: string;
  emailVerified?: null | boolean;
  id: userId;
}

interface IStoreFriend {
  name: string | null;
  email: string | null;
  image: string;
  emailVerifi1ed?: null | boolean;
  id: userId | nnull;
  setFriend: (friend: IFriends) => void;
}

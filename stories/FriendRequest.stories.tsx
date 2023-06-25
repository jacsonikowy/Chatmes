import { Meta, StoryObj } from "@storybook/react";
import FriendRequest from "../components/FriendRequestBlock";
import { title } from "process";

const meta: Meta<typeof FriendRequest> = {
  component: FriendRequest,
  title: "FriendRequest",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FriendRequestView: Story = {
  args: {
    mail: "loremipsum@gmail.com",
  },
};

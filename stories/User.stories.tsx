import User from "../components/User";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import man from "../public/Ellipse 10.png";

const meta: Meta<typeof User> = {
  component: User,
  title: "user",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ActiveUser: Story = {
  args: {
    username: "User1",
    message: "Latest message",
    avatar: man.src,
    active: true,
  },
};

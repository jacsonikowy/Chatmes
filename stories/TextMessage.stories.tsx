import TextMessage from "../components/TextMessage";
import { Meta, StoryObj } from "@storybook/react";
import man from "../public/Man.png";

const meta: Meta<typeof TextMessage> = {
  component: TextMessage,
  title: "TextMessage",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryText: Story = {
  args: {
    avatar: man.src,
    isCurrentUser: true,
    text: "sam sie pierdol",
  },
};

export const SecondaryText: Story = {
  args: {
    avatar: man.src,
    isCurrentUser: false,
    text: "sam sie pierdol",
  },
};

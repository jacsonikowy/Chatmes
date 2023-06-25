import { Meta, StoryObj } from "@storybook/react";
import Messages from "../components/Messages";

const meta: Meta<typeof Messages> = {
  component: Messages,
  title: "Messages",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MessagesView: Story = {
  args: {},
};

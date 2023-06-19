import Logo from "../components/Logo";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Logo,
  title: "Logo",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Chatmes: Story = {
  args: {},
};

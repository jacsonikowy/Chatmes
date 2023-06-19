import Button from "../components/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Chat now",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    text: "Chat now",
    variant: "primaryArrow",
  },
};

export const Google: Story = {
  args: {
    text: "Sign in with Google",
    variant: "primaryLogin",
  },
};

export const Github: Story = {
  args: {
    text: "Sign in with Github",
    variant: "githubLogin",
  },
};

import NavElement from "../components/NavElement";
import { Meta, StoryObj } from "@storybook/react";
import { MessageSquare } from "lucide-react";
import { Users } from "lucide-react";
import { Settings as Settings1 } from "lucide-react";

const meta: Meta<typeof NavElement> = {
  component: NavElement,
  title: "NavElement",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Messages: Story = {
  args: {
    text: "Messages",
    logo: <MessageSquare />,
  },
};

export const Friends: Story = {
  args: {
    text: "Friends",
    logo: <Users />,
  },
};

export const Settings: Story = {
  args: {
    text: "Settings",
    logo: <Settings1 />,
  },
};

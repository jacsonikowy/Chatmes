import { Meta, StoryObj } from "@storybook/react";
import Sidebar from "../components/Sidebar";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Sidebar",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SidebarStory: Story = {
  args: {},
};

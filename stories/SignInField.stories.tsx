import { Meta, StoryObj } from "@storybook/react";
import SignInField from "../components/SignInField";

const meta: Meta<typeof SignInField> = {
  component: SignInField,
  title: "SignInField",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Field: Story = {
  args: {},
};

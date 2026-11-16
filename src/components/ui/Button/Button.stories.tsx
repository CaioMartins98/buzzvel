import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "dark", "lemon"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { href: "#", children: "Explore courses", variant: "primary" },
};

export const Secondary: Story = {
  args: { href: "#", children: "See how it works", variant: "secondary" },
};

export const Dark: Story = {
  args: { href: "#", children: "Start learning", variant: "dark" },
};

export const Lemon: Story = {
  args: { href: "#", children: "View course", variant: "lemon" },
};

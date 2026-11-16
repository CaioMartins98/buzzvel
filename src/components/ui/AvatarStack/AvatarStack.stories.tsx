import type { Meta, StoryObj } from "@storybook/react";
import { AvatarStack } from "./index";
import { trustedAvatars } from "@/lib/data";

const meta = {
  title: "UI/AvatarStack",
  component: AvatarStack,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof AvatarStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { avatars: trustedAvatars },
};

export const Large: Story = {
  args: { avatars: trustedAvatars, size: 48 },
};

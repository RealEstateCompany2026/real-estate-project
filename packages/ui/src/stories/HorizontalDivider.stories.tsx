import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { HorizontalDivider } from "../components/HorizontalDivider";

const meta: Meta<typeof HorizontalDivider> = {
  title: "Design System/Atoms/HorizontalDivider",
  component: HorizontalDivider,
};
export default meta;
type Story = StoryObj<typeof HorizontalDivider>;

export const Default: Story = { args: { variant: "default" } };

export const Hover: Story = { args: { variant: "hover" } };

export const InContainer: Story = {
  args: { variant: "default" },
  render: (args) => (
    <div className="space-y-4 w-full">
      <div>Content above</div>
      <HorizontalDivider {...args} />
      <div>Content below</div>
    </div>
  ),
};

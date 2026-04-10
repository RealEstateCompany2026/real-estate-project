import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../components/Divider";

const meta: Meta<typeof Divider> = {
  title: "Design System/Atoms/Divider",
  component: Divider,
  argTypes: {
    spacing: { control: { type: "radio", options: ["none", "small", "medium", "large"] } },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    spacing: "medium",
  },
};

export const NoSpacing: Story = {
  args: {
    spacing: "none",
  },
};

export const SmallSpacing: Story = {
  args: {
    spacing: "small",
  },
};

export const LargeSpacing: Story = {
  args: {
    spacing: "large",
  },
};

export const WithContent: Story = {
  render: (args) => (
    <div>
      <p className="text-sm text-content-body">Content above</p>
      <Divider {...args} />
      <p className="text-sm text-content-body">Content below</p>
    </div>
  ),
  args: {
    spacing: "medium",
  },
};

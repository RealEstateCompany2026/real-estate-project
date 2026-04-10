import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { VerticalDivider } from "../components/VerticalDivider";

const meta: Meta<typeof VerticalDivider> = {
  title: "Design System/Atoms/VerticalDivider",
  component: VerticalDivider,
};
export default meta;
type Story = StoryObj<typeof VerticalDivider>;

export const Default: Story = { args: { variant: "default", height: 84 } };

export const Hover: Story = { args: { variant: "hover", height: 84 } };

export const ShortHeight: Story = { args: { variant: "default", height: 40 } };

export const InlineWithContent: Story = {
  args: { variant: "default", height: 84 },
  render: (args) => (
    <div className="flex items-center gap-4" style={{ height: "100px" }}>
      <div>Item 1</div>
      <VerticalDivider {...args} />
      <div>Item 2</div>
    </div>
  ),
};

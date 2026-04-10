import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListItemDivider } from "../components/ListItemDivider";

const meta: Meta<typeof ListItemDivider> = {
  title: "Design System/Atoms/ListItemDivider",
  component: ListItemDivider,
};
export default meta;
type Story = StoryObj<typeof ListItemDivider>;

export const Default: Story = {};

export const InList: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 bg-white">Item 1</div>
      <ListItemDivider />
      <div className="p-4 bg-white">Item 2</div>
      <ListItemDivider />
      <div className="p-4 bg-white">Item 3</div>
    </div>
  ),
};

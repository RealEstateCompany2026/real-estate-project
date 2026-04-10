import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavDivider } from "../components/NavDivider";

const meta: Meta<typeof NavDivider> = {
  title: "Design System/Atoms/NavDivider",
  component: NavDivider,
};
export default meta;
type Story = StoryObj<typeof NavDivider>;

export const Default: Story = {};

export const InNavigation: Story = {
  render: () => (
    <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded w-64">
      <div className="p-2">Home</div>
      <div className="p-2">About</div>
      <NavDivider />
      <div className="p-2">Settings</div>
      <div className="p-2">Profile</div>
    </div>
  ),
};

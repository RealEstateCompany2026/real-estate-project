import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StatusIndicatorIcon } from "../components/StatusIndicatorIcon";

const meta: Meta<typeof StatusIndicatorIcon> = {
  title: "Design System/Atoms/StatusIndicatorIcon",
  component: StatusIndicatorIcon,
};
export default meta;
type Story = StoryObj<typeof StatusIndicatorIcon>;

export const Success: Story = { args: { status: "success", size: 20 } };

export const Error: Story = { args: { status: "error", size: 20 } };

export const Warning: Story = { args: { status: "warning", size: 20 } };

export const AllStates: Story = {
  render: () => (
    <div className="flex gap-8">
      <div className="text-center">
        <StatusIndicatorIcon status="success" size={24} />
        <p className="text-sm mt-2">Success</p>
      </div>
      <div className="text-center">
        <StatusIndicatorIcon status="error" size={24} />
        <p className="text-sm mt-2">Error</p>
      </div>
      <div className="text-center">
        <StatusIndicatorIcon status="warning" size={24} />
        <p className="text-sm mt-2">Warning</p>
      </div>
    </div>
  ),
};

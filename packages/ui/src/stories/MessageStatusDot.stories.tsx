import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageStatusDot } from "../components/MessageStatusDot";

const meta: Meta<typeof MessageStatusDot> = {
  title: "Design System/Atoms/MessageStatusDot",
  component: MessageStatusDot,
};
export default meta;
type Story = StoryObj<typeof MessageStatusDot>;

export const Success: Story = { args: { status: "success" } };

export const Fail: Story = { args: { status: "fail" } };

export const None: Story = { args: { status: "none" } };

export const AllStates: Story = {
  render: () => (
    <div className="flex gap-8">
      <div className="text-center">
        <MessageStatusDot status="success" />
        <p className="text-sm mt-2">Success</p>
      </div>
      <div className="text-center">
        <MessageStatusDot status="fail" />
        <p className="text-sm mt-2">Fail</p>
      </div>
      <div className="text-center">
        <MessageStatusDot status="none" />
        <p className="text-sm mt-2">None</p>
      </div>
    </div>
  ),
};

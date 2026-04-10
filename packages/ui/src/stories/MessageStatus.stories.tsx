import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageStatus } from "../components/MessageStatus";

const meta: Meta<typeof MessageStatus> = {
  title: "Design System/Atoms/MessageStatus",
  component: MessageStatus,
};
export default meta;
type Story = StoryObj<typeof MessageStatus>;

export const Success: Story = { args: { level: "success" } };

export const Fail: Story = { args: { level: "fail" } };

export const None: Story = { args: { level: "none" } };

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StatusDot } from "../components/StatusDot";

const meta: Meta<typeof StatusDot> = {
  title: "Design System/Atoms/StatusDot",
  component: StatusDot,
  argTypes: {
    level: {
      control: {
        type: "radio",
        options: ["empty", "partial", "complete", "success", "error"],
      },
    },
    size: {
      control: { type: "radio", options: ["sm", "md", "lg"] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusDot>;

export const Empty: Story = {
  args: {
    level: "empty",
    size: "md",
  },
};

export const Partial: Story = {
  args: {
    level: "partial",
    size: "md",
  },
};

export const Complete: Story = {
  args: {
    level: "complete",
    size: "md",
  },
};

export const Success: Story = {
  args: {
    level: "success",
    size: "md",
  },
};

export const Error: Story = {
  args: {
    level: "error",
    size: "md",
  },
};

export const SmallSize: Story = {
  args: {
    level: "complete",
    size: "sm",
  },
};

export const LargeSize: Story = {
  args: {
    level: "success",
    size: "lg",
  },
};

export const AllLevels: Story = {
  render: () => (
    <div className="flex gap-4 items-center flex-wrap">
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="empty" />
        <span className="text-xs">Empty</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="partial" />
        <span className="text-xs">Partial</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="complete" />
        <span className="text-xs">Complete</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="success" />
        <span className="text-xs">Success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="error" />
        <span className="text-xs">Error</span>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="complete" size="sm" />
        <span className="text-xs">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="complete" size="md" />
        <span className="text-xs">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="complete" size="lg" />
        <span className="text-xs">Large</span>
      </div>
    </div>
  ),
};

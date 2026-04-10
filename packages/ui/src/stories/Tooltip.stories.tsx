import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../components/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Design System/Atoms/Tooltip",
  component: Tooltip,
  argTypes: {
    content: { control: "text" },
    side: { control: { type: "radio", options: ["top", "right", "bottom", "left"] } },
    delayDuration: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "This is a helpful tooltip",
    side: "top",
    delayDuration: 200,
  },
  render: (args) => (
    <div className="flex items-center justify-center h-48">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
  ),
};

export const TopSide: Story = {
  args: {
    content: "Tooltip on top",
    side: "top",
  },
  render: (args) => (
    <div className="flex items-center justify-center h-48">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
  ),
};

export const RightSide: Story = {
  args: {
    content: "Tooltip on right",
    side: "right",
  },
  render: (args) => (
    <div className="flex items-center justify-center h-48">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
  ),
};

export const BottomSide: Story = {
  args: {
    content: "Tooltip on bottom",
    side: "bottom",
  },
  render: (args) => (
    <div className="flex items-center justify-center h-48">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
  ),
};

export const LeftSide: Story = {
  args: {
    content: "Tooltip on left",
    side: "left",
  },
  render: (args) => (
    <div className="flex items-center justify-center h-48">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    content: "This is a longer tooltip with more information to display on hover",
    side: "top",
  },
  render: (args) => (
    <div className="flex items-center justify-center h-48">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
  ),
};

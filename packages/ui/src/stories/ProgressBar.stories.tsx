import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "../components/ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Design System/Atoms/ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: { control: { type: "number", min: 0, max: 100 } },
    size: {
      control: { type: "radio", options: ["sm", "default", "lg"] },
    },
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Zero: Story = {
  args: {
    progress: 0,
    size: "default",
  },
};

export const Partial: Story = {
  args: {
    progress: 45,
    size: "default",
  },
};

export const Half: Story = {
  args: {
    progress: 50,
    size: "default",
  },
};

export const Nearly: Story = {
  args: {
    progress: 85,
    size: "default",
  },
};

export const Complete: Story = {
  args: {
    progress: 100,
    size: "default",
  },
};

export const Small: Story = {
  args: {
    progress: 60,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    progress: 60,
    size: "lg",
  },
};

export const CustomColor: Story = {
  args: {
    progress: 65,
    color: "#FF6B6B",
    size: "default",
  },
};

export const CustomColorWarning: Story = {
  args: {
    progress: 50,
    color: "#FFA500",
    size: "default",
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-medium mb-2">Small</p>
        <ProgressBar {...args} size="sm" progress={45} />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Default</p>
        <ProgressBar {...args} size="default" progress={45} />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Large</p>
        <ProgressBar {...args} size="lg" progress={45} />
      </div>
    </div>
  ),
};

export const WithPercentage: Story = {
  args: {
    progress: 65,
    showPercentage: true,
  },
};

export const BelowThreshold: Story = {
  args: {
    progress: 40,
    threshold: 60,
    showPercentage: true,
  },
};

export const AboveThreshold: Story = {
  args: {
    progress: 75,
    threshold: 60,
    showPercentage: true,
  },
};

export const CompletionFull: Story = {
  args: {
    progress: 100,
    threshold: 60,
    showPercentage: true,
  },
};

export const ProgressSequence: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-xs mb-1">0%</p>
        <ProgressBar progress={0} />
      </div>
      <div>
        <p className="text-xs mb-1">25%</p>
        <ProgressBar progress={25} />
      </div>
      <div>
        <p className="text-xs mb-1">50%</p>
        <ProgressBar progress={50} />
      </div>
      <div>
        <p className="text-xs mb-1">75%</p>
        <ProgressBar progress={75} />
      </div>
      <div>
        <p className="text-xs mb-1">100%</p>
        <ProgressBar progress={100} />
      </div>
    </div>
  ),
};

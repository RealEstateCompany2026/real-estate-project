import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CompletionGauge } from "../components/CompletionGauge";

const meta: Meta<typeof CompletionGauge> = {
  title: "Design System/Atoms/CompletionGauge",
  component: CompletionGauge,
  argTypes: {
    percentage: { control: { type: "number", min: 0, max: 100 } },
    label: { control: "text" },
    size: {
      control: { type: "radio", options: ["small", "medium", "large"] },
    },
    showPercentage: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof CompletionGauge>;

export const Zero: Story = {
  args: {
    percentage: 0,
    label: "Completion",
    size: "medium",
    showPercentage: true,
  },
};

export const Quarter: Story = {
  args: {
    percentage: 25,
    label: "Completion",
    size: "medium",
    showPercentage: true,
  },
};

export const Half: Story = {
  args: {
    percentage: 50,
    label: "Completion",
    size: "medium",
    showPercentage: true,
  },
};

export const ThreeQuarters: Story = {
  args: {
    percentage: 75,
    label: "Completion",
    size: "medium",
    showPercentage: true,
  },
};

export const Full: Story = {
  args: {
    percentage: 100,
    label: "Completion",
    size: "medium",
    showPercentage: true,
  },
};

export const Small: Story = {
  args: {
    percentage: 60,
    label: "Profile",
    size: "small",
    showPercentage: true,
  },
};

export const Large: Story = {
  args: {
    percentage: 60,
    label: "Project",
    size: "large",
    showPercentage: true,
  },
};

export const NoLabel: Story = {
  args: {
    percentage: 75,
    label: "",
    size: "medium",
    showPercentage: true,
  },
};

export const NoPercentage: Story = {
  args: {
    percentage: 75,
    label: "Completion",
    size: "medium",
    showPercentage: false,
  },
};

export const CustomLabel: Story = {
  args: {
    percentage: 65,
    label: "Data Entry",
    size: "medium",
    showPercentage: true,
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-semibold mb-2">Small</p>
        <CompletionGauge {...args} size="small" percentage={45} />
      </div>
      <div>
        <p className="text-sm font-semibold mb-2">Medium</p>
        <CompletionGauge {...args} size="medium" percentage={45} />
      </div>
      <div>
        <p className="text-sm font-semibold mb-2">Large</p>
        <CompletionGauge {...args} size="large" percentage={45} />
      </div>
    </div>
  ),
};

export const ProgressSequence: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <CompletionGauge percentage={0} label="0%" />
      <CompletionGauge percentage={25} label="25%" />
      <CompletionGauge percentage={50} label="50%" />
      <CompletionGauge percentage={75} label="75%" />
      <CompletionGauge percentage={100} label="100%" />
    </div>
  ),
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ChipTrend } from "../components/ChipTrend";

const meta: Meta<typeof ChipTrend> = {
  title: "Design System/Atoms/ChipTrend",
  component: ChipTrend,
  argTypes: {
    label: { control: "text" },
    trend: {
      control: {
        type: "radio",
        options: ["up", "down", "neutral"],
      },
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ChipTrend>;

export const Trending: Story = {
  args: {
    label: "Score",
    trend: "up",
    disabled: false,
  },
};

export const Declining: Story = {
  args: {
    label: "Score",
    trend: "down",
    disabled: false,
  },
};

export const Neutral: Story = {
  args: {
    label: "Score",
    trend: "neutral",
    disabled: false,
  },
};

export const DisabledUp: Story = {
  args: {
    label: "Score",
    trend: "up",
    disabled: true,
  },
};

export const DisabledDown: Story = {
  args: {
    label: "Score",
    trend: "down",
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <ChipTrend label="Score" trend="up" />
        <ChipTrend label="Score" trend="down" />
        <ChipTrend label="Score" trend="neutral" />
      </div>
      <div className="flex gap-4">
        <ChipTrend label="Score" trend="up" disabled />
        <ChipTrend label="Score" trend="down" disabled />
        <ChipTrend label="Score" trend="neutral" disabled />
      </div>
    </div>
  ),
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScoreBadge } from "../components/ScoreBadge";

const meta: Meta<typeof ScoreBadge> = {
  title: "Design System/Atoms/ScoreBadge",
  component: ScoreBadge,
  argTypes: {
    score: { control: { type: "number", min: 0, max: 100 } },
    showTrend: { control: "boolean" },
    trend: {
      control: { type: "radio", options: ["up", "down", "neutral"] },
    },
    size: {
      control: { type: "radio", options: ["sm", "md", "lg"] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScoreBadge>;

export const Default: Story = {
  args: {
    score: 75,
    showTrend: false,
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    score: 75,
    showTrend: false,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    score: 75,
    showTrend: false,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    score: 75,
    showTrend: false,
    size: "lg",
  },
};

export const WithTrendUp: Story = {
  args: {
    score: 85,
    showTrend: true,
    trend: "up",
    size: "lg",
  },
};

export const WithTrendDown: Story = {
  args: {
    score: 65,
    showTrend: true,
    trend: "down",
    size: "lg",
  },
};

export const WithTrendNeutral: Story = {
  args: {
    score: 75,
    showTrend: true,
    trend: "neutral",
    size: "lg",
  },
};

export const LowScore: Story = {
  args: {
    score: 15,
    showTrend: false,
    size: "lg",
  },
};

export const HighScore: Story = {
  args: {
    score: 95,
    showTrend: false,
    size: "lg",
  },
};

export const PerfectScore: Story = {
  args: {
    score: 100,
    showTrend: true,
    trend: "up",
    size: "lg",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Sizes</h3>
        <div className="flex gap-6 items-center">
          <ScoreBadge score={75} size="sm" />
          <ScoreBadge score={75} size="md" />
          <ScoreBadge score={75} size="lg" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">With Trends</h3>
        <div className="flex gap-6 items-center">
          <ScoreBadge score={85} showTrend trend="up" size="lg" />
          <ScoreBadge score={75} showTrend trend="neutral" size="lg" />
          <ScoreBadge score={65} showTrend trend="down" size="lg" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Score Levels</h3>
        <div className="flex gap-6 items-center">
          <ScoreBadge score={10} size="lg" />
          <ScoreBadge score={30} size="lg" />
          <ScoreBadge score={50} size="lg" />
          <ScoreBadge score={75} size="lg" />
          <ScoreBadge score={100} size="lg" />
        </div>
      </div>
    </div>
  ),
};

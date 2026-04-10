import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ChipScore } from "../components/ChipScore";

const meta: Meta<typeof ChipScore> = {
  title: "Design System/Atoms/ChipScore",
  component: ChipScore,
  argTypes: {
    score: { control: { type: "number", min: 0, max: 100 } },
    level: {
      control: {
        type: "radio",
        options: ["veryLow", "low", "medium", "high", "veryHigh"],
      },
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ChipScore>;

export const VeryLow: Story = {
  args: {
    score: 5,
    level: "veryLow",
    disabled: false,
  },
};

export const Low: Story = {
  args: {
    score: 25,
    level: "low",
    disabled: false,
  },
};

export const Medium: Story = {
  args: {
    score: 50,
    level: "medium",
    disabled: false,
  },
};

export const High: Story = {
  args: {
    score: 75,
    level: "high",
    disabled: false,
  },
};

export const VeryHigh: Story = {
  args: {
    score: 95,
    level: "veryHigh",
    disabled: false,
  },
};

export const DisabledVeryLow: Story = {
  args: {
    score: 5,
    level: "veryLow",
    disabled: true,
  },
};

export const DisabledHigh: Story = {
  args: {
    score: 75,
    level: "high",
    disabled: true,
  },
};

export const AllLevels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ChipScore score={5} level="veryLow" />
      <ChipScore score={25} level="low" />
      <ChipScore score={50} level="medium" />
      <ChipScore score={75} level="high" />
      <ChipScore score={95} level="veryHigh" />
    </div>
  ),
};

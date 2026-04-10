import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageTimestamp } from "../components/MessageTimestamp";

const meta: Meta<typeof MessageTimestamp> = {
  title: "Design System/Atoms/MessageTimestamp",
  component: MessageTimestamp,
};
export default meta;
type Story = StoryObj<typeof MessageTimestamp>;

export const Recent: Story = {
  args: { date: "le 10 avril 2026", time: "à 14:30" },
};

export const YesterdayDate: Story = {
  args: { date: "hier", time: "à 09:15" },
};

export const LongAgo: Story = {
  args: { date: "le 1 janvier 2026", time: "à 23:59" },
};

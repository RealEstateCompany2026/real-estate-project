import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AiTitleWithBadge } from "../components/AiTitleWithBadge";

const meta: Meta<typeof AiTitleWithBadge> = {
  title: "Design System/Atoms/AiTitleWithBadge",
  component: AiTitleWithBadge,
};
export default meta;
type Story = StoryObj<typeof AiTitleWithBadge>;

export const Default: Story = { args: { title: "AI Suggestions", count: 2 } };

export const NoCount: Story = { args: { title: "AI Insights", count: 0 } };

export const HighCount: Story = { args: { title: "Recommendations", count: 8 } };

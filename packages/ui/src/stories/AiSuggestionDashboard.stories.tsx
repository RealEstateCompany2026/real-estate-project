import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AiSuggestionDashboard } from "../components/AiSuggestionDashboard";

const meta: Meta<typeof AiSuggestionDashboard> = {
  title: "Design System/Organisms/AiSuggestionDashboard",
  component: AiSuggestionDashboard,
};
export default meta;
type Story = StoryObj<typeof AiSuggestionDashboard>;

export const Default: Story = {
  args: {
    conseil: 3,
    service: 2,
    administratif: 1,
    transaction: 4,
    onViewAll: () => console.log("View all clicked"),
  },
};

export const HighSuggestions: Story = {
  args: {
    conseil: 8,
    service: 5,
    administratif: 6,
    transaction: 12,
    onViewAll: () => console.log("View all clicked"),
  },
};

export const LowSuggestions: Story = {
  args: {
    conseil: 1,
    service: 0,
    administratif: 1,
    transaction: 0,
    onViewAll: () => console.log("View all clicked"),
  },
};

export const NoSuggestions: Story = {
  args: {
    conseil: 0,
    service: 0,
    administratif: 0,
    transaction: 0,
    onViewAll: () => console.log("View all clicked"),
  },
};

export const BalancedSuggestions: Story = {
  args: {
    conseil: 2,
    service: 2,
    administratif: 2,
    transaction: 3,
    onViewAll: () => console.log("View all clicked"),
  },
};

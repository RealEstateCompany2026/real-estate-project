import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AiSuggestion } from "../components/AiSuggestion";

const meta: Meta<typeof AiSuggestion> = {
  title: "Design System/Atoms/AiSuggestion",
  component: AiSuggestion,
};
export default meta;
type Story = StoryObj<typeof AiSuggestion>;

export const NoSuggestions: Story = { args: { count: 0 } };

export const WithSuggestions: Story = { args: { count: 3 } };

export const ManyCount: Story = { args: { count: 12 } };

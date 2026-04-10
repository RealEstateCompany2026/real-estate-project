import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListSuggestions } from "../components/ListSuggestions";

const meta: Meta<typeof ListSuggestions> = {
  title: "Design System/Organisms/ListSuggestions",
  component: ListSuggestions,
};
export default meta;
type Story = StoryObj<typeof ListSuggestions>;

export const Default: Story = {
  args: {
    count: 3,
  },
};

export const OneSuggestion: Story = {
  args: {
    count: 1,
  },
};

export const TwoSuggestions: Story = {
  args: {
    count: 2,
  },
};

export const FourSuggestions: Story = {
  args: {
    count: 4,
  },
};

export const NoSuggestions: Story = {
  args: {
    count: 0,
  },
};

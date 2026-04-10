import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavAvatar } from "../components/NavAvatar";

const meta: Meta<typeof NavAvatar> = {
  title: "Design System/Atoms/NavAvatar",
  component: NavAvatar,
};
export default meta;
type Story = StoryObj<typeof NavAvatar>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    alt: "User avatar",
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    alt: "Selected user",
    selected: true,
  },
};

export const WithClick: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    alt: "Clickable avatar",
    selected: false,
    onClick: () => console.log("Avatar clicked"),
  },
};

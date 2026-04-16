import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButtonMega } from "../components/IconButtonMega";
import { Home, Settings, Search, Star } from "lucide-react";

const meta: Meta<typeof IconButtonMega> = {
  title: "Design System/Atoms/IconButtonMega",
  component: IconButtonMega,
};
export default meta;
type Story = StoryObj<typeof IconButtonMega>;

export const Default: Story = {
  args: {
    icon: <Settings size={24} />,
    variant: "default",
    onClick: () => console.log("Default button clicked"),
  },
};

export const Primary: Story = {
  args: {
    icon: <Home size={24} />,
    variant: "primary",
    onClick: () => console.log("Primary button clicked"),
  },
};

export const Outline: Story = {
  args: {
    icon: <Star size={24} />,
    variant: "outline",
    onClick: () => console.log("Outline button clicked"),
  },
};

export const Ghost: Story = {
  args: {
    icon: <Search size={24} />,
    variant: "ghost",
    onClick: () => console.log("Ghost button clicked"),
  },
};

export const Disabled: Story = {
  args: {
    icon: <Home size={24} />,
    variant: "primary",
    disabled: true,
  },
};

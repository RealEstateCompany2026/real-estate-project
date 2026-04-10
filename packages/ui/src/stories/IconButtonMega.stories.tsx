import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButtonMega } from "../components/IconButtonMega";
import { Home, Settings, Search } from "lucide-react";

const meta: Meta<typeof IconButtonMega> = {
  title: "Design System/Atoms/IconButtonMega",
  component: IconButtonMega,
};
export default meta;
type Story = StoryObj<typeof IconButtonMega>;

export const Primary: Story = {
  args: {
    icon: <Home size={24} />,
    variant: "primary",
    onClick: () => console.log("Primary button clicked"),
  },
};

export const Secondary: Story = {
  args: {
    icon: <Settings size={24} />,
    variant: "secondary",
    onClick: () => console.log("Secondary button clicked"),
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
    disabled: true,
  },
};

export const Outlined: Story = {
  args: {
    icon: <Home size={24} />,
    variant: "secondary",
    outlined: true,
    onClick: () => console.log("Outlined button clicked"),
  },
};

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DropdownButton } from "../components/DropdownButton";
import { Settings, Filter, ChevronDown, User } from "lucide-react";

const meta: Meta<typeof DropdownButton> = {
  title: "Design System/Atoms/DropdownButton",
  component: DropdownButton,
  argTypes: {
    label: { control: "text" },
    isOpen: { control: "boolean" },
    shadow: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownButton>;

export const Default: Story = {
  args: {
    label: "Options",
    isOpen: false,
    shadow: true,
    disabled: false,
  },
};

export const Open: Story = {
  args: {
    label: "Options",
    isOpen: true,
    shadow: true,
    disabled: false,
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Filter",
    leftIcon: Filter,
    isOpen: false,
    shadow: true,
    disabled: false,
  },
};

export const WithLeftIconOpen: Story = {
  args: {
    label: "Filter",
    leftIcon: Filter,
    isOpen: true,
    shadow: true,
    disabled: false,
  },
};

export const WithSettings: Story = {
  args: {
    label: "Settings",
    leftIcon: Settings,
    isOpen: false,
    shadow: true,
    disabled: false,
  },
};

export const WithUser: Story = {
  args: {
    label: "Profile",
    leftIcon: User,
    isOpen: false,
    shadow: true,
    disabled: false,
  },
};

export const NoShadow: Story = {
  args: {
    label: "Options",
    isOpen: false,
    shadow: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Options",
    isOpen: false,
    shadow: true,
    disabled: true,
  },
};

export const IconOnly: Story = {
  args: {
    leftIcon: Settings,
    isOpen: false,
    shadow: true,
    disabled: false,
  },
};

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <DropdownButton
        label="Click me"
        leftIcon={Settings}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
    );
  },
};

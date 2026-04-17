import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "../components/MenuItem";
import { Settings, Edit, Trash2, Plus, Check, ArrowRight } from "lucide-react";

const meta: Meta<typeof MenuItem> = {
  title: "Design System/Atoms/MenuItem",
  component: MenuItem,
  argTypes: {
    label: { control: "text" },
    selected: { control: "boolean" },
    disabled: { control: "boolean" },
    destructive: { control: "boolean" },
    size: { control: "select", options: ["default", "small"] },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    label: "Edit Profile",
    selected: false,
    disabled: false,
    destructive: false,
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Settings",
    leftIcon: Settings,
    selected: false,
    disabled: false,
    destructive: false,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Next Step",
    rightIcon: ArrowRight,
    selected: false,
    disabled: false,
    destructive: false,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: "Edit Item",
    leftIcon: Edit,
    rightIcon: Check,
    selected: false,
    disabled: false,
    destructive: false,
  },
};

export const Selected: Story = {
  args: {
    label: "Active Item",
    leftIcon: Settings,
    selected: true,
    disabled: false,
    destructive: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Unavailable",
    leftIcon: Settings,
    selected: false,
    disabled: true,
    destructive: false,
  },
};

export const Destructive: Story = {
  args: {
    label: "Delete",
    leftIcon: Trash2,
    selected: false,
    disabled: false,
    destructive: true,
  },
};

export const DestructiveDisabled: Story = {
  args: {
    label: "Delete",
    leftIcon: Trash2,
    selected: false,
    disabled: true,
    destructive: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col border border-edge-default rounded-lg overflow-hidden max-w-xs">
      <MenuItem label="Edit" leftIcon={Edit} />
      <MenuItem label="Settings" leftIcon={Settings} selected={true} />
      <MenuItem label="Add New" leftIcon={Plus} rightIcon={ArrowRight} />
      <MenuItem label="Delete" leftIcon={Trash2} destructive={true} />
      <MenuItem label="Disabled" disabled={true} />
    </div>
  ),
};

// --- Small variants ---

export const SmallDefault: Story = {
  args: {
    label: "Edit Profile",
    size: "small",
  },
};

export const SmallSelected: Story = {
  args: {
    label: "Active Item",
    leftIcon: Settings,
    selected: true,
    size: "small",
  },
};

export const SmallWithIcons: Story = {
  args: {
    label: "Edit Item",
    leftIcon: Edit,
    rightIcon: Check,
    size: "small",
  },
};

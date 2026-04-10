import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../components/Chip";
import { Star, Home, User } from "lucide-react";

const meta: Meta<typeof Chip> = {
  title: "Design System/Atoms/Chip",
  component: Chip,
  argTypes: {
    size: { control: { type: "radio", options: ["small", "medium"] } },
    iconPosition: { control: { type: "radio", options: ["left", "right"] } },
    fontWeight: { control: { type: "radio", options: ["semibold", "regular"] } },
    gap: { control: { type: "radio", options: ["tight", "normal"] } },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: "Chip Label",
    size: "medium",
    disabled: false,
  },
};

export const WithIcon: Story = {
  args: {
    children: "Starred",
    icon: <Star size={20} />,
    iconPosition: "left",
    size: "medium",
    disabled: false,
  },
};

export const IconRight: Story = {
  args: {
    children: "Starred",
    icon: <Star size={20} />,
    iconPosition: "right",
    size: "medium",
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    children: "Small Chip",
    size: "small",
    disabled: false,
  },
};

export const SmallWithIcon: Story = {
  args: {
    children: "Home",
    icon: <Home size={16} />,
    iconPosition: "left",
    size: "small",
    disabled: false,
  },
};

export const Regular: Story = {
  args: {
    children: "Regular Weight",
    fontWeight: "regular",
    size: "medium",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Chip",
    disabled: true,
    size: "medium",
  },
};

export const DisabledWithIcon: Story = {
  args: {
    children: "Disabled",
    icon: <User size={20} />,
    iconPosition: "left",
    disabled: true,
    size: "medium",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <Chip>Basic</Chip>
        <Chip icon={<Star size={20} />}>With Icon</Chip>
        <Chip icon={<Home size={20} />} iconPosition="right">Icon Right</Chip>
        <Chip size="small">Small</Chip>
        <Chip disabled>Disabled</Chip>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Chip fontWeight="regular">Regular Weight</Chip>
        <Chip gap="normal" icon={<User size={20} />}>Wider Gap</Chip>
        <Chip size="small" icon={<Star size={16} />}>Small Icon</Chip>
      </div>
    </div>
  ),
};

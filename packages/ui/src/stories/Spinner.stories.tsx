import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../components/Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Design System/Atoms/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: { type: "radio", options: ["sm", "md", "lg"] } },
    variant: { control: { type: "radio", options: ["primary", "neutral", "inverse"] } },
    ariaLabel: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "primary",
    ariaLabel: "Loading...",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    variant: "primary",
    ariaLabel: "Loading...",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    variant: "primary",
    ariaLabel: "Loading...",
  },
};

export const Primary: Story = {
  args: {
    size: "md",
    variant: "primary",
    ariaLabel: "Loading...",
  },
};

export const Neutral: Story = {
  args: {
    size: "md",
    variant: "neutral",
    ariaLabel: "Loading...",
  },
};

export const Inverse: Story = {
  render: (args) => (
    <div className="bg-neutral-800 p-8 rounded-lg flex items-center justify-center">
      <Spinner {...args} />
    </div>
  ),
  args: {
    size: "md",
    variant: "inverse",
    ariaLabel: "Loading...",
  },
};

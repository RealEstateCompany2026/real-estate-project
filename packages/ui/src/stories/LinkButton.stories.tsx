import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "../components/LinkButton";
import { ArrowRight, Check, X } from "lucide-react";

const meta: Meta<typeof LinkButton> = {
  title: "Design System/Atoms/LinkButton",
  component: LinkButton,
};
export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "View details",
    onClick: () => console.log("Clicked"),
  },
};

export const Branded: Story = {
  args: {
    variant: "branded",
    children: "Get started",
    onClick: () => console.log("Clicked"),
  },
};

export const WithIconRight: Story = {
  args: {
    variant: "neutral",
    children: "Continue",
    iconRight: ArrowRight,
    onClick: () => console.log("Clicked"),
  },
};

export const WithIconLeft: Story = {
  args: {
    variant: "branded",
    children: "Confirm",
    iconLeft: Check,
    onClick: () => console.log("Clicked"),
  },
};

export const Disabled: Story = {
  args: {
    variant: "neutral",
    children: "Disabled link",
    disabled: true,
  },
};

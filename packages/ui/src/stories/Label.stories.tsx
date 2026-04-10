import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../components/Label";

const meta: Meta<typeof Label> = {
  title: "Design System/Atoms/Label",
  component: Label,
  argTypes: {
    label: { control: "text" },
    required: { control: "boolean" },
    icon: { control: "boolean" },
    htmlFor: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    label: "Email Address",
    required: false,
    icon: false,
  },
};

export const Required: Story = {
  args: {
    label: "Email Address",
    required: true,
    icon: false,
  },
};

export const WithIcon: Story = {
  args: {
    label: "Email Address",
    required: false,
    icon: true,
  },
};

export const RequiredWithIcon: Story = {
  args: {
    label: "Email Address",
    required: true,
    icon: true,
  },
};

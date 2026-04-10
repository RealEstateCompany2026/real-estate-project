import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../components/Switch";

const meta: Meta<typeof Switch> = {
  title: "Design System/Atoms/Switch",
  component: Switch,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    ariaLabel: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    ariaLabel: "Toggle feature",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    ariaLabel: "Toggle feature",
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    ariaLabel: "Toggle feature",
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    ariaLabel: "Toggle feature",
  },
};

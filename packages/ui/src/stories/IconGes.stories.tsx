import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconGes } from "../components/IconGes";

const meta: Meta<typeof IconGes> = {
  title: "Design System/Atoms/IconGes",
  component: IconGes,
};
export default meta;
type Story = StoryObj<typeof IconGes>;

export const ClassA: Story = { args: { classe: "A", size: "medium" } };

export const ClassD: Story = { args: { classe: "D", size: "medium" } };

export const ClassG: Story = { args: { classe: "G", size: "medium" } };

export const Small: Story = { args: { classe: "B", size: "small" } };

export const Large: Story = { args: { classe: "C", size: "large" } };

export const Selected: Story = { args: { classe: "A", size: "medium", selected: true } };

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconDpe } from "../components/IconDpe";

const meta: Meta<typeof IconDpe> = {
  title: "Design System/Atoms/IconDpe",
  component: IconDpe,
};
export default meta;
type Story = StoryObj<typeof IconDpe>;

export const ClassA: Story = { args: { classe: "A", size: "medium" } };

export const ClassD: Story = { args: { classe: "D", size: "medium" } };

export const ClassG: Story = { args: { classe: "G", size: "medium" } };

export const Small: Story = { args: { classe: "B", size: "small" } };

export const Large: Story = { args: { classe: "C", size: "large" } };

export const Selected: Story = { args: { classe: "A", size: "medium", selected: true } };

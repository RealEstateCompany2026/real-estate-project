import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DpeScale } from "../components/DpeScale";

const meta: Meta<typeof DpeScale> = {
  title: "Design System/Atoms/DpeScale",
  component: DpeScale,
};
export default meta;
type Story = StoryObj<typeof DpeScale>;

export const ClassA: Story = { args: { activeClass: "A", size: "md" } };

export const ClassD: Story = { args: { activeClass: "D", size: "md" } };

export const ClassG: Story = { args: { activeClass: "G", size: "md" } };

export const Small: Story = { args: { activeClass: "B", size: "sm" } };

export const NoClass: Story = { args: { activeClass: null, size: "md" } };

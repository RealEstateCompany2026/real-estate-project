import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { GesScale } from "../components/GesScale";

const meta: Meta<typeof GesScale> = {
  title: "Design System/Atoms/GesScale",
  component: GesScale,
};
export default meta;
type Story = StoryObj<typeof GesScale>;

export const ClassA: Story = { args: { activeClass: "A", size: "md" } };

export const ClassE: Story = { args: { activeClass: "E", size: "md" } };

export const ClassG: Story = { args: { activeClass: "G", size: "md" } };

export const Small: Story = { args: { activeClass: "C", size: "sm" } };

export const NoClass: Story = { args: { activeClass: null, size: "md" } };

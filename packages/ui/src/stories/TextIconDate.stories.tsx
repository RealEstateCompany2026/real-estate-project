import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextIconDate } from "../components/TextIconDate";

const meta: Meta<typeof TextIconDate> = {
  title: "Design System/Atoms/TextIconDate",
  component: TextIconDate,
};
export default meta;
type Story = StoryObj<typeof TextIconDate>;

export const ShortDuration: Story = { args: { days: 3 } };

export const MediumDuration: Story = { args: { days: 15 } };

export const LongDuration: Story = { args: { days: 90 } };

export const SingleDay: Story = { args: { days: 1 } };

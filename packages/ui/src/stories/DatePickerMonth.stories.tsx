import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DatePickerMonth } from "../components/DatePickerMonth";

const meta: Meta<typeof DatePickerMonth> = {
  title: "Design System/Atoms/DatePickerMonth",
  component: DatePickerMonth,
};
export default meta;
type Story = StoryObj<typeof DatePickerMonth>;

export const April2026: Story = {
  args: { month: "Avril 2026", onClick: () => console.log("Month clicked") },
};

export const December2025: Story = {
  args: { month: "Décembre 2025", onClick: () => console.log("Month clicked") },
};

export const January2026: Story = {
  args: { month: "Janvier 2026", onClick: () => console.log("Month clicked") },
};

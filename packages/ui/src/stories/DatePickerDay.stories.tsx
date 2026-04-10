import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DatePickerDay } from "../components/DatePickerDay";

const meta: Meta<typeof DatePickerDay> = {
  title: "Design System/Atoms/DatePickerDay",
  component: DatePickerDay,
};
export default meta;
type Story = StoryObj<typeof DatePickerDay>;

export const Monday: Story = { args: { day: "L" } };

export const Wednesday: Story = { args: { day: "M" } };

export const Friday: Story = { args: { day: "V" } };

export const AllDays: Story = {
  render: () => (
    <div className="flex gap-1">
      <DatePickerDay day="D" />
      <DatePickerDay day="L" />
      <DatePickerDay day="M" />
      <DatePickerDay day="M" />
      <DatePickerDay day="J" />
      <DatePickerDay day="V" />
      <DatePickerDay day="S" />
    </div>
  ),
};

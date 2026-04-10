import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DatePickerNumber } from "../components/DatePickerNumber";

const meta: Meta<typeof DatePickerNumber> = {
  title: "Design System/Atoms/DatePickerNumber",
  component: DatePickerNumber,
};
export default meta;
type Story = StoryObj<typeof DatePickerNumber>;

export const Default: Story = {
  args: { value: 15, state: "default", onClick: () => console.log("Selected: 15") },
};

export const Selected: Story = {
  args: { value: 20, state: "selected", onClick: () => console.log("Selected: 20") },
};

export const Today: Story = {
  args: { value: 10, state: "today", onClick: () => console.log("Selected: 10") },
};

export const Disabled: Story = {
  args: { value: 5, disabled: true },
};

export const Hover: Story = {
  args: { value: 25, state: "hover", onClick: () => console.log("Selected: 25") },
};

export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-2 w-fit">
      <div className="text-center">
        <DatePickerNumber value={1} state="default" />
        <p className="text-xs mt-1">Default</p>
      </div>
      <div className="text-center">
        <DatePickerNumber value={15} state="selected" />
        <p className="text-xs mt-1">Selected</p>
      </div>
      <div className="text-center">
        <DatePickerNumber value={10} state="today" />
        <p className="text-xs mt-1">Today</p>
      </div>
      <div className="text-center">
        <DatePickerNumber value={20} state="hover" />
        <p className="text-xs mt-1">Hover</p>
      </div>
      <div className="text-center">
        <DatePickerNumber value={5} disabled />
        <p className="text-xs mt-1">Disabled</p>
      </div>
    </div>
  ),
};

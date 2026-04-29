import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "../components/DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Design System/Organisms/DatePicker",
  component: DatePicker,
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

const today = new Date(2026, 3, 10); // April 10, 2026
const minDate = new Date(2026, 0, 1);
const maxDate = new Date(2026, 11, 31);

/* ── Modal stories ── */

export const ModalDefault: Story = {
  args: {
    variant: "modal",
    selectedDate: today,
    dateFormat: "DD/MM/YYYY",
    onDateSelect: (date) => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: (date) => console.log("Confirmed:", date),
  },
};

export const ModalWithMinMax: Story = {
  args: {
    variant: "modal",
    selectedDate: new Date(2026, 6, 1),
    minDate: new Date(2026, 6, 1),
    maxDate: new Date(2026, 8, 30),
    dateFormat: "DD/MM/YYYY",
    onDateSelect: (date) => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: (date) => console.log("Confirmed:", date),
  },
};

/* ── Docked stories ── */

const DockedTemplate = (args: React.ComponentProps<typeof DatePicker>) => {
  const [date, setDate] = useState<Date | undefined>(args.selectedDate);
  return (
    <div className="w-[320px]">
      <DatePicker
        {...args}
        selectedDate={date}
        onDateSelect={(d) => {
          setDate(d);
          console.log("Date selected:", d);
        }}
      />
    </div>
  );
};

export const DockedDefault: Story = {
  render: (args) => <DockedTemplate {...args} />,
  args: {
    variant: "docked",
    dateFormat: "DD/MM/YYYY",
    placeholder: "Sélectionner une date",
  },
};

export const DockedWithDate: Story = {
  render: (args) => <DockedTemplate {...args} />,
  args: {
    variant: "docked",
    selectedDate: new Date(1985, 2, 15),
    dateFormat: "DD/MM/YYYY",
    placeholder: "Date de naissance",
  },
};

export const DockedWithMinMax: Story = {
  render: (args) => <DockedTemplate {...args} />,
  args: {
    variant: "docked",
    maxDate: new Date(2026, 3, 29),
    dateFormat: "DD/MM/YYYY",
    placeholder: "Date de naissance",
  },
};

export const DockedError: Story = {
  render: (args) => <DockedTemplate {...args} />,
  args: {
    variant: "docked",
    error: true,
    dateFormat: "DD/MM/YYYY",
    placeholder: "Sélectionner une date",
  },
};

export const DockedDisabled: Story = {
  render: (args) => <DockedTemplate {...args} />,
  args: {
    variant: "docked",
    disabled: true,
    selectedDate: new Date(1985, 2, 15),
    dateFormat: "DD/MM/YYYY",
    placeholder: "Sélectionner une date",
  },
};

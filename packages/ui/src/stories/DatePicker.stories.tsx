import React from "react";
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

export const Default: Story = {
  args: {
    selectedDate: today,
    minDate,
    maxDate,
    dateFormat: "DD/MM/YYYY",
    onDateSelect: (date) => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: (date) => console.log("Confirmed:", date),
  },
};

export const ShortFormat: Story = {
  args: {
    selectedDate: today,
    minDate,
    maxDate,
    dateFormat: "short",
    onDateSelect: (date) => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: (date) => console.log("Confirmed:", date),
  },
};

export const ISOFormat: Story = {
  args: {
    selectedDate: new Date(2026, 5, 15),
    minDate,
    maxDate,
    dateFormat: "YYYY-MM-DD",
    onDateSelect: (date) => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: (date) => console.log("Confirmed:", date),
  },
};

export const USFormat: Story = {
  args: {
    selectedDate: new Date(2026, 2, 20),
    minDate,
    maxDate,
    dateFormat: "MM/DD/YYYY",
    onDateSelect: (date) => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: (date) => console.log("Confirmed:", date),
  },
};

export const WithConstraints: Story = {
  args: {
    selectedDate: new Date(2026, 6, 1),
    minDate: new Date(2026, 6, 1), // Start of July
    maxDate: new Date(2026, 8, 30), // End of September
    dateFormat: "DD/MM/YYYY",
    onDateSelect: (date) => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: (date) => console.log("Confirmed:", date),
  },
};

export const PastDate: Story = {
  args: {
    selectedDate: new Date(2025, 11, 25),
    minDate: new Date(2025, 0, 1),
    maxDate: new Date(2026, 11, 31),
    dateFormat: "DD/MM/YYYY",
    onDateSelect: (date) => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: (date) => console.log("Confirmed:", date),
  },
};

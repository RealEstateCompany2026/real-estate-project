import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelect } from "../components/MultiSelect";

const meta: Meta<typeof MultiSelect> = {
  title: "Design System/Molecules/MultiSelect",
  component: MultiSelect,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const defaultOptions = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
];

const CityOptions = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
];

const StatusOptions = [
  "Active",
  "Inactive",
  "Pending",
  "Archived",
  "Draft",
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <MultiSelect
        label="Select Items"
        options={defaultOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose options..."
      />
    );
  },
};

export const WithSelection: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(["Option 1", "Option 3"]);
    return (
      <MultiSelect
        label="Select Items"
        options={defaultOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose options..."
      />
    );
  },
};

export const Cities: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <MultiSelect
        label="Select Cities"
        options={CityOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose cities..."
      />
    );
  },
};

export const CitiesWithSelection: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(["New York", "Chicago"]);
    return (
      <MultiSelect
        label="Select Cities"
        options={CityOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose cities..."
      />
    );
  },
};

export const Status: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <MultiSelect
        label="Select Status"
        options={StatusOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose status..."
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(["Option 1"]);
    return (
      <MultiSelect
        label="Select Items"
        options={defaultOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose options..."
        disabled={true}
      />
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <div className="flex flex-col gap-4">
        <MultiSelect
          label="Select Options"
          options={["Apple", "Banana", "Cherry", "Date", "Elderberry"]}
          value={value}
          onChange={setValue}
          placeholder="Choose fruits..."
        />
        <div className="p-3 bg-gray-100 rounded">
          <p className="text-sm font-semibold mb-2">Selected:</p>
          <p className="text-sm">
            {value.length === 0
              ? "None selected"
              : value.join(", ")}
          </p>
        </div>
      </div>
    );
  },
};

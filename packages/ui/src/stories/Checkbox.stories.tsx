import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Design System/Atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    ariaLabel: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    error: false,
    ariaLabel: "Accept terms",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    error: false,
    ariaLabel: "Accept terms",
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    error: false,
    ariaLabel: "Accept terms",
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    error: false,
    ariaLabel: "Accept terms",
  },
};

export const Error: Story = {
  args: {
    checked: false,
    disabled: false,
    error: true,
    ariaLabel: "Accept terms",
  },
};

export const ErrorChecked: Story = {
  args: {
    checked: true,
    disabled: false,
    error: true,
    ariaLabel: "Accept terms",
  },
};

export const WithLabel: Story = {
  args: {
    checked: false,
    label: "Propriétaire",
  },
};

export const WithLabelChecked: Story = {
  args: {
    checked: true,
    label: "Acquéreur",
  },
};

export const WithLabelDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: "Bailleur",
  },
};

export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Propriétaire" checked={true} />
      <Checkbox label="Acquéreur" checked={false} />
      <Checkbox label="Bailleur" checked={false} />
      <Checkbox label="Locataire" checked={false} />
    </div>
  ),
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonSort } from "../components/ButtonSort";

const meta: Meta<typeof ButtonSort> = {
  title: "Design System/Atoms/ButtonSort",
  component: ButtonSort,
};
export default meta;
type Story = StoryObj<typeof ButtonSort>;

export const NoSort: Story = {
  args: {
    label: "Clients",
    count: 482,
    sortDirection: "none",
    onClick: () => console.log("Sort clicked"),
  },
};

export const Ascending: Story = {
  args: {
    label: "Properties",
    count: 156,
    sortDirection: "asc",
    onClick: () => console.log("Sort clicked"),
  },
};

export const Descending: Story = {
  args: {
    label: "Prospects",
    sortDirection: "desc",
    onClick: () => console.log("Sort clicked"),
  },
};

export const Disabled: Story = {
  args: {
    label: "Inactive",
    disabled: true,
    sortDirection: "none",
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListName } from "../components/ListName";

const meta: Meta<typeof ListName> = {
  title: "Design System/Atoms/ListName",
  component: ListName,
};
export default meta;
type Story = StoryObj<typeof ListName>;

export const Default: Story = {
  args: {
    firstName: "Jean",
    lastName: "Dupont",
  },
};

export const WithClick: Story = {
  args: {
    firstName: "Marie",
    lastName: "Martin",
    onClick: () => console.log("Name clicked"),
  },
};

export const LongNames: Story = {
  args: {
    firstName: "Alexander",
    lastName: "Vanderbilt-Richardson",
  },
};

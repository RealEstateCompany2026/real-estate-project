import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonPagination } from "../components/ButtonPagination";

const meta: Meta<typeof ButtonPagination> = {
  title: "Design System/Atoms/ButtonPagination",
  component: ButtonPagination,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof ButtonPagination>;

export const Default: Story = {
  args: {
    variant: "default",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    canGoPrevious: true,
    canGoNext: true,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    canGoPrevious: true,
    canGoNext: true,
  },
};

export const DisabledPrevious: Story = {
  args: {
    variant: "default",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    canGoPrevious: false,
    canGoNext: true,
  },
};

export const DisabledNext: Story = {
  args: {
    variant: "default",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    canGoPrevious: true,
    canGoNext: false,
  },
};

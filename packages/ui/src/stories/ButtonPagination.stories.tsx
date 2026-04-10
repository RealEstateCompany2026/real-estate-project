import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonPagination } from "../components/ButtonPagination";

const meta: Meta<typeof ButtonPagination> = {
  title: "Design System/Atoms/ButtonPagination",
  component: ButtonPagination,
};
export default meta;
type Story = StoryObj<typeof ButtonPagination>;

export const Default: Story = {
  args: {
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    canGoPrevious: true,
    canGoNext: true,
  },
};

export const FirstPage: Story = {
  args: {
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    canGoPrevious: false,
    canGoNext: true,
  },
};

export const LastPage: Story = {
  args: {
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    canGoPrevious: true,
    canGoNext: false,
  },
};

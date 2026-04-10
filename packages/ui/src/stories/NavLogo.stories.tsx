import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavLogo } from "../components/NavLogo";

const meta: Meta<typeof NavLogo> = {
  title: "Design System/Atoms/NavLogo",
  component: NavLogo,
};
export default meta;
type Story = StoryObj<typeof NavLogo>;

export const Default: Story = {
  args: {
    onClick: () => console.log("Logo clicked"),
  },
};

export const CustomLogo: Story = {
  args: {
    src: "https://via.placeholder.com/40x40?text=Logo",
    alt: "Custom logo",
    onClick: () => console.log("Logo clicked"),
  },
};

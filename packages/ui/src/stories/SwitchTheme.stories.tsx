import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SwitchTheme } from "../components/SwitchTheme";

const meta: Meta<typeof SwitchTheme> = {
  title: "Design System/Atoms/SwitchTheme",
  component: SwitchTheme,
  argTypes: {
    isDark: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof SwitchTheme>;

export const LightMode: Story = {
  args: {
    isDark: false,
  },
};

export const DarkMode: Story = {
  args: {
    isDark: true,
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TitleSectionList } from "../components/TitleSectionList";

const meta: Meta<typeof TitleSectionList> = {
  title: "Design System/Atoms/TitleSectionList",
  component: TitleSectionList,
};
export default meta;
type Story = StoryObj<typeof TitleSectionList>;

export const TitleOnly: Story = { args: { title: "Recent Properties" } };

export const WithPercentage: Story = {
  args: { title: "Available", percentage: 75 },
};

export const HighPercentage: Story = {
  args: { title: "Completed", percentage: 100 },
};

export const WithCustomWidth: Story = {
  args: { title: "Progress", percentage: 45, width: 250 },
};

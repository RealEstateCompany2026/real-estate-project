import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SectionListType } from "../components/SectionListType";

const meta: Meta<typeof SectionListType> = {
  title: "Design System/Molecules/SectionListType",
  component: SectionListType,
};

export default meta;
type Story = StoryObj<typeof SectionListType>;

export const Default: Story = {
  args: {
    type: "Appartement",
    count: 45,
    onClick: () => console.log("Type cliqué"),
  },
};

export const House: Story = {
  args: {
    type: "Maison",
    count: 28,
  },
};

export const Commercial: Story = {
  args: {
    type: "Commerce",
    count: 12,
  },
};

export const Land: Story = {
  args: {
    type: "Terrain",
    count: 18,
  },
};

export const HighCount: Story = {
  args: {
    type: "Studio",
    count: 156,
    onClick: () => alert("Studios: 156 biens"),
  },
};

export const LowCount: Story = {
  args: {
    type: "Penthouse",
    count: 3,
  },
};

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BadgeCriteria } from "../components/BadgeCriteria";

const meta: Meta<typeof BadgeCriteria> = {
  title: "Design System/Atoms/BadgeCriteria",
  component: BadgeCriteria,
};
export default meta;
type Story = StoryObj<typeof BadgeCriteria>;

export const Outlined: Story = {
  args: { label: "Price: €500k", variant: "outlined" },
};

export const Default: Story = { args: { label: "Rooms: 3", variant: "default" } };

export const WithRemove: Story = {
  args: { label: "Location: Paris", variant: "outlined" },
  render: (args) => {
    const [visible, setVisible] = React.useState(true);
    return visible ? (
      <BadgeCriteria {...args} onRemove={() => setVisible(false)} />
    ) : (
      <p>Badge removed</p>
    );
  },
};

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BadgeCriteria } from "../components/BadgeCriteria";

const meta: Meta<typeof BadgeCriteria> = {
  title: "Design System/Atoms/BadgeCriteria",
  component: BadgeCriteria,
};
export default meta;
type Story = StoryObj<typeof BadgeCriteria>;

/* ---------- Default ---------- */

export const Default: Story = {
  args: { label: "Rooms: 3", variant: "default" },
};

export const DefaultWithRemove: Story = {
  args: { label: "Rooms: 3", variant: "default" },
  render: (args) => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <BadgeCriteria {...args} onRemove={() => setVisible(false)} />
    ) : (
      <p>Badge removed</p>
    );
  },
};

/* ---------- Outlined ---------- */

export const Outlined: Story = {
  args: { label: "Price: €500k", variant: "outlined" },
};

export const OutlinedWithRemove: Story = {
  args: { label: "Price: €500k", variant: "outlined" },
  render: (args) => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <BadgeCriteria {...args} onRemove={() => setVisible(false)} />
    ) : (
      <p>Badge removed</p>
    );
  },
};

/* ---------- Ghost ---------- */

export const Ghost: Story = {
  args: { label: "Location: Paris", variant: "ghost" },
};

export const GhostWithRemove: Story = {
  args: { label: "Location: Paris", variant: "ghost" },
  render: (args) => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <BadgeCriteria {...args} onRemove={() => setVisible(false)} />
    ) : (
      <p>Badge removed</p>
    );
  },
};

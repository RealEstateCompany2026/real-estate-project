import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge";

const meta: Meta<typeof Badge> = {
  title: "Design System/Atoms/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "disabled", "success", "warning", "information", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "LABEL", variant: "default" },
};

export const Disabled: Story = {
  args: { children: "LABEL", variant: "disabled" },
};

export const Success: Story = {
  args: { children: "LABEL", variant: "success" },
};

export const Warning: Story = {
  args: { children: "LABEL", variant: "warning" },
};

export const Information: Story = {
  args: { children: "LABEL", variant: "information" },
};

export const Error: Story = {
  args: { children: "LABEL", variant: "error" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Light variants */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <Badge variant="default">LABEL</Badge>
        <Badge variant="disabled">LABEL</Badge>
        <Badge variant="information">LABEL</Badge>
        <Badge variant="warning">LABEL</Badge>
        <Badge variant="success">LABEL</Badge>
        <Badge variant="error">LABEL</Badge>
      </div>
    </div>
  ),
};

export const StatusExamples: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ fontSize: 14, color: "var(--text-body)", width: 120 }}>Client :</span>
        <Badge variant="success">PROPRIÉTAIRE</Badge>
        <Badge variant="information">ACQUÉREUR</Badge>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ fontSize: 14, color: "var(--text-body)", width: 120 }}>Bien :</span>
        <Badge variant="default">À VENDRE</Badge>
        <Badge variant="disabled">BROUILLON</Badge>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ fontSize: 14, color: "var(--text-body)", width: 120 }}>Affaire :</span>
        <Badge variant="warning">EN NÉGOCIATION</Badge>
        <Badge variant="success">SIGNÉE</Badge>
        <Badge variant="error">PERDUE</Badge>
      </div>
    </div>
  ),
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge";

const meta: Meta<typeof Badge> = {
  title: "Design System/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "success", "warning", "info", "outline"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Branded", variant: "default" },
};

export const Secondary: Story = {
  args: { children: "Secondaire", variant: "secondary" },
};

export const Destructive: Story = {
  args: { children: "Erreur", variant: "destructive" },
};

export const Success: Story = {
  args: { children: "Succès", variant: "success" },
};

export const Warning: Story = {
  args: { children: "Attention", variant: "warning" },
};

export const Info: Story = {
  args: { children: "Information", variant: "info" },
};

export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
      <Badge variant="default">Branded</Badge>
      <Badge variant="secondary">Secondaire</Badge>
      <Badge variant="destructive">Erreur</Badge>
      <Badge variant="success">Succès</Badge>
      <Badge variant="warning">Attention</Badge>
      <Badge variant="info">Information</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const StatusExamples: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ fontSize: 14, color: "var(--text-body)", width: 120 }}>Client :</span>
        <Badge variant="success">Propriétaire</Badge>
        <Badge variant="info">Acquéreur</Badge>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ fontSize: 14, color: "var(--text-body)", width: 120 }}>Bien :</span>
        <Badge variant="default">À vendre</Badge>
        <Badge variant="outline">Brouillon</Badge>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ fontSize: 14, color: "var(--text-body)", width: 120 }}>Affaire :</span>
        <Badge variant="warning">En négociation</Badge>
        <Badge variant="success">Signée</Badge>
        <Badge variant="destructive">Perdue</Badge>
      </div>
    </div>
  ),
};

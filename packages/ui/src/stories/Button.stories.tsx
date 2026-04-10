import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { Plus, Download, Trash2, ArrowRight } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Action principale", variant: "default" },
};

export const Destructive: Story = {
  args: { children: "Supprimer", variant: "destructive" },
};

export const Outline: Story = {
  args: { children: "Annuler", variant: "outline" },
};

export const Secondary: Story = {
  args: { children: "Secondaire", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost" },
};

export const Link: Story = {
  args: { children: "En savoir plus", variant: "link" },
};

export const Small: Story = {
  args: { children: "Petit", variant: "default", size: "sm" },
};

export const Large: Story = {
  args: { children: "Grand", variant: "default", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Désactivé", variant: "default", disabled: true },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button variant="default">
        <Plus className="w-4 h-4 mr-2" /> Nouveau client
      </Button>
      <Button variant="outline">
        <Download className="w-4 h-4 mr-2" /> Exporter
      </Button>
      <Button variant="destructive">
        <Trash2 className="w-4 h-4 mr-2" /> Supprimer
      </Button>
      <Button variant="ghost">
        Suivant <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <Button variant="default" size="sm">Small</Button>
        <Button variant="default" size="default">Default</Button>
        <Button variant="default" size="lg">Large</Button>
        <Button variant="default" size="icon"><Plus className="w-4 h-4" /></Button>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <Button variant="default" disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled</Button>
        <Button variant="secondary" disabled>Disabled</Button>
      </div>
    </div>
  ),
};

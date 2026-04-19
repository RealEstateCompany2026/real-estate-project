import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppBarFicheBien } from "../components/AppBarFicheBien";

const meta: Meta<typeof AppBarFicheBien> = {
  title: "Design System/Organisms/AppBarFicheBien",
  component: AppBarFicheBien,
};
export default meta;
type Story = StoryObj<typeof AppBarFicheBien>;

export const Default: Story = {
  args: {
    title: "T3 · 75m²",
    transactionType: "À VENDRE",
    contactName: "Dupont, Jean-François",
    qualification: 64,
    carnetActive: true,
    mandatActive: true,
    aiSuggestions: 3,
    onBack: () => console.log("Back clicked"),
  },
};

export const HighQualification: Story = {
  args: {
    title: "T5 · 120m²",
    transactionType: "À LOUER",
    contactName: "Martin, Sophie",
    qualification: 92,
    carnetActive: true,
    mandatActive: false,
    aiSuggestions: 5,
    onBack: () => console.log("Back clicked"),
  },
};

export const LowQualification: Story = {
  args: {
    title: "T2 · 45m²",
    transactionType: "À VENDRE",
    contactName: "Bernard, Pierre",
    qualification: 18,
    carnetActive: false,
    mandatActive: true,
    aiSuggestions: 1,
    onBack: () => console.log("Back clicked"),
  },
};

export const NoBadgesActive: Story = {
  args: {
    title: "Studio · 22m²",
    transactionType: "À VENDRE",
    contactName: "Rousseau, Marie",
    qualification: 45,
    carnetActive: false,
    mandatActive: false,
    aiSuggestions: 0,
    onBack: () => console.log("Back clicked"),
  },
};

export const ManySuggestions: Story = {
  args: {
    title: "T4 · 95m²",
    transactionType: "À LOUER",
    contactName: "Laurent, Claude",
    qualification: 78,
    carnetActive: true,
    mandatActive: true,
    aiSuggestions: 8,
    onBack: () => console.log("Back clicked"),
  },
};

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
    bienId: "BIEN-2026-4521",
    transactionType: "À VENDRE",
    contactName: "Dupont, Jean-François",
    qualification: 64,
    showCarnet: true,
    showMandat: true,
    aiSuggestions: 3,
    onBack: () => console.log("Back clicked"),
  },
};

export const HighQualification: Story = {
  args: {
    bienId: "BIEN-2026-7834",
    transactionType: "À LOUER",
    contactName: "Martin, Sophie",
    qualification: 92,
    showCarnet: true,
    showMandat: false,
    aiSuggestions: 5,
    onBack: () => console.log("Back clicked"),
  },
};

export const LowQualification: Story = {
  args: {
    bienId: "BIEN-2026-3159",
    transactionType: "À VENDRE",
    contactName: "Bernard, Pierre",
    qualification: 18,
    showCarnet: false,
    showMandat: true,
    aiSuggestions: 1,
    onBack: () => console.log("Back clicked"),
  },
};

export const WithoutBadges: Story = {
  args: {
    bienId: "BIEN-2026-5627",
    transactionType: "À VENDRE",
    contactName: "Rousseau, Marie",
    qualification: 45,
    showCarnet: false,
    showMandat: false,
    aiSuggestions: 2,
    onBack: () => console.log("Back clicked"),
  },
};

export const ManySuggestions: Story = {
  args: {
    bienId: "BIEN-2026-8903",
    transactionType: "À LOUER",
    contactName: "Laurent, Claude",
    qualification: 78,
    showCarnet: true,
    showMandat: true,
    aiSuggestions: 8,
    onBack: () => console.log("Back clicked"),
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SectionListAffaire } from "../components/SectionListAffaire";

const meta: Meta<typeof SectionListAffaire> = {
  title: "Design System/Molecules/SectionListAffaire",
  component: SectionListAffaire,
};

export default meta;
type Story = StoryObj<typeof SectionListAffaire>;

export const Default: Story = {
  args: {
    type: "VENTE",
    affaireId: "AFF-2024-001",
    bienType: "T3",
    surface: "85 m²",
    price: "450 000 €",
  },
};

export const Rental: Story = {
  args: {
    type: "LOCATION",
    affaireId: "AFF-2024-002",
    bienType: "T2",
    surface: "65 m²",
    price: "1 200 €/mois",
  },
};

export const LargeProperty: Story = {
  args: {
    type: "VENTE",
    affaireId: "AFF-2024-003",
    bienType: "Villa",
    surface: "250 m²",
    price: "1 800 000 €",
    onClick: () => console.log("Affaire cliquée"),
  },
};

export const SmallApartment: Story = {
  args: {
    type: "LOCATION",
    affaireId: "AFF-2024-004",
    bienType: "Studio",
    surface: "25 m²",
    price: "750 €/mois",
  },
};

export const WithCallback: Story = {
  args: {
    type: "VENTE",
    affaireId: "AFF-2024-005",
    bienType: "T4",
    surface: "120 m²",
    price: "550 000 €",
    onClick: () => alert("Affaire AFF-2024-005 sélectionnée"),
  },
};

export const Commercial: Story = {
  args: {
    type: "VENTE",
    affaireId: "AFF-2024-006",
    bienType: "Commerce",
    surface: "200 m²",
    price: "650 000 €",
  },
};

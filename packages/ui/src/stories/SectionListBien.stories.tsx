import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SectionListBien } from "../components/SectionListBien";

const meta: Meta<typeof SectionListBien> = {
  title: "Design System/Molecules/SectionListBien",
  component: SectionListBien,
};

export default meta;
type Story = StoryObj<typeof SectionListBien>;

export const Default: Story = {
  args: {
    address: "123 Rue de la Paix, 75008 Paris",
    type: "Appartement",
    surface: "85 m²",
    rooms: "3 pièces",
    onClick: () => console.log("Bien sélectionné"),
  },
};

export const House: Story = {
  args: {
    address: "456 Avenue des Champs, 92100 Boulogne",
    type: "Maison",
    surface: "250 m²",
    rooms: "6 pièces",
  },
};

export const Studio: Story = {
  args: {
    address: "789 Boulevard Saint-Germain, 75005 Paris",
    type: "Studio",
    surface: "25 m²",
    rooms: "Studio",
    onClick: () => alert("Studio sélectionné"),
  },
};

export const Duplex: Story = {
  args: {
    address: "321 Rue Mouffetard, 75005 Paris",
    type: "Duplex",
    surface: "120 m²",
    rooms: "4 pièces",
  },
};

export const Commercial: Story = {
  args: {
    address: "654 Rue de Rivoli, 75001 Paris",
    type: "Commerce",
    surface: "150 m²",
    rooms: "Commercial",
  },
};

export const LongAddress: Story = {
  args: {
    address: "12345 Boulevard Saint-Germain, Résidence Les Jardins du Marais, 75006 Paris",
    type: "Penthouse",
    surface: "320 m²",
    rooms: "7 pièces",
  },
};

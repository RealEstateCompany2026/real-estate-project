import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppBarBienAncres } from "../components/AppBarBienAncres";

const meta: Meta<typeof AppBarBienAncres> = {
  title: "Design System/Organisms/AppBarBienAncres",
  component: AppBarBienAncres,
};
export default meta;
type Story = StoryObj<typeof AppBarBienAncres>;

export const Default: Story = {
  args: {
    bienId: "BIEN-2026-4521",
    address: "42 rue de la Paix, 75000 Paris",
    onBack: () => console.log("Back clicked"),
  },
};

export const LongAddress: Story = {
  args: {
    bienId: "BIEN-2026-7834",
    address: "Appartement 5C, 128 avenue des Champs-Élysées, 75008 Paris 8ème arrondissement",
    onBack: () => console.log("Back clicked"),
  },
};

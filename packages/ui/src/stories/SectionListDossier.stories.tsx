import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SectionListDossier } from "../components/SectionListDossier";

const meta: Meta<typeof SectionListDossier> = {
  title: "Design System/Molecules/SectionListDossier",
  component: SectionListDossier,
};

export default meta;
type Story = StoryObj<typeof SectionListDossier>;

export const Default: Story = {
  args: {
    name: "Dossier Dupont",
    status: "EN_COURS",
    progress: 65,
    onClick: () => console.log("Dossier cliqué"),
  },
};

export const Completed: Story = {
  args: {
    name: "Dossier Bernard",
    status: "TERMINE",
    progress: 100,
  },
};

export const Started: Story = {
  args: {
    name: "Dossier Martin",
    status: "EN_COURS",
    progress: 25,
  },
};

export const OnHold: Story = {
  args: {
    name: "Dossier Leclerc",
    status: "EN_ATTENTE",
    progress: 50,
  },
};

export const LongName: Story = {
  args: {
    name: "Dossier Vente Maison Boulogne Martin/Dupont",
    status: "EN_COURS",
    progress: 75,
    onClick: () => alert("Dossier sélectionné"),
  },
};

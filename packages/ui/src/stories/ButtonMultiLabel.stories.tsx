import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonMultiLabel } from "../components/ButtonMultiLabel";

const meta: Meta<typeof ButtonMultiLabel> = {
  title: "Design System/Atoms/ButtonMultiLabel",
  component: ButtonMultiLabel,
};
export default meta;
type Story = StoryObj<typeof ButtonMultiLabel>;

export const TwoSections: Story = {
  args: {
    sections: [
      { label: "Précédent", onClick: () => console.log("Précédent") },
      { label: "Suivant", onClick: () => console.log("Suivant") },
    ],
  },
};

export const FourSectionsWithDisabled: Story = {
  args: {
    sections: [
      { label: "Tous", onClick: () => console.log("Tous") },
      { label: "Actifs", onClick: () => console.log("Actifs") },
      { label: "Archivés", onClick: () => console.log("Archivés"), disabled: true },
      { label: "Brouillons", onClick: () => console.log("Brouillons") },
    ],
  },
};

export const FullWidth: Story = {
  args: {
    sections: [
      { label: "Liste", onClick: () => console.log("Liste") },
      { label: "Carte", onClick: () => console.log("Carte") },
      { label: "Tableau", onClick: () => console.log("Tableau") },
    ],
    fullWidth: true,
  },
};

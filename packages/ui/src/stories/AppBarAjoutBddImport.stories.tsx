import type { Meta, StoryObj } from "@storybook/react";
import { AppBarAjoutBddImport } from "../components/AppBarAjoutBddImport";

const meta: Meta<typeof AppBarAjoutBddImport> = {
  title: "Design System/Organisms/AppBarAjoutBddImport",
  component: AppBarAjoutBddImport,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Barre d'en-tête du parcours d'import BDD — bouton retour + titre + nom fichier uploadé + bouton Enregistrer.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppBarAjoutBddImport>;

export const Default: Story = {
  args: {
    fileName: "contacts_2026.csv",
  },
};

export const FichierExcel: Story = {
  args: {
    fileName: "mandats_q1_2026.xlsx",
    buttonLabel: "Valider l'import",
  },
};

export const SansFichier: Story = {
  args: {},
};

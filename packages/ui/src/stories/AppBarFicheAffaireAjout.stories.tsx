import type { Meta, StoryObj } from "@storybook/react";
import { AppBarFicheAffaireAjout } from "../components/AppBarFicheAffaireAjout";

const meta: Meta<typeof AppBarFicheAffaireAjout> = {
  title: "Design System/Organisms/AppBarFicheAffaireAjout",
  component: AppBarFicheAffaireAjout,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Barre d'en-tête formulaire d'ajout d'affaire — titre + bouton Enregistrer + bouton fermer.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppBarFicheAffaireAjout>;

export const Default: Story = {
  args: {
    title: "Ajouter une affaire",
  },
};

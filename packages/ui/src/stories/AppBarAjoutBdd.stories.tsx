import type { Meta, StoryObj } from "@storybook/react";
import { AppBarAjoutBdd } from "../components/AppBarAjoutBdd";

const meta: Meta<typeof AppBarAjoutBdd> = {
  title: "Design System/Organisms/AppBarAjoutBdd",
  component: AppBarAjoutBdd,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Barre d'en-tête de la page Base de données — titre + bouton ajouter (+) + bouton recherche.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppBarAjoutBdd>;

export const Default: Story = {
  args: {
    title: "Base de données",
  },
};

export const TitreCustom: Story = {
  args: {
    title: "Imports récents",
  },
};

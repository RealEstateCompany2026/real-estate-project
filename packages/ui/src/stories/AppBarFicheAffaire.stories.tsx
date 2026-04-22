import type { Meta, StoryObj } from "@storybook/react";
import { AppBarFicheAffaire } from "../components/AppBarFicheAffaire";

const meta: Meta<typeof AppBarFicheAffaire> = {
  title: "Design System/Organisms/AppBarFicheAffaire",
  component: AppBarFicheAffaire,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Barre d'en-tête fiche affaire — deal ID + badge type + infos bien (type, surface, ville, prix) + AI suggestions.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppBarFicheAffaire>;

export const Vente: Story = {
  args: {
    dealId: "MV.789.083.263",
    dealType: "VENTE",
    propertyType: "T4",
    surface: "84 m²",
    city: "Charleville-Mézières",
    price: "360 000€",
    aiSuggestions: 1,
  },
};

export const Bail: Story = {
  args: {
    dealId: "MG.456.123.789",
    dealType: "BAIL",
    propertyType: "T2",
    surface: "45 m²",
    city: "Toulouse",
    price: "750€/mois",
    aiSuggestions: 0,
  },
};

export const Acquisition: Story = {
  args: {
    dealId: "MRA.321.654.987",
    dealType: "ACQUISITION",
    propertyType: "Maison",
    surface: "120 m²",
    city: "Lyon",
    price: "520 000€",
    aiSuggestions: 3,
  },
};

export const Location: Story = {
  args: {
    dealId: "MRL.111.222.333",
    dealType: "LOCATION",
    propertyType: "Studio",
    surface: "25 m²",
    city: "Paris",
    price: "900€/mois",
    aiSuggestions: 0,
  },
};

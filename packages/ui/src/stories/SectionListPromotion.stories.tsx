import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SectionListPromotion } from "../components/SectionListPromotion";

const meta: Meta<typeof SectionListPromotion> = {
  title: "Design System/Molecules/SectionListPromotion",
  component: SectionListPromotion,
};

export default meta;
type Story = StoryObj<typeof SectionListPromotion>;

export const Default: Story = {
  args: {
    title: "Promotion Printemps 2024",
    description: "Réduction de 10% sur les biens résidentiels",
    startDate: "1 avril 2024",
    endDate: "30 juin 2024",
    onClick: () => console.log("Promotion cliquée"),
  },
};

export const Active: Story = {
  args: {
    title: "Grand Soldes Immobiliers",
    description: "Jusqu'à 15% de réduction",
    startDate: "10 avril 2024",
    endDate: "30 avril 2024",
  },
};

export const Upcoming: Story = {
  args: {
    title: "Promotion Été",
    description: "À partir du 1er juin",
    startDate: "1 juin 2024",
    endDate: "31 août 2024",
  },
};

export const Expired: Story = {
  args: {
    title: "Promotion Hiver",
    description: "Réduction hivernale",
    startDate: "1 janvier 2024",
    endDate: "28 février 2024",
  },
};

export const LongDescription: Story = {
  args: {
    title: "Campagne Commerciale Annuelle",
    description:
      "Offre spéciale pour nos clients fidèles : réduction progressive selon le nombre de biens",
    startDate: "15 avril 2024",
    endDate: "31 décembre 2024",
    onClick: () => alert("Détails de la promotion"),
  },
};

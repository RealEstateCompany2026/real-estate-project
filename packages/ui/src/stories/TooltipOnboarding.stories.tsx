import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TooltipOnboarding } from "../components/TooltipOnboarding";

const meta: Meta<typeof TooltipOnboarding> = {
  title: "Design System/Molecules/TooltipOnboarding",
  component: TooltipOnboarding,
};

export default meta;
type Story = StoryObj<typeof TooltipOnboarding>;

export const FirstStep: Story = {
  args: {
    currentStep: 1,
    totalSteps: 4,
    title: "Bienvenue !",
    description: "Découvrez les fonctionnalités principales de l'application en quelques minutes.",
    position: { top: 100, left: 100 },
    onNext: () => console.log("Étape suivante"),
    onSkip: () => console.log("Fin du tour"),
  },
};

export const MiddleStep: Story = {
  args: {
    currentStep: 2,
    totalSteps: 4,
    title: "Gestion des propriétés",
    description: "Ici vous pouvez consulter, modifier et gérer toutes vos propriétés. Cliquez sur une propriété pour voir les détails.",
    position: { top: 200, left: 300 },
    onNext: () => console.log("Étape suivante"),
    onPrevious: () => console.log("Étape précédente"),
    onSkip: () => console.log("Fin du tour"),
  },
};

export const LastStep: Story = {
  args: {
    currentStep: 4,
    totalSteps: 4,
    title: "Vous êtes prêt !",
    description: "Vous disposez maintenant de tous les outils pour gérer efficacement vos biens immobiliers.",
    position: { bottom: 100, right: 50 },
    nextLabel: "Terminer",
    onNext: () => console.log("Fin de l'onboarding"),
  },
};

export const WithPreviousButton: Story = {
  args: {
    currentStep: 2,
    totalSteps: 3,
    title: "Gestion des clients",
    description: "Créez et gérez vos clients, suivez leurs achats et ventes.",
    position: { top: 150, left: 200 },
    onNext: () => console.log("Suivant"),
    onPrevious: () => console.log("Précédent"),
    onSkip: () => console.log("Passer"),
  },
};

export const CustomWidth: Story = {
  args: {
    currentStep: 1,
    totalSteps: 2,
    title: "Tableau de bord personnalisé",
    description:
      "Bienvenue sur votre tableau de bord. Vous y retrouverez un résumé de vos affaires en cours, vos tâches à faire et des statistiques importantes sur votre activité immobilière.",
    position: { top: 100, left: 50 },
    width: 480,
    onNext: () => console.log("Suivant"),
    onSkip: () => console.log("Passer"),
  },
};

export const CustomLabels: Story = {
  args: {
    currentStep: 3,
    totalSteps: 5,
    title: "Étape importante",
    description: "Voici une information cruciale que vous devez connaître.",
    position: { top: 200, left: 300 },
    nextLabel: "Aller au suivant",
    onNext: () => console.log("Suivant"),
    onSkip: () => console.log("Ignorer le tour"),
  },
};

export const LongDescription: Story = {
  args: {
    currentStep: 1,
    totalSteps: 4,
    title: "Exploitation des données",
    description:
      "Utilisez les filtres avancés pour trouver rapidement les propriétés correspondant à vos critères. Vous pouvez filtrer par type de bien, prix, localisation, surface, et bien d'autres critères. Cliquez sur le bouton 'Filtrer' pour accéder à tous les options disponibles.",
    position: { top: 120, left: 150 },
    onNext: () => console.log("Suivant"),
    onSkip: () => console.log("Passer"),
  },
};

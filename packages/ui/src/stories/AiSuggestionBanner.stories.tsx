import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AiSuggestionBanner } from "../components/AiSuggestionBanner";

const meta: Meta<typeof AiSuggestionBanner> = {
  title: "Design System/Organisms/AiSuggestionBanner",
  component: AiSuggestionBanner,
};
export default meta;
type Story = StoryObj<typeof AiSuggestionBanner>;

export const Default: Story = {
  args: {
    suggestion: "Bonjour, vous devriez contacter M. Dupont pour finaliser la vente du bien 42 rue de la Paix",
    actionLabel: "Programmer",
    onAction: () => console.log("Action clicked"),
  },
};

export const WithLongSuggestion: Story = {
  args: {
    suggestion: "L'IA a détecté que le client Durand, Jean-Pierre a particulièrement apprécié les biens avec terrasse orientée sud. Je vous recommande de consulter sa fiche pour identifier les propriétés correspondantes dans votre portefeuille.",
    actionLabel: "Consulter",
    onAction: () => console.log("Consulter clicked"),
  },
};

export const WithCustomAction: Story = {
  args: {
    suggestion: "Votre qualification client est complète à 87%. Quelques informations manquent pour optimiser les recommandations.",
    actionLabel: "Compléter",
    onAction: () => console.log("Compléter clicked"),
  },
};

export const WithoutAction: Story = {
  args: {
    suggestion: "Bienvenue dans RealAgent CRM. Explorez les suggestions personnalisées pour optimiser votre activité immobilière.",
    actionLabel: "Découvrir",
  },
};

export const Compact: Story = {
  args: {
    suggestion: "Bonjour, vous devriez contacter M. Dupont pour finaliser la vente du bien 42 rue de la Paix",
    variant: "compact",
    onAction: () => console.log("Compact action clicked"),
  },
};

export const CompactLongText: Story = {
  args: {
    suggestion: "L'IA a détecté que le client Durand, Jean-Pierre a particulièrement apprécié les biens avec terrasse orientée sud. Je vous recommande de consulter sa fiche.",
    variant: "compact",
    onAction: () => console.log("Compact long text clicked"),
  },
};

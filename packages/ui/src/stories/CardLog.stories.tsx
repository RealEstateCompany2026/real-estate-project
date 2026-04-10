import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CardLog } from "../components/CardLog";

const meta: Meta<typeof CardLog> = {
  title: "Design System/Molecules/CardLog",
  component: CardLog,
};

export default meta;
type Story = StoryObj<typeof CardLog>;

export const Default: Story = {
  args: {
    date: "15 avril 2024",
    time: "14:32",
    author: "Marie Dupont",
    category: "Création",
    description: "Propriété créée - Villa à Paris 75008",
    categoryVariant: "default",
  },
};

export const Modified: Story = {
  args: {
    date: "14 avril 2024",
    time: "09:15",
    author: "Jean Bernard",
    category: "Modification",
    description: "Prix réduit de 50 000 € à 450 000 €",
    categoryVariant: "primary",
  },
};

export const Success: Story = {
  args: {
    date: "12 avril 2024",
    time: "16:45",
    author: "Sophie Martin",
    category: "Vente conclue",
    description: "Acte de vente signé avec acheteur",
    categoryVariant: "success",
  },
};

export const Warning: Story = {
  args: {
    date: "10 avril 2024",
    time: "11:20",
    author: "Luc Moreau",
    category: "Attention",
    description: "Diagnostic immobilier expirant dans 30 jours",
    categoryVariant: "warning",
  },
};

export const Error: Story = {
  args: {
    date: "9 avril 2024",
    time: "10:05",
    author: "Pierre Lefebvre",
    category: "Erreur",
    description: "Échec de la synchronisation - Vérifiez votre connexion",
    categoryVariant: "error",
  },
};

export const MultipleEntries: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <CardLog
        date="15 avril 2024"
        time="14:32"
        author="Marie Dupont"
        category="Création"
        description="Propriété créée"
        categoryVariant="default"
      />
      <CardLog
        date="14 avril 2024"
        time="09:15"
        author="Jean Bernard"
        category="Modification"
        description="Prix réduit à 450 000 €"
        categoryVariant="primary"
      />
      <CardLog
        date="12 avril 2024"
        time="16:45"
        author="Sophie Martin"
        category="Vente conclue"
        description="Acte signé"
        categoryVariant="success"
      />
    </div>
  ),
};

export const LongDescription: Story = {
  args: {
    date: "11 avril 2024",
    time: "13:28",
    author: "Isabelle Leclerc",
    category: "Commentaire",
    description:
      "Contact avec le propriétaire pour discuter des conditions de la vente et des modalités de transfert de propriété.",
    categoryVariant: "default",
  },
};

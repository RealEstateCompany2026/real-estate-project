import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LogEntry } from "../components/LogEntry";

const meta: Meta<typeof LogEntry> = {
  title: "Design System/Molecules/LogEntry",
  component: LogEntry,
};

export default meta;
type Story = StoryObj<typeof LogEntry>;

export const Default: Story = {
  args: {
    date: "12 avril 2024",
    time: "14:32",
    author: "Jean Dupont",
    category: "Modification",
    description: "Prix réduit à 450 000 €",
  },
};

export const Creation: Story = {
  args: {
    date: "10 avril 2024",
    time: "09:15",
    author: "Marie Martin",
    category: "Création",
    description: "Propriété créée - Appartement 75001 Paris",
  },
};

export const Deletion: Story = {
  args: {
    date: "8 avril 2024",
    time: "16:45",
    author: "Sophie Leclerc",
    category: "Suppression",
    description: "Propriété supprimée de la base de données",
  },
};

export const ViewChange: Story = {
  args: {
    date: "5 avril 2024",
    time: "11:20",
    author: "Luc Bernard",
    category: "Affichage",
    description: "Passage en mode privé",
  },
};

export const MultipleEntries: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <LogEntry
        date="12 avril 2024"
        time="14:32"
        author="Jean Dupont"
        category="Modification"
        description="Prix réduit à 450 000 €"
      />
      <LogEntry
        date="10 avril 2024"
        time="09:15"
        author="Marie Martin"
        category="Création"
        description="Propriété créée"
      />
      <LogEntry
        date="8 avril 2024"
        time="16:45"
        author="Sophie Leclerc"
        category="Suppression"
        description="Propriété supprimée"
      />
      <LogEntry
        date="5 avril 2024"
        time="11:20"
        author="Luc Bernard"
        category="Affichage"
        description="Passage en mode privé"
      />
    </div>
  ),
};

export const LongDescription: Story = {
  args: {
    date: "15 avril 2024",
    time: "10:45",
    author: "Isabelle Martin",
    category: "Commentaire",
    description:
      "Contact avec le propriétaire pour discuter des conditions de la vente et des modalités de paiement. Accord trouvé sur les délais.",
  },
};

export const MultipleLogs: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <LogEntry
          key={i}
          date={`${10 + i} avril 2024`}
          time={`${9 + i}:${30 + i * 5}`}
          author="Utilisateur système"
          category="Action"
          description={`Description de l'action ${i + 1}`}
        />
      ))}
    </div>
  ),
};

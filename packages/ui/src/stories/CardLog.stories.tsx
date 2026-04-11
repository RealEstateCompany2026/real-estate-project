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
    date: "12 fév. 2026",
    time: "12:56",
    author: "Auteur",
    category: "CATÉGORIE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
};

export const RealData: Story = {
  args: {
    date: "15 avr. 2026",
    time: "14:32",
    author: "Marie Dupont",
    category: "CRÉATION",
    description: "Propriété créée — Villa à Paris 75008, 120m², 3 chambres.",
  },
};

export const ShortDescription: Story = {
  args: {
    date: "10 mars 2026",
    time: "09:15",
    author: "Jean Bernard",
    category: "MODIFICATION",
    description: "Prix réduit de 50 000 € à 450 000 €.",
  },
};

export const MultipleEntries: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <CardLog
        date="15 avr. 2026"
        time="14:32"
        author="Marie Dupont"
        category="CRÉATION"
        description="Propriété créée — Villa à Paris 75008"
      />
      <CardLog
        date="14 avr. 2026"
        time="09:15"
        author="Jean Bernard"
        category="MODIFICATION"
        description="Prix réduit à 450 000 €"
      />
      <CardLog
        date="12 avr. 2026"
        time="16:45"
        author="Sophie Martin"
        category="VENTE"
        description="Acte de vente signé avec acheteur"
      />
    </div>
  ),
};

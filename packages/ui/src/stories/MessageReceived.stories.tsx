import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageReceived } from "../components/MessageReceived";

const meta: Meta<typeof MessageReceived> = {
  title: "Design System/Molecules/MessageReceived",
  component: MessageReceived,
};

export default meta;
type Story = StoryObj<typeof MessageReceived>;

export const Default: Story = {
  args: {
    author: "Marie Dupont",
    timestamp: "14:32",
    content: "Bonjour, je suis intéressée par cette propriété. Quand puis-je la visiter?",
  },
};

export const WithAvatar: Story = {
  args: {
    author: "Jean Bernard",
    timestamp: "09:15",
    content: "Pouvez-vous me confirmer les détails du bien?",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
  },
};

export const LongMessage: Story = {
  args: {
    author: "Sophie Martin",
    timestamp: "15:45",
    content:
      "Bonjour,\n\nJe suis très intéressée par votre propriété. J\'aimerai savoir si elle est disponible pour une visite ce week-end. Également, avez-vous des documents supplémentaires concernant l\'état général de la maison?\n\nCordialement",
  },
};

export const Short: Story = {
  args: {
    author: "Luc Moreau",
    timestamp: "11:20",
    content: "Ok merci!",
  },
};

export const Sequence: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <MessageReceived
        author="Marie Dupont"
        timestamp="14:30"
        content="Bonjour"
      />
      <MessageReceived
        author="Marie Dupont"
        timestamp="14:32"
        content="Je suis intéressée par cette propriété"
      />
      <MessageReceived
        author="Marie Dupont"
        timestamp="14:33"
        content="Quand puis-je la visiter?"
      />
    </div>
  ),
};

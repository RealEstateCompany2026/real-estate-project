import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageBubble } from "../components/MessageBubble";

const meta: Meta<typeof MessageBubble> = {
  title: "Design System/Molecules/MessageBubble",
  component: MessageBubble,
};

export default meta;
type Story = StoryObj<typeof MessageBubble>;

export const Default: Story = {
  args: {
    children: "Bonjour, pouvez-vous me donner plus de détails sur cette propriété ?",
    variant: "standard",
    align: "left",
  },
};

export const Sent: Story = {
  args: {
    children: "Bien sûr, c'est une belle maison avec jardin.",
    variant: "standard",
    align: "right",
  },
};

export const ChatStyle: Story = {
  args: {
    children: "D'accord, je vous appelle demain.",
    variant: "chat",
    align: "left",
  },
};

export const ChatSent: Story = {
  args: {
    children: "Parfait, à bientôt !",
    variant: "chat",
    align: "right",
  },
};

export const LongMessage: Story = {
  args: {
    children:
      "Nous avons le plaisir de vous présenter cette superbe propriété située dans le cœur historique de la ville. Elle offre une vue magnifique sur les jardins publics et dispose de tous les aménagements modernes.",
    variant: "standard",
    align: "left",
  },
};

export const WithLineBreaks: Story = {
  args: {
    children: (
      <div>
        <p>Voici les détails du bien :</p>
        <ul style={{ marginTop: 8 }}>
          <li>3 chambres</li>
          <li>120 m²</li>
          <li>Jardin privatif</li>
        </ul>
      </div>
    ),
    variant: "standard",
    align: "left",
  },
};

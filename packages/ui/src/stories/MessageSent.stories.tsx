import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageSent } from "../components/MessageSent";

const meta: Meta<typeof MessageSent> = {
  title: "Design System/Molecules/MessageSent",
  component: MessageSent,
};

export default meta;
type Story = StoryObj<typeof MessageSent>;

export const Default: Story = {
  args: {
    content: "Bonjour, cette propriété vous intéresse-t-elle?",
    timestamp: "14:32",
    status: "sent",
  },
};

export const Read: Story = {
  args: {
    content: "La visite est prévue pour demain à 14h.",
    timestamp: "09:15",
    status: "read",
  },
};

export const LongMessage: Story = {
  args: {
    content:
      "Voici les informations que vous m\'aviez demandées:\n- Surface: 120 m²\n- Chambres: 3\n- Année de construction: 1995\n- Diagnostic énergétique: D",
    timestamp: "15:45",
    status: "read",
  },
};

export const Short: Story = {
  args: {
    content: "À bientôt!",
    timestamp: "11:20",
    status: "sent",
  },
};

export const Sequence: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <MessageSent
        content="Bonjour!"
        timestamp="14:30"
        status="read"
      />
      <MessageSent
        content="Je vous contacte au sujet de la propriété"
        timestamp="14:31"
        status="read"
      />
      <MessageSent
        content="Avez-vous un créneau pour une visite?"
        timestamp="14:32"
        status="sent"
      />
    </div>
  ),
};

export const WithAttachment: Story = {
  args: {
    content: "Voici les photos de la propriété",
    timestamp: "16:00",
    status: "read",
  },
};

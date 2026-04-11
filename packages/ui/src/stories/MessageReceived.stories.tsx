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
    date: "le 12 fév 2026",
    time: "à 12:47",
    status: "none",
    showBadge: true,
    showArrow: true,
    children:
      "Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...",
  },
};

export const WithAttachment: Story = {
  args: {
    date: "le 12 fév 2026",
    time: "à 12:47",
    status: "none",
    showBadge: true,
    showArrow: true,
    attachments: [{ label: "Button title" }],
    children:
      "Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...",
  },
};

export const Success: Story = {
  args: {
    date: "le 15 mars 2026",
    time: "à 09:30",
    status: "success",
    showBadge: true,
    showArrow: true,
    children: "Message reçu et confirmé par le système.",
  },
};

export const Fail: Story = {
  args: {
    date: "le 10 jan 2026",
    time: "à 18:00",
    status: "fail",
    showBadge: true,
    showArrow: true,
    children: "Ce message a rencontré une erreur.",
  },
};

export const NoBadge: Story = {
  args: {
    date: "le 12 fév 2026",
    time: "à 12:47",
    showBadge: false,
    showArrow: false,
    children: "Message sans badge ni flèche.",
  },
};

export const Sequence: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <MessageReceived date="le 12 fév 2026" time="à 14:30">
        Bonjour
      </MessageReceived>
      <MessageReceived
        date="le 12 fév 2026"
        time="à 14:32"
        attachments={[{ label: "Mandat_vente.pdf" }]}
      >
        Je suis intéressée par cette propriété
      </MessageReceived>
      <MessageReceived date="le 12 fév 2026" time="à 14:33">
        Quand puis-je la visiter?
      </MessageReceived>
    </div>
  ),
};

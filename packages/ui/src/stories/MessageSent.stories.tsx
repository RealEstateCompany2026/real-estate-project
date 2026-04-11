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
    date: "le 12 fév 2026",
    time: "à 14:32",
    status: "none",
    showBadge: true,
    showArrow: true,
    children: "Bonjour, cette propriété vous intéresse-t-elle?",
  },
};

export const WithAttachment: Story = {
  args: {
    date: "le 12 fév 2026",
    time: "à 14:32",
    status: "none",
    showBadge: true,
    showArrow: true,
    attachments: [{ label: "Photos_propriété.zip" }],
    children: "Voici les photos de la propriété.",
  },
};

export const Success: Story = {
  args: {
    date: "le 15 mars 2026",
    time: "à 09:30",
    status: "success",
    showBadge: true,
    showArrow: true,
    children: "La visite est prévue pour demain à 14h.",
  },
};

export const Fail: Story = {
  args: {
    date: "le 10 jan 2026",
    time: "à 18:00",
    status: "fail",
    showBadge: true,
    showArrow: true,
    children: "Ce message n'a pas pu être envoyé.",
  },
};

export const Sequence: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <MessageSent date="le 12 fév 2026" time="à 14:30" status="success">
        Bonjour!
      </MessageSent>
      <MessageSent date="le 12 fév 2026" time="à 14:31" status="success">
        Je vous contacte au sujet de la propriété
      </MessageSent>
      <MessageSent
        date="le 12 fév 2026"
        time="à 14:32"
        attachments={[{ label: "Mandat.pdf" }]}
      >
        Avez-vous un créneau pour une visite?
      </MessageSent>
    </div>
  ),
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InlineMessage } from "../components/InlineMessage";

const meta: Meta<typeof InlineMessage> = {
  title: "Design System/Molecules/InlineMessage",
  component: InlineMessage,
  argTypes: {
    type: {
      control: "select",
      options: ["info", "warning", "error", "success"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InlineMessage>;

export const Info: Story = {
  args: {
    type: "info",
    message: "Cette propriété a été publiée il y a 3 jours.",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    message: "Attention: le diagnostic immobilier est expiré.",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "Erreur: Impossible de charger les données du client.",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    message: "Succès: La propriété a été sauvegardée.",
  },
};

export const LongMessage: Story = {
  args: {
    type: "info",
    message:
      "Cette propriété répond à vos critères de recherche et dispose de tous les documents requis pour une transaction rapide.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <InlineMessage
        type="info"
        message="Information: La synchronisation est en cours."
      />
      <InlineMessage
        type="warning"
        message="Attention: Veuillez vérifier votre connexion."
      />
      <InlineMessage
        type="error"
        message="Erreur: La sauvegarde a échoué."
      />
      <InlineMessage
        type="success"
        message="Succès: Tous les changements ont été sauvegardés."
      />
    </div>
  ),
};

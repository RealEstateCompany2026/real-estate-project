import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Snackbar } from "../components/Snackbar";
import { Check, Share2, Undo2 } from "lucide-react";

const meta: Meta<typeof Snackbar> = {
  title: "Design System/Molecules/Snackbar",
  component: Snackbar,
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Simple: Story = {
  args: {
    message: "Action effectuée avec succès",
  },
};

export const WithButton: Story = {
  args: {
    message: "Modification en cours...",
    buttonLabel: "Annuler",
    buttonIcon: Undo2,
    onButtonClick: () => console.log("Undo"),
  },
};

export const WithLink: Story = {
  args: {
    message: "Propriété partagée",
    linkLabel: "Voir",
    linkIcon: Share2,
    onLinkClick: () => console.log("View"),
  },
};

export const WithButtonAndIcon: Story = {
  args: {
    message: "Bien immobilier créé",
    buttonLabel: "Partager",
    buttonIcon: Share2,
    onButtonClick: () => console.log("Share"),
  },
};

export const WithButtonAndLink: Story = {
  args: {
    message: "Contrat sauvegardé",
    buttonLabel: "Annuler",
    buttonIcon: Undo2,
    onButtonClick: () => console.log("Undo"),
    linkLabel: "Détails",
    linkIcon: Check,
    onLinkClick: () => console.log("Details"),
  },
};

export const LongMessage: Story = {
  args: {
    message:
      "Votre demande a été envoyée au gestionnaire. Vous recevrez une notification dès qu'elle sera traitée.",
  },
};

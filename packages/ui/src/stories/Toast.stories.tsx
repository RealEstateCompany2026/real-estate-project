import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast, type ToastVariant } from "../components/Toast";

const meta: Meta<typeof Toast> = {
  title: "Design System/Molecules/Toast",
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    id: "toast-1",
    variant: "success" as ToastVariant,
    title: "Succès",
    description: "Le client a été créé avec succès.",
    persistent: true,
  },
};

export const Error: Story = {
  args: {
    id: "toast-2",
    variant: "error" as ToastVariant,
    title: "Erreur",
    description: "Une erreur est survenue lors de la sauvegarde.",
    persistent: true,
  },
};

export const Warning: Story = {
  args: {
    id: "toast-3",
    variant: "warning" as ToastVariant,
    title: "Attention",
    description: "Cet enregistrement sera supprimé définitivement.",
    persistent: true,
  },
};

export const Info: Story = {
  args: {
    id: "toast-4",
    variant: "info" as ToastVariant,
    title: "Information",
    description: "Synchronisation en cours avec vos données.",
    persistent: true,
  },
};

export const WithoutDescription: Story = {
  args: {
    id: "toast-5",
    variant: "success" as ToastVariant,
    title: "Propriété publiée",
    persistent: true,
  },
};

export const Auto Dismiss: Story = {
  args: {
    id: "toast-6",
    variant: "info" as ToastVariant,
    title: "Info temporaire",
    description: "Ce message disparaîtra après 5 secondes.",
    duration: 5000,
  },
};

export const LongMessage: Story = {
  args: {
    id: "toast-7",
    variant: "error" as ToastVariant,
    title: "Erreur de validation",
    description: "Veuillez vérifier que tous les champs requis sont remplis correctement avant de continuer.",
    persistent: true,
  },
};

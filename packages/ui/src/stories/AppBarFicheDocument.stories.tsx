import type { Meta, StoryObj } from "@storybook/react";
import { AppBarFicheDocument } from "../components/AppBarFicheDocument";

const meta: Meta<typeof AppBarFicheDocument> = {
  title: "Design System/Organisms/AppBarFicheDocument",
  component: AppBarFicheDocument,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Barre d'en-tête fiche document — back + nom document + contact + deal ID + badge statut + date.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppBarFicheDocument>;

export const EnAttente: Story = {
  args: {
    documentName: "Compromis de vente",
    contactName: "Nathalie DUFLOT",
    dealId: "55679201",
    status: "EN ATTENTE",
    date: "03 jan. 2027",
  },
};

export const Verifie: Story = {
  args: {
    documentName: "Diagnostic immobilier",
    contactName: "Pierre MARTIN",
    dealId: "44821093",
    status: "VÉRIFIÉ",
    date: "15 fév. 2027",
  },
};

export const Expire: Story = {
  args: {
    documentName: "Attestation d'assurance",
    contactName: "Jean DUPONT",
    status: "EXPIRÉ",
    date: "10 nov. 2026",
  },
};

export const SansContact: Story = {
  args: {
    documentName: "Plan cadastral",
    dealId: "33567890",
    status: "REÇU",
    date: "22 mar. 2027",
  },
};

export const Archive: Story = {
  args: {
    documentName: "Ancien bail locatif",
    contactName: "Marie LEFEVRE",
    dealId: "11223344",
    status: "ARCHIVÉ",
    date: "5 sep. 2025",
  },
};

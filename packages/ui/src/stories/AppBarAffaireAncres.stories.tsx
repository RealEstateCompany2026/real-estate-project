import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppBarAffaireAncres } from "../components/AppBarAffaireAncres";
import {
  FileText,
  Flag,
  Image,
  Inbox,
  DoorOpen,
  Heart,
  Landmark,
  Scale,
  Receipt,
  MessageSquare,
  Search,
  Home,
  Folder,
  FileText as FileDoc,
} from "lucide-react";

const meta: Meta<typeof AppBarAffaireAncres> = {
  title: "Design System/Organisms/AppBarAffaireAncres",
  component: AppBarAffaireAncres,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Barre de navigation metrics fiche affaire — ancres icon+text séparées par des dividers verticaux. 3 presets selon le type d'affaire : MV (Vente), MRA (Recherche Achat), MRL (Recherche Location).",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof AppBarAffaireAncres>;

/** Preset MV — Mandat de Vente */
const itemsMV = [
  { id: "mandat", label: "Mandat", icon: <FileText size={20} /> },
  { id: "activite", label: "Activité", icon: <Flag size={20} /> },
  { id: "annonce", label: "Annonce", icon: <Image size={20} /> },
  { id: "leads", label: "Leads", icon: <Inbox size={20} /> },
  { id: "visites", label: "Visites", icon: <DoorOpen size={20} /> },
  { id: "promesses", label: "Promesses", icon: <Heart size={20} /> },
  { id: "financement", label: "Financement", icon: <Landmark size={20} /> },
  { id: "notaire", label: "Notaire", icon: <Scale size={20} /> },
  { id: "budget", label: "Budget", icon: <Receipt size={20} /> },
  { id: "messages", label: "Messages", icon: <MessageSquare size={20} /> },
];

/** Preset MRA — Mandat de Recherche Achat */
const itemsMRA = [
  { id: "mandat", label: "Mandat", icon: <FileText size={20} /> },
  { id: "activite", label: "Activité", icon: <Flag size={20} /> },
  { id: "recherche", label: "Recherche", icon: <Search size={20} /> },
  { id: "biens", label: "Biens", icon: <Home size={20} /> },
  { id: "visites", label: "Visites", icon: <DoorOpen size={20} /> },
  { id: "promesse", label: "Promesse", icon: <Heart size={20} /> },
  { id: "financement", label: "Financement", icon: <Landmark size={20} /> },
  { id: "notaire", label: "Notaire", icon: <Scale size={20} /> },
  { id: "budget", label: "Budget", icon: <Receipt size={20} /> },
  { id: "messages", label: "Messages", icon: <MessageSquare size={20} /> },
];

/** Preset MRL — Mandat de Recherche Location */
const itemsMRL = [
  { id: "mandat", label: "Mandat", icon: <FileText size={20} /> },
  { id: "activite", label: "Activité", icon: <Flag size={20} /> },
  { id: "recherche", label: "Recherche", icon: <Search size={20} /> },
  { id: "biens", label: "Biens", icon: <Home size={20} /> },
  { id: "visites", label: "Visites", icon: <DoorOpen size={20} /> },
  { id: "dossier", label: "Dossier", icon: <Folder size={20} /> },
  { id: "bail", label: "Bail", icon: <FileDoc size={20} /> },
  { id: "budget", label: "Budget", icon: <Receipt size={20} /> },
  { id: "messages", label: "Messages", icon: <MessageSquare size={20} /> },
];

export const MandatVente: Story = {
  args: { items: itemsMV },
};

export const MandatRechercheAchat: Story = {
  args: { items: itemsMRA },
};

export const MandatRechercheLocation: Story = {
  args: { items: itemsMRL },
};

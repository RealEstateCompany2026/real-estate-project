import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SheetClientDetails } from "../components/SheetClientDetails";

const meta: Meta<typeof SheetClientDetails> = {
  title: "Design System/Molecules/SheetClientDetails",
  component: SheetClientDetails,
};

export default meta;
type Story = StoryObj<typeof SheetClientDetails>;

export const Default: Story = {
  args: {
    qualification: 75,
    engagement: 60,
    conversion: 80,
    reactivation: 45,
    suggestions: [
      {
        text: "Relancer M. Dupont sur son projet d'achat T3 dans le 8e arrondissement",
        actionLabel: "Programmer",
      },
      {
        text: "Proposer une estimation gratuite pour son bien actuel rue de Rivoli",
        actionLabel: "Envoyer",
      },
    ],
    recentLogs: [
      {
        date: "15 avr. 2026",
        time: "14:32",
        author: "Sophie Martin",
        category: "Appel",
        description: "Echange sur les criteres de recherche, budget revu a la hausse",
        badgeVariant: "success",
      },
      {
        date: "12 avr. 2026",
        time: "09:15",
        author: "Sophie Martin",
        category: "Email",
        description: "Envoi de 3 biens correspondant aux nouveaux criteres",
        badgeVariant: "information",
      },
      {
        date: "08 avr. 2026",
        time: "16:45",
        author: "Marc Leroy",
        category: "Visite",
        description: "Visite du T4 boulevard Haussmann — retour positif",
        badgeVariant: "default",
      },
    ],
  },
};

export const HighPerformer: Story = {
  args: {
    qualification: 95,
    engagement: 90,
    conversion: 88,
    reactivation: 85,
    suggestions: [
      {
        text: "Client fidele — proposer le programme neuf Cogedim a Saint-Germain-en-Laye",
        actionLabel: "Programmer",
      },
    ],
    recentLogs: [
      {
        date: "17 avr. 2026",
        time: "11:00",
        author: "Sophie Martin",
        category: "Signature",
        description: "Compromis signe pour le T2 rue du Bac",
        badgeVariant: "success",
      },
      {
        date: "14 avr. 2026",
        time: "10:30",
        author: "Sophie Martin",
        category: "Appel",
        description: "Confirmation du financement avec le courtier",
        badgeVariant: "success",
      },
    ],
  },
};

export const LowPerformer: Story = {
  args: {
    qualification: 30,
    engagement: 25,
    conversion: 20,
    reactivation: 15,
    suggestions: [
      {
        text: "Completer le profil : numero de telephone et budget manquants",
        actionLabel: "Completer",
      },
      {
        text: "Envoyer un email de reactivation avec les nouveautes du quartier",
        actionLabel: "Envoyer",
      },
    ],
    recentLogs: [
      {
        date: "02 mars 2026",
        time: "08:45",
        author: "Marc Leroy",
        category: "Email",
        description: "Email de relance envoye — pas de reponse",
        badgeVariant: "warning",
      },
    ],
  },
};

export const NoSuggestionsNoLogs: Story = {
  args: {
    qualification: 50,
    engagement: 40,
    conversion: 35,
    reactivation: 0,
  },
};

export const WithActions: Story = {
  args: {
    qualification: 70,
    engagement: 50,
    conversion: 65,
    reactivation: 40,
    suggestions: [
      {
        text: "Planifier une visite pour le bien repere avenue Foch",
        actionLabel: "Planifier",
      },
    ],
    recentLogs: [
      {
        date: "16 avr. 2026",
        time: "17:00",
        author: "Sophie Martin",
        category: "Note",
        description: "Le client souhaite un balcon et un parking en sous-sol",
        badgeVariant: "default",
      },
      {
        date: "10 avr. 2026",
        time: "14:20",
        author: "Marc Leroy",
        category: "Appel",
        description: "Premier contact telephonique, projet achat residence principale",
        badgeVariant: "information",
      },
    ],
    onViewFiche: () => console.log("Voir la Fiche"),
    onViewActions: () => console.log("Voir les actions"),
    onMessage: () => console.log("Message"),
    onCall: () => console.log("Appel"),
  },
};

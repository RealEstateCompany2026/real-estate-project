import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SheetBienDetails } from "../components/SheetBienDetails";

const meta: Meta<typeof SheetBienDetails> = {
  title: "Design System/Molecules/SheetBienDetails",
  component: SheetBienDetails,
};

export default meta;
type Story = StoryObj<typeof SheetBienDetails>;

export const Default: Story = {
  args: {
    bienType: "Appartement",
    surface: "85 m2",
    type: "T3",
    price: "450 000 EUR",
    location: "75008 Paris",
    dpe: "B",
    qualification: 75,
    entretien: 60,
    conversion: 80,
    suggestions: [
      {
        text: "Ce bien correspond au profil de 3 acquereurs actifs — envoyer les fiches",
        actionLabel: "Envoyer",
      },
      {
        text: "Photos a mettre a jour, dernier shooting il y a 8 mois",
        actionLabel: "Programmer",
      },
    ],
    recentLogs: [
      {
        date: "16 avr. 2026",
        time: "15:30",
        author: "Sophie Martin",
        category: "Visite",
        description: "Visite avec M. et Mme Bernard — retour tres positif, offre en cours",
        badgeVariant: "success",
      },
      {
        date: "14 avr. 2026",
        time: "10:00",
        author: "Marc Leroy",
        category: "Appel",
        description: "Appel proprietaire pour point mensuel sur les visites",
        badgeVariant: "information",
      },
      {
        date: "10 avr. 2026",
        time: "09:30",
        author: "Sophie Martin",
        category: "Email",
        description: "Diffusion annonce mise a jour sur SeLoger et LeBonCoin",
        badgeVariant: "default",
      },
    ],
  },
};

export const HighQuality: Story = {
  args: {
    bienType: "Maison",
    surface: "250 m2",
    type: "Villa",
    price: "1 800 000 EUR",
    location: "92100 Boulogne-Billancourt",
    dpe: "A",
    qualification: 95,
    entretien: 90,
    conversion: 88,
    suggestions: [
      {
        text: "Bien premium — organiser une visite privee pour les acquireurs VIP",
        actionLabel: "Organiser",
      },
    ],
    recentLogs: [
      {
        date: "17 avr. 2026",
        time: "11:00",
        author: "Sophie Martin",
        category: "Signature",
        description: "Offre acceptee par le vendeur, passage chez le notaire prevu",
        badgeVariant: "success",
      },
    ],
  },
};

export const LowQuality: Story = {
  args: {
    bienType: "Studio",
    surface: "25 m2",
    type: "Studio",
    price: "250 000 EUR",
    location: "75005 Paris",
    dpe: "G",
    qualification: 30,
    entretien: 20,
    conversion: 35,
    suggestions: [
      {
        text: "Bien avec DPE G — informer le proprietaire de l'obligation de renovation 2028",
        actionLabel: "Informer",
      },
      {
        text: "Aucune visite depuis 45 jours — baisser le prix de 5% recommande",
        actionLabel: "Proposer",
      },
    ],
    recentLogs: [
      {
        date: "01 mars 2026",
        time: "14:00",
        author: "Marc Leroy",
        category: "Email",
        description: "Relance proprietaire sur la baisse de prix — en attente de retour",
        badgeVariant: "warning",
      },
    ],
  },
};

export const NoSuggestionsNoLogs: Story = {
  args: {
    bienType: "Duplex",
    surface: "120 m2",
    type: "T4",
    price: "650 000 EUR",
    location: "75011 Paris",
    dpe: "D",
    qualification: 55,
    entretien: 50,
    conversion: 60,
  },
};

export const WithActions: Story = {
  args: {
    bienType: "Commerce",
    surface: "150 m2",
    type: "Local commercial",
    price: "400 000 EUR",
    location: "75001 Paris",
    dpe: "C",
    qualification: 65,
    entretien: 55,
    conversion: 70,
    suggestions: [
      {
        text: "3 demandes de visite en attente cette semaine",
        actionLabel: "Planifier",
      },
    ],
    recentLogs: [
      {
        date: "15 avr. 2026",
        time: "16:00",
        author: "Sophie Martin",
        category: "Visite",
        description: "Visite avec la SCI Investimmo — interesse par un bail 3/6/9",
        badgeVariant: "information",
      },
      {
        date: "12 avr. 2026",
        time: "11:30",
        author: "Marc Leroy",
        category: "Note",
        description: "Proprietaire confirme travaux de facade termines",
        badgeVariant: "success",
      },
    ],
    onViewFiche: () => console.log("Voir la Fiche"),
    onViewActions: () => console.log("Voir les actions"),
    onMessage: () => console.log("Message"),
    onCall: () => console.log("Appel"),
  },
};

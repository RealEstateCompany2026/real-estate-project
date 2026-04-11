import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppBarCategory } from "../components/AppBarCategory";

const meta: Meta<typeof AppBarCategory> = {
  title: "Design System/Organisms/AppBarCategory",
  component: AppBarCategory,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Barre d'en-tête des pages catégorie (listes) — titre rubrique + dropdown filtre (ouvre un Menu) + bouton ajouter + bouton recherche.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppBarCategory>;

const clientFilters = [
  { label: "Tous les clients" },
  { label: "Vendeurs" },
  { label: "Acquéreurs" },
  { label: "Locataires" },
  { label: "Propriétaires" },
  { label: "Archivés" },
];

const bienFilters = [
  { label: "Tous les biens" },
  { label: "En vente" },
  { label: "En location" },
  { label: "Vendus" },
  { label: "Loués" },
  { label: "Archivés" },
];

const affaireFilters = [
  { label: "Toutes les affaires" },
  { label: "Vente en cours" },
  { label: "Recherche en cours" },
  { label: "Location en cours" },
  { label: "Conclues" },
  { label: "Annulées" },
];

export const Clients: Story = {
  args: {
    title: "Clients",
    filterLabel: "Tous les clients",
    filterItems: clientFilters,
  },
};

export const Biens: Story = {
  args: {
    title: "Biens",
    filterLabel: "Tous les biens",
    filterItems: bienFilters,
  },
};

export const Affaires: Story = {
  args: {
    title: "Affaires",
    filterLabel: "Toutes les affaires",
    filterItems: affaireFilters,
  },
};

export const SansFiltres: Story = {
  args: {
    title: "Automatisations",
    filterLabel: "Toutes",
    filterItems: [],
  },
};

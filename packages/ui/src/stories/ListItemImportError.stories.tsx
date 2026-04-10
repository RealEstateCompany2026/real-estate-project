import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListItemImportError, type ListItemImportErrorItem } from "../components/ListItemImportError";

const meta: Meta<typeof ListItemImportError> = {
  title: "Design System/Molecules/ListItemImportError",
  component: ListItemImportError,
};

export default meta;
type Story = StoryObj<typeof ListItemImportError>;

const mockItems: ListItemImportErrorItem[] = [
  {
    id: "1",
    filename: "clients_export.csv",
    error: "Format de fichier invalide",
  },
  {
    id: "2",
    filename: "proprietes_mai_2024.xlsx",
    error: "Colonnes requises manquantes",
  },
];

export const Default: Story = {
  args: {
    items: mockItems,
  },
};

export const SingleItem: Story = {
  args: {
    items: [mockItems[0]],
  },
};

export const MultipleErrors: Story = {
  args: {
    items: [
      { id: "1", filename: "clients.csv", error: "Format invalide" },
      { id: "2", filename: "biens.xlsx", error: "Colonnes manquantes" },
      { id: "3", filename: "affaires.csv", error: "Encodage non supporté" },
      { id: "4", filename: "data.xlsx", error: "Données corrompues" },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

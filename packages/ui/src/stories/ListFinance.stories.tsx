import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListFinance, type ListFinanceItem } from "../components/ListFinance";

const meta: Meta<typeof ListFinance> = {
  title: "Design System/Molecules/ListFinance",
  component: ListFinance,
};

export default meta;
type Story = StoryObj<typeof ListFinance>;

const mockItems: ListFinanceItem[] = [
  {
    id: "1",
    name: "Crédit immobilier",
    status: "COMPLET",
    notesCount: 0,
  },
  {
    id: "2",
    name: "Assurance emprunteur",
    status: "INCOMPLET",
    notesCount: 2,
  },
  {
    id: "3",
    name: "Apport personnel",
    status: "EN_ATTENTE",
    notesCount: 1,
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

export const ManyItems: Story = {
  args: {
    items: [
      { id: "1", name: "Crédit immobilier", status: "COMPLET", notesCount: 0 },
      { id: "2", name: "Assurance emprunteur", status: "INCOMPLET", notesCount: 2 },
      { id: "3", name: "Apport personnel", status: "EN_ATTENTE", notesCount: 1 },
      { id: "4", name: "Frais de notaire", status: "COMPLET", notesCount: 3 },
      { id: "5", name: "Garantie bancaire", status: "COMPLET", notesCount: 0 },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

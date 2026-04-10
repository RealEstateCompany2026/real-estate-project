import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FinanceItem } from "../components/FinanceItem";

const meta: Meta<typeof FinanceItem> = {
  title: "Design System/Molecules/FinanceItem",
  component: FinanceItem,
};

export default meta;
type Story = StoryObj<typeof FinanceItem>;

export const Complete: Story = {
  args: {
    name: "Crédit immobilier",
    status: "COMPLET",
    notesCount: 0,
  },
};

export const Incomplete: Story = {
  args: {
    name: "Assurance emprunteur",
    status: "INCOMPLET",
    notesCount: 2,
  },
};

export const Pending: Story = {
  args: {
    name: "Apport personnel",
    status: "EN_ATTENTE",
    notesCount: 1,
  },
};

export const WithNotes: Story = {
  args: {
    name: "Financement immobilier",
    status: "COMPLET",
    notesCount: 5,
    onViewNotes: () => console.log("Voir les notes"),
  },
};

export const MultipleItems: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <FinanceItem
        name="Crédit immobilier"
        status="COMPLET"
        notesCount={0}
      />
      <FinanceItem
        name="Assurance emprunteur"
        status="INCOMPLET"
        notesCount={2}
      />
      <FinanceItem
        name="Apport personnel"
        status="EN_ATTENTE"
        notesCount={1}
      />
      <FinanceItem
        name="Frais de notaire"
        status="COMPLET"
        notesCount={3}
      />
    </div>
  ),
};

export const LongName: Story = {
  args: {
    name: "Financement alternatif avec garantie hypothécaire",
    status: "EN_ATTENTE",
    notesCount: 4,
  },
};

export const NoNotes: Story = {
  args: {
    name: "Garantie bancaire",
    status: "COMPLET",
    notesCount: 0,
  },
};

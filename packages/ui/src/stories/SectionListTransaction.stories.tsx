import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SectionListTransaction } from "../components/SectionListTransaction";

const meta: Meta<typeof SectionListTransaction> = {
  title: "Design System/Molecules/SectionListTransaction",
  component: SectionListTransaction,
};

export default meta;
type Story = StoryObj<typeof SectionListTransaction>;

export const Default: Story = {
  args: {
    title: "Vente Villa Boulogne",
    date: "10 avril 2024",
    amount: "1 200 000 €",
    status: "COMPLETEE",
    onClick: () => console.log("Transaction cliquée"),
  },
};

export const Pending: Story = {
  args: {
    title: "Achat Appartement Paris",
    date: "15 avril 2024",
    amount: "850 000 €",
    status: "EN_COURS",
  },
};

export const Completed: Story = {
  args: {
    title: "Location Studio Marais",
    date: "5 avril 2024",
    amount: "1 200 €/mois",
    status: "COMPLETEE",
  },
};

export const Failed: Story = {
  args: {
    title: "Vente Penthouse",
    date: "1 avril 2024",
    amount: "2 500 000 €",
    status: "ANNULEE",
  },
};

export const SmallTransaction: Story = {
  args: {
    title: "Location Garage",
    date: "20 avril 2024",
    amount: "150 €/mois",
    status: "EN_COURS",
    onClick: () => alert("Détails de la location"),
  },
};

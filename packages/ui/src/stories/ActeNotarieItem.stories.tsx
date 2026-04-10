import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ActeNotarieItem } from "../components/ActeNotarieItem";

const meta: Meta<typeof ActeNotarieItem> = {
  title: "Design System/Molecules/ActeNotarieItem",
  component: ActeNotarieItem,
};

export default meta;
type Story = StoryObj<typeof ActeNotarieItem>;

export const Scheduled: Story = {
  args: {
    notaireName: "Maître Bernard Lefebvre",
    dateTime: "15 mai 2024 - 14:00",
    status: "PROGRAMME",
  },
};

export const Pending: Story = {
  args: {
    notaireName: "Maître Sophie Martin",
    dateTime: "10 mai 2024 - Attente signature",
    status: "EN_ATTENTE",
  },
};

export const Signed: Story = {
  args: {
    notaireName: "Maître Marie Dupont",
    dateTime: "5 mai 2024 - 15:30",
    status: "SIGNE",
  },
};

export const WithAISuggestions: Story = {
  args: {
    notaireName: "Maître Luc Moreau",
    dateTime: "20 mai 2024 - 10:00",
    status: "PROGRAMME",
    aiSuggestions: 3,
  },
};

export const WithCallback: Story = {
  args: {
    notaireName: "Maître Jean Leclerc",
    dateTime: "25 mai 2024 - 11:30",
    status: "EN_ATTENTE",
    onViewNotes: () => console.log("Afficher les notes"),
  },
};

export const MultipleItems: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <ActeNotarieItem
        notaireName="Maître Bernard Lefebvre"
        dateTime="15 mai 2024 - 14:00"
        status="PROGRAMME"
      />
      <ActeNotarieItem
        notaireName="Maître Sophie Martin"
        dateTime="10 mai 2024 - En attente"
        status="EN_ATTENTE"
        aiSuggestions={2}
      />
      <ActeNotarieItem
        notaireName="Maître Marie Dupont"
        dateTime="5 mai 2024 - 15:30"
        status="SIGNE"
      />
    </div>
  ),
};

export const WithLongName: Story = {
  args: {
    notaireName: "Maître Jean-Pierre Dubois-Martin",
    dateTime: "30 juin 2024 - 09:00",
    status: "PROGRAMME",
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LogHistory } from "../components/LogHistory";
import { LogEntryProps } from "../components/LogEntry";

const meta: Meta<typeof LogHistory> = {
  title: "Design System/Organisms/LogHistory",
  component: LogHistory,
};
export default meta;
type Story = StoryObj<typeof LogHistory>;

const sampleLogs: LogEntryProps[] = [
  {
    timestamp: "10 avr 2026, 14:32",
    action: "Bien créé",
    details: "BIEN-2026-4521 - 42 rue de la Paix, Paris",
  },
  {
    timestamp: "10 avr 2026, 13:15",
    action: "Client qualifié",
    details: "Dupont, Jean-François - Qualification à 85%",
  },
  {
    timestamp: "10 avr 2026, 11:42",
    action: "Affaire fermée",
    details: "AFF-2026-0847 - Transaction complétée",
  },
  {
    timestamp: "9 avr 2026, 16:28",
    action: "Document téléchargé",
    details: "Mandat de vente - PDF (2.3 MB)",
  },
  {
    timestamp: "9 avr 2026, 10:00",
    action: "Communication envoyée",
    details: "Email à Martin, Sophie - Proposition de biens",
  },
];

export const Default: Story = {
  args: {
    logs: sampleLogs,
  },
};

export const WithMaxHeight: Story = {
  args: {
    logs: sampleLogs,
    maxHeight: "300px",
  },
};

export const SingleEntry: Story = {
  args: {
    logs: [
      {
        timestamp: "10 avr 2026, 14:32",
        action: "Bien créé",
        details: "BIEN-2026-4521 - 42 rue de la Paix, Paris",
      },
    ],
  },
};

export const ManyEntries: Story = {
  args: {
    logs: [
      ...sampleLogs,
      {
        timestamp: "8 avr 2026, 15:45",
        action: "Note ajoutée",
        details: "Client très intéressé par les propriétés avec piscine",
      },
      {
        timestamp: "8 avr 2026, 09:30",
        action: "Visite programmée",
        details: "Visite de la propriété BIEN-2026-5627",
      },
      {
        timestamp: "7 avr 2026, 17:12",
        action: "Modification de bien",
        details: "Mise à jour du prix de BIEN-2026-3159",
      },
    ],
    maxHeight: "400px",
  },
};

export const Empty: Story = {
  args: {
    logs: [],
    emptyMessage: "Aucun historique disponible",
  },
};

export const CustomEmptyMessage: Story = {
  args: {
    logs: [],
    emptyMessage: "Les actions futures apparaîtront ici",
  },
};

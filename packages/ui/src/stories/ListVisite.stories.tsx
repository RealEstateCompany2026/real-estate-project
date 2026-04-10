import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListVisite, type ListVisiteItem } from "../components/ListVisite";

const meta: Meta<typeof ListVisite> = {
  title: "Design System/Molecules/ListVisite",
  component: ListVisite,
};

export default meta;
type Story = StoryObj<typeof ListVisite>;

const mockItems: ListVisiteItem[] = [
  {
    id: "1",
    clientName: "Martin Dupont",
    dateTime: "15 avril 2024 - 14:00",
    status: "CONFIRMEE",
    notes: 2,
  },
  {
    id: "2",
    clientName: "Sophie Bernard",
    dateTime: "14 avril 2024 - 10:30",
    status: "EN_ATTENTE",
    notes: 0,
  },
  {
    id: "3",
    clientName: "Luc Moreau",
    dateTime: "12 avril 2024 - 15:00",
    status: "EFFECTUEE",
    notes: 3,
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
      { id: "1", clientName: "Client 1", dateTime: "15 avril 2024 - 14:00", status: "CONFIRMEE", notes: 2 },
      { id: "2", clientName: "Client 2", dateTime: "14 avril 2024 - 10:30", status: "EN_ATTENTE", notes: 0 },
      { id: "3", clientName: "Client 3", dateTime: "12 avril 2024 - 15:00", status: "EFFECTUEE", notes: 3 },
      { id: "4", clientName: "Client 4", dateTime: "10 avril 2024 - 11:00", status: "CONFIRMEE", notes: 1 },
      { id: "5", clientName: "Client 5", dateTime: "8 avril 2024 - 16:00", status: "EFFECTUEE", notes: 4 },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

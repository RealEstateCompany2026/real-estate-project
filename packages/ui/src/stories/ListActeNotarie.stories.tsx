import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListActeNotarie, type ListActeNotarieItem } from "../components/ListActeNotarie";

const meta: Meta<typeof ListActeNotarie> = {
  title: "Design System/Molecules/ListActeNotarie",
  component: ListActeNotarie,
};

export default meta;
type Story = StoryObj<typeof ListActeNotarie>;

const mockItems: ListActeNotarieItem[] = [
  {
    id: "1",
    notaireName: "Maître Bernard Lefebvre",
    dateTime: "15 mai 2024 - 14:00",
    status: "PROGRAMME",
  },
  {
    id: "2",
    notaireName: "Maître Sophie Martin",
    dateTime: "10 mai 2024 - En attente",
    status: "EN_ATTENTE",
    aiSuggestions: 2,
  },
  {
    id: "3",
    notaireName: "Maître Marie Dupont",
    dateTime: "5 mai 2024 - 15:30",
    status: "SIGNE",
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

export const WithCallback: Story = {
  args: {
    items: mockItems,
    onViewNotes: (item) => console.log("Voir notes pour:", item.notaireName),
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      {
        id: "1",
        notaireName: "Maître Jean Leclerc",
        dateTime: "20 mai 2024 - 10:00",
        status: "PROGRAMME",
      },
      {
        id: "2",
        notaireName: "Maître Isabelle Moreau",
        dateTime: "18 mai 2024 - 09:30",
        status: "PROGRAMME",
        aiSuggestions: 1,
      },
      {
        id: "3",
        notaireName: "Maître Luc Bernard",
        dateTime: "15 mai 2024 - En attente",
        status: "EN_ATTENTE",
      },
      {
        id: "4",
        notaireName: "Maître Pierre Duvall",
        dateTime: "12 mai 2024 - 14:15",
        status: "EN_ATTENTE",
        aiSuggestions: 3,
      },
      {
        id: "5",
        notaireName: "Maître Sophie Dubois",
        dateTime: "10 mai 2024 - 11:00",
        status: "SIGNE",
      },
      {
        id: "6",
        notaireName: "Maître Catherine Lefèvre",
        dateTime: "5 mai 2024 - 15:30",
        status: "SIGNE",
      },
    ],
  },
};

export const AllStatuses: Story = {
  args: {
    items: [
      {
        id: "prog",
        notaireName: "Maître Bernard Lefebvre",
        dateTime: "15 mai 2024 - 14:00",
        status: "PROGRAMME",
      },
      {
        id: "wait",
        notaireName: "Maître Sophie Martin",
        dateTime: "10 mai 2024 - En attente",
        status: "EN_ATTENTE",
        aiSuggestions: 2,
      },
      {
        id: "signed",
        notaireName: "Maître Marie Dupont",
        dateTime: "5 mai 2024 - 15:30",
        status: "SIGNE",
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

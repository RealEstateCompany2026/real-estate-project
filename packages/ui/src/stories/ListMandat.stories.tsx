import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListMandat, type ListMandatItem } from "../components/ListMandat";

const meta: Meta<typeof ListMandat> = {
  title: "Design System/Molecules/ListMandat",
  component: ListMandat,
};

export default meta;
type Story = StoryObj<typeof ListMandat>;

const mockItems: ListMandatItem[] = [
  {
    id: "1",
    title: "Mandat de vente - Villa à Boulogne",
    type: "VENTE",
    status: "ACTIF",
    expiryDate: "15 juin 2024",
  },
  {
    id: "2",
    title: "Mandat d'achat - Appartement Paris",
    type: "ACHAT",
    status: "ACTIF",
    expiryDate: "30 mai 2024",
  },
  {
    id: "3",
    title: "Mandat de location - Studio Marais",
    type: "LOCATION",
    status: "EXPIRE",
    expiryDate: "10 avril 2024",
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
      { id: "1", title: "Mandat 1", type: "VENTE", status: "ACTIF", expiryDate: "15 juin 2024" },
      { id: "2", title: "Mandat 2", type: "ACHAT", status: "ACTIF", expiryDate: "30 mai 2024" },
      { id: "3", title: "Mandat 3", type: "LOCATION", status: "ACTIF", expiryDate: "20 juin 2024" },
      { id: "4", title: "Mandat 4", type: "VENTE", status: "EXPIRE", expiryDate: "10 avril 2024" },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

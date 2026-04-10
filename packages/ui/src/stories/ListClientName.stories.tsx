import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListClientName, type ListClientNameItem } from "../components/ListClientName";

const meta: Meta<typeof ListClientName> = {
  title: "Design System/Molecules/ListClientName",
  component: ListClientName,
};

export default meta;
type Story = StoryObj<typeof ListClientName>;

const mockItems: ListClientNameItem[] = [
  {
    id: "1",
    name: "Martin Dupont",
    role: "Vendeur",
  },
  {
    id: "2",
    name: "Sophie Bernard",
    role: "Acheteur",
  },
  {
    id: "3",
    name: "Luc Moreau",
    role: "Investisseur",
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
      { id: "1", name: "Jean Dupont", role: "Vendeur" },
      { id: "2", name: "Marie Martin", role: "Acheteur" },
      { id: "3", name: "Sophie Leclerc", role: "Vendeur" },
      { id: "4", name: "Luc Bernard", role: "Acheteur" },
      { id: "5", name: "Isabelle Moreau", role: "Investisseur" },
      { id: "6", name: "Pierre Duvall", role: "Vendeur" },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

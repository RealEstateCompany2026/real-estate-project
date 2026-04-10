import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListPromesse, type ListPromesseItem } from "../components/ListPromesse";

const meta: Meta<typeof ListPromesse> = {
  title: "Design System/Molecules/ListPromesse",
  component: ListPromesse,
};

export default meta;
type Story = StoryObj<typeof ListPromesse>;

const mockItems: ListPromesseItem[] = [
  {
    id: "1",
    title: "Promesse de vente - Dupont",
    date: "10 avril 2024",
    status: "EN_COURS",
  },
  {
    id: "2",
    title: "Promesse d'achat - Martin",
    date: "8 avril 2024",
    status: "SIGNEE",
  },
  {
    id: "3",
    title: "Promesse suspendue - Leclerc",
    date: "5 avril 2024",
    status: "SUSPENDUE",
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
      { id: "1", title: "Promesse 1", date: "10 avril 2024", status: "EN_COURS" },
      { id: "2", title: "Promesse 2", date: "8 avril 2024", status: "SIGNEE" },
      { id: "3", title: "Promesse 3", date: "5 avril 2024", status: "SUSPENDUE" },
      { id: "4", title: "Promesse 4", date: "1 avril 2024", status: "EN_COURS" },
      { id: "5", title: "Promesse 5", date: "28 mars 2024", status: "SIGNEE" },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

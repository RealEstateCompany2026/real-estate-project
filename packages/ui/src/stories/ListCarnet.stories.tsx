import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListCarnet, type ListCarnetItem } from "../components/ListCarnet";

const meta: Meta<typeof ListCarnet> = {
  title: "Design System/Molecules/ListCarnet",
  component: ListCarnet,
};

export default meta;
type Story = StoryObj<typeof ListCarnet>;

const mockItems: ListCarnetItem[] = [
  {
    id: "1",
    title: "Carnets d'adresses - Clients",
    count: 145,
  },
  {
    id: "2",
    title: "Contacts notaires",
    count: 32,
  },
  {
    id: "3",
    title: "Fournisseurs",
    count: 18,
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
    items: Array.from({ length: 8 }).map((_, i) => ({
      id: `${i}`,
      title: `Carnet ${i + 1}`,
      count: Math.floor(Math.random() * 200) + 10,
    })),
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

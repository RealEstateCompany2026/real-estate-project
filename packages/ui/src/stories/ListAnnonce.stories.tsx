import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListAnnonce, type ListAnnonceItem } from "../components/ListAnnonce";

const meta: Meta<typeof ListAnnonce> = {
  title: "Design System/Molecules/ListAnnonce",
  component: ListAnnonce,
};

export default meta;
type Story = StoryObj<typeof ListAnnonce>;

const mockItems: ListAnnonceItem[] = [
  {
    id: "1",
    title: "Appartement 3 pièces - Paris 8ème",
    price: "850 000 €",
    status: "PUBLIEE",
  },
  {
    id: "2",
    title: "Maison 5 pièces - Boulogne",
    price: "1 200 000 €",
    status: "BROUILLON",
  },
  {
    id: "3",
    title: "Studio - Marais",
    price: "450 000 €",
    status: "ARCHIVEE",
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
    items: Array.from({ length: 10 }).map((_, i) => ({
      id: `${i}`,
      title: `Propriété ${i + 1}`,
      price: `${400000 + i * 50000} €`,
      status: ["PUBLIEE", "BROUILLON", "ARCHIVEE"][i % 3] as any,
    })),
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

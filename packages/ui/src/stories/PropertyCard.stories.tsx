import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PropertyCard } from "../components/PropertyCard";

const meta: Meta<typeof PropertyCard> = {
  title: "Design System/Molecules/PropertyCard",
  component: PropertyCard,
};
export default meta;
type Story = StoryObj<typeof PropertyCard>;

export const AgentView: Story = {
  args: {
    variant: "agent",
    property: {
      address: "123 Rue de la Paix, Paris 75001",
      maintenanceLogs: [
        { id: "1", category: "Plumbing", description: "Fixed pipe leak", amount: 350 },
        { id: "2", category: "Electrical", description: "Rewired kitchen", amount: 1200 },
      ],
      documents: [
        { id: "1", title: "Deed of Sale", url: "#" },
        { id: "2", title: "Insurance Certificate", url: "#" },
      ],
      triggers: [
        { id: "1", type: "Maintenance Due", description: "Annual inspection needed" },
      ],
      estimatedValue: 750000,
    },
  },
};

export const OwnerView: Story = {
  args: {
    variant: "owner",
    property: {
      address: "456 Avenue des Champs, Paris 75008",
      maintenanceLogs: [
        { id: "1", category: "Cleaning", description: "Professional cleaning", amount: 200 },
      ],
      documents: [
        { id: "1", title: "Tax Certificate", url: "#" },
      ],
      triggers: [],
      estimatedValue: 1200000,
    },
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListClient } from "../components/ListClient";

const meta: Meta<typeof ListClient> = {
  title: "Design System/Organisms/ListClient",
  component: ListClient,
};
export default meta;
type Story = StoryObj<typeof ListClient>;

export const Default: Story = {
  args: {
    firstName: "Jean-Christophe",
    lastName: "LEMARCHAND",
    badges: [
      { label: "VENDEUR", variant: "default" },
      { label: "ACQUÉREUR", variant: "default" },
    ],
    kpis: {
      qualification: 64,
      engagement: 82,
      conversion: 24,
      reactivation: 49,
    },
    aiSuggestions: 0,
  },
};

export const WithAiSuggestions: Story = {
  args: {
    firstName: "Marie",
    lastName: "DUPONT",
    badges: [
      { label: "VENDEUR", variant: "default" },
    ],
    kpis: {
      qualification: 92,
      engagement: 78,
      conversion: 56,
      reactivation: 34,
    },
    aiSuggestions: 3,
  },
};

export const LowScores: Story = {
  args: {
    firstName: "Pierre",
    lastName: "MARTIN",
    badges: [
      { label: "ACQUÉREUR", variant: "default" },
    ],
    kpis: {
      qualification: 18,
      engagement: 12,
      conversion: 8,
      reactivation: 22,
    },
    aiSuggestions: 4,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <ListClient
        firstName="Jean-Christophe"
        lastName="LEMARCHAND"
        badges={[
          { label: "VENDEUR", variant: "default" },
          { label: "ACQUÉREUR", variant: "default" },
        ]}
        kpis={{ qualification: 64, engagement: 82, conversion: 24, reactivation: 49 }}
        aiSuggestions={0}
      />
      <ListClient
        firstName="Marie"
        lastName="DUPONT"
        badges={[{ label: "VENDEUR", variant: "default" }]}
        kpis={{ qualification: 92, engagement: 78, conversion: 56, reactivation: 34 }}
        aiSuggestions={3}
      />
      <ListClient
        firstName="Pierre"
        lastName="MARTIN"
        badges={[{ label: "ACQUÉREUR", variant: "default" }]}
        kpis={{ qualification: 18, engagement: 12, conversion: 8, reactivation: 22 }}
        aiSuggestions={4}
      />
    </div>
  ),
};

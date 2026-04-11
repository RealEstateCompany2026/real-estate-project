import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CardClient } from "../components/CardClient";

const meta: Meta<typeof CardClient> = {
  title: "Design System/Organisms/CardClient",
  component: CardClient,
};
export default meta;
type Story = StoryObj<typeof CardClient>;

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
    aiSuggestions: 2,
  },
};

export const WithHighScores: Story = {
  args: {
    firstName: "Marie",
    lastName: "DUPONT",
    badges: [{ label: "VENDEUR", variant: "default" }],
    kpis: {
      qualification: 92,
      engagement: 88,
      conversion: 76,
      reactivation: 81,
    },
    aiSuggestions: 0,
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <CardClient
        firstName="Jean-Christophe"
        lastName="LEMARCHAND"
        badges={[
          { label: "VENDEUR", variant: "default" },
          { label: "ACQUÉREUR", variant: "default" },
        ]}
        kpis={{ qualification: 64, engagement: 82, conversion: 24, reactivation: 49 }}
        aiSuggestions={2}
      />
      <CardClient
        firstName="Marie"
        lastName="DUPONT"
        badges={[{ label: "VENDEUR", variant: "default" }]}
        kpis={{ qualification: 92, engagement: 88, conversion: 76, reactivation: 81 }}
        aiSuggestions={0}
      />
    </div>
  ),
};

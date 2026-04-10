import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppBarFicheClient } from "../components/AppBarFicheClient";

const meta: Meta<typeof AppBarFicheClient> = {
  title: "Design System/Organisms/AppBarFicheClient",
  component: AppBarFicheClient,
};
export default meta;
type Story = StoryObj<typeof AppBarFicheClient>;

export const Default: Story = {
  args: {
    clientName: "Dupont, Jean-François",
    clientEmail: "jean-francois.dupont@email.fr",
    clientPhone: "+33 6 12 34 56 78",
    favoriteCount: 5,
    businessCount: 2,
    aiSuggestions: 3,
    onBack: () => console.log("Back clicked"),
  },
};

export const HighEngagement: Story = {
  args: {
    clientName: "Martin, Sophie",
    clientEmail: "sophie.martin@email.fr",
    clientPhone: "+33 6 98 76 54 32",
    favoriteCount: 12,
    businessCount: 7,
    aiSuggestions: 5,
    onBack: () => console.log("Back clicked"),
  },
};

export const NewClient: Story = {
  args: {
    clientName: "Rousseau, Marie",
    clientEmail: "marie.rousseau@email.fr",
    clientPhone: "+33 6 55 44 33 22",
    favoriteCount: 0,
    businessCount: 0,
    aiSuggestions: 1,
    onBack: () => console.log("Back clicked"),
  },
};

export const WithoutPhone: Story = {
  args: {
    clientName: "Bernard, Pierre",
    clientEmail: "pierre.bernard@email.fr",
    clientPhone: undefined,
    favoriteCount: 3,
    businessCount: 1,
    aiSuggestions: 2,
    onBack: () => console.log("Back clicked"),
  },
};

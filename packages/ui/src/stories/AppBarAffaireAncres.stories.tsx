import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppBarAffaireAncres } from "../components/AppBarAffaireAncres";

const meta: Meta<typeof AppBarAffaireAncres> = {
  title: "Design System/Organisms/AppBarAffaireAncres",
  component: AppBarAffaireAncres,
};
export default meta;
type Story = StoryObj<typeof AppBarAffaireAncres>;

export const Default: Story = {
  args: {
    affaireId: "AFF-2026-0847",
    onBack: () => console.log("Back clicked"),
  },
};

export const WithDetailedId: Story = {
  args: {
    affaireId: "AFFAIRE-2026-001247-DUPONT",
    onBack: () => console.log("Back clicked"),
  },
};

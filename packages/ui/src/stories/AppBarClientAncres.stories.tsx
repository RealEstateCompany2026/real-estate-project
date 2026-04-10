import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppBarClientAncres } from "../components/AppBarClientAncres";

const meta: Meta<typeof AppBarClientAncres> = {
  title: "Design System/Organisms/AppBarClientAncres",
  component: AppBarClientAncres,
};
export default meta;
type Story = StoryObj<typeof AppBarClientAncres>;

export const Default: Story = {
  args: {
    clientId: "CLI-2026-1842",
    clientName: "Dupont, Jean-François",
    onBack: () => console.log("Back clicked"),
  },
};

export const WithLongName: Story = {
  args: {
    clientId: "CLI-2026-5094",
    clientName: "Marthéline-Rousseau, Gabrielle Marie-Christine",
    onBack: () => console.log("Back clicked"),
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SectionListClosing } from "../components/SectionListClosing";

const meta: Meta<typeof SectionListClosing> = {
  title: "Design System/Molecules/SectionListClosing",
  component: SectionListClosing,
};

export default meta;
type Story = StoryObj<typeof SectionListClosing>;

export const Default: Story = {
  args: {
    notaryName: "Maître Bernard Lefebvre",
    closingDate: "15 mai 2024",
    amount: "450 000 €",
    onClick: () => console.log("Closing cliqué"),
  },
};

export const UpcomingClosing: Story = {
  args: {
    notaryName: "Maître Sophie Martin",
    closingDate: "20 mai 2024",
    amount: "850 000 €",
  },
};

export const PastClosing: Story = {
  args: {
    notaryName: "Maître Marie Dupont",
    closingDate: "5 avril 2024",
    amount: "1 200 000 €",
  },
};

export const SmallTransaction: Story = {
  args: {
    notaryName: "Maître Luc Moreau",
    closingDate: "25 mai 2024",
    amount: "250 000 €",
  },
};

export const WithCallback: Story = {
  args: {
    notaryName: "Maître Jean Leclerc",
    closingDate: "30 mai 2024",
    amount: "550 000 €",
    onClick: () => alert("Détails de la clôture"),
  },
};

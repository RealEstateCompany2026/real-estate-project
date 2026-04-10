import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SectionListEntretien } from "../components/SectionListEntretien";

const meta: Meta<typeof SectionListEntretien> = {
  title: "Design System/Molecules/SectionListEntretien",
  component: SectionListEntretien,
};

export default meta;
type Story = StoryObj<typeof SectionListEntretien>;

export const Default: Story = {
  args: {
    clientName: "Martin Dupont",
    date: "15 avril 2024",
    time: "14:00",
    notes: 3,
    onClick: () => console.log("Entretien cliqué"),
  },
};

export const Upcoming: Story = {
  args: {
    clientName: "Sophie Bernard",
    date: "20 avril 2024",
    time: "10:30",
    notes: 0,
  },
};

export const Past: Story = {
  args: {
    clientName: "Luc Moreau",
    date: "10 avril 2024",
    time: "15:00",
    notes: 5,
  },
};

export const ManyNotes: Story = {
  args: {
    clientName: "Isabelle Martin",
    date: "12 avril 2024",
    time: "11:00",
    notes: 8,
    onClick: () => alert("Entretien avec notes détaillées"),
  },
};

export const NoNotes: Story = {
  args: {
    clientName: "Jean Leclerc",
    date: "25 avril 2024",
    time: "09:00",
    notes: 0,
  },
};

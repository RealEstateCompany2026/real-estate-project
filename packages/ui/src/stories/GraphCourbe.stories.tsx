import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { GraphCourbe } from "../components/GraphCourbe";

const meta: Meta<typeof GraphCourbe> = {
  title: "Design System/Organisms/GraphCourbe",
  component: GraphCourbe,
};
export default meta;
type Story = StoryObj<typeof GraphCourbe>;

export const Default: Story = {
  args: {
    title: "Interactions clients",
    selectedDate: "22 février 2026",
    selectedValue: "28 réactions positives",
    trendPercentage: "7%",
    trendDirection: "up",
  },
};

export const UpwardTrend: Story = {
  args: {
    title: "Ventes complétées",
    selectedDate: "10 avril 2026",
    selectedValue: "45 propriétés vendues",
    trendPercentage: "12%",
    trendDirection: "up",
  },
};

export const DownwardTrend: Story = {
  args: {
    title: "Temps moyen de vente",
    selectedDate: "5 avril 2026",
    selectedValue: "42 jours",
    trendPercentage: "5%",
    trendDirection: "down",
  },
};

export const LargePercentageChange: Story = {
  args: {
    title: "Qualification des prospects",
    selectedDate: "1er avril 2026",
    selectedValue: "89 prospects qualifiés",
    trendPercentage: "23%",
    trendDirection: "up",
  },
};

export const SmallChange: Story = {
  args: {
    title: "Taux de conversion",
    selectedDate: "8 avril 2026",
    selectedValue: "18% de taux de conversion",
    trendPercentage: "1%",
    trendDirection: "up",
  },
};

export const HighVolumeData: Story = {
  args: {
    title: "Annonces publiées",
    selectedDate: "9 avril 2026",
    selectedValue: "156 annonces",
    trendPercentage: "34%",
    trendDirection: "up",
  },
};

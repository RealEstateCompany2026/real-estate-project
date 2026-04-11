import type { Meta, StoryObj } from "@storybook/react";
import { GraphCourbe } from "../components/GraphCourbe";

const meta: Meta<typeof GraphCourbe> = {
  title: "Design System/Organisms/GraphCourbe",
  component: GraphCourbe,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Graphique en courbe avec dégradé, grille, popup d'indication et dropdown de sélection. Supporte des données dynamiques.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GraphCourbe>;

export const Default: Story = {
  args: {
    title: "Interactions clients",
    selectedIndex: 5,
    selectedDate: "22 fév 2026",
    selectedLabel: "28 réactions positives",
    trendPercentage: "7%",
    trendDirection: "up",
  },
};

export const VentesHausse: Story = {
  args: {
    title: "Ventes complétées",
    data: [
      { label: "Jan", value: 12 },
      { label: "Fév", value: 18 },
      { label: "Mar", value: 15 },
      { label: "Avr", value: 22 },
      { label: "Mai", value: 30 },
      { label: "Juin", value: 45 },
    ],
    selectedIndex: 5,
    selectedDate: "Juin 2026",
    selectedLabel: "45 propriétés vendues",
    trendPercentage: "12%",
    trendDirection: "up",
    maxY: 50,
  },
};

export const TendanceBaisse: Story = {
  args: {
    title: "Temps moyen de vente",
    data: [
      { label: "S1", value: 60 },
      { label: "S2", value: 55 },
      { label: "S3", value: 50 },
      { label: "S4", value: 48 },
      { label: "S5", value: 42 },
      { label: "S6", value: 38 },
      { label: "S7", value: 35 },
    ],
    selectedIndex: 4,
    selectedDate: "5 avril 2026",
    selectedLabel: "42 jours",
    trendPercentage: "5%",
    trendDirection: "down",
  },
};

export const SansSelection: Story = {
  args: {
    title: "Prospects qualifiés",
    data: [
      { label: "Lun", value: 5 },
      { label: "Mar", value: 12 },
      { label: "Mer", value: 8 },
      { label: "Jeu", value: 15 },
      { label: "Ven", value: 20 },
    ],
    selectedIndex: null,
  },
};

export const GrandesValeurs: Story = {
  args: {
    title: "Annonces publiées",
    data: [
      { label: "Q1", value: 120 },
      { label: "Q2", value: 156 },
      { label: "Q3", value: 180 },
      { label: "Q4", value: 210 },
    ],
    selectedIndex: 1,
    selectedDate: "Q2 2026",
    selectedLabel: "156 annonces",
    trendPercentage: "34%",
    trendDirection: "up",
    maxY: 250,
  },
};

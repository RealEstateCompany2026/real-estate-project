import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SheetBienDetails } from "../components/SheetBienDetails";

const meta: Meta<typeof SheetBienDetails> = {
  title: "Design System/Molecules/SheetBienDetails",
  component: SheetBienDetails,
};

export default meta;
type Story = StoryObj<typeof SheetBienDetails>;

export const Default: Story = {
  args: {
    bienType: "Appartement",
    surface: "85 m²",
    type: "T3",
    price: "450 000 €",
    location: "75008 Paris",
    dpe: "B",
    qualification: 75,
    entretien: 60,
    conversion: 80,
  },
};

export const HighQuality: Story = {
  args: {
    bienType: "Maison",
    surface: "250 m²",
    type: "Villa",
    price: "1 800 000 €",
    location: "92100 Boulogne",
    dpe: "A",
    qualification: 95,
    entretien: 90,
    conversion: 88,
    qualificationAiSuggestions: 2,
    entretienAiSuggestions: 1,
  },
};

export const LowQuality: Story = {
  args: {
    bienType: "Studio",
    surface: "25 m²",
    type: "Studio",
    price: "250 000 €",
    location: "75005 Paris",
    dpe: "G",
    qualification: 30,
    entretien: 20,
    conversion: 35,
    conversionAiSuggestions: 3,
  },
};

export const MediumQuality: Story = {
  args: {
    bienType: "Duplex",
    surface: "120 m²",
    type: "T4",
    price: "650 000 €",
    location: "75011 Paris",
    dpe: "D",
    qualification: 55,
    entretien: 50,
    conversion: 60,
  },
};

export const WithAllSuggestions: Story = {
  args: {
    bienType: "Commerce",
    surface: "150 m²",
    type: "Commerce",
    price: "400 000 €",
    location: "75001 Paris",
    dpe: "C",
    qualification: 65,
    entretien: 55,
    conversion: 70,
    qualificationAiSuggestions: 1,
    entretienAiSuggestions: 2,
    conversionAiSuggestions: 1,
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CardCA } from "../components/CardCA";

const meta: Meta<typeof CardCA> = {
  title: "Design System/Molecules/CardCA",
  component: CardCA,
};

export default meta;
type Story = StoryObj<typeof CardCA>;

export const Default: Story = {
  args: {
    chiffreAffaire: "285 000 €",
    couts: "42 500 €",
    margeBrute: "242 500 €",
    tauxMarge: "85,0%",
  },
};

export const HighMargin: Story = {
  args: {
    chiffreAffaire: "450 000 €",
    couts: "32 000 €",
    margeBrute: "418 000 €",
    tauxMarge: "92,9%",
  },
};

export const LowMargin: Story = {
  args: {
    chiffreAffaire: "150 000 €",
    couts: "120 000 €",
    margeBrute: "30 000 €",
    tauxMarge: "20,0%",
  },
};

export const LargeNumbers: Story = {
  args: {
    chiffreAffaire: "2 500 000 €",
    couts: "425 000 €",
    margeBrute: "2 075 000 €",
    tauxMarge: "83,0%",
  },
};

export const SmallNumbers: Story = {
  args: {
    chiffreAffaire: "8 500 €",
    couts: "1 275 €",
    margeBrute: "7 225 €",
    tauxMarge: "85,0%",
  },
};

export const Zero: Story = {
  args: {
    chiffreAffaire: "0 €",
    couts: "0 €",
    margeBrute: "0 €",
    tauxMarge: "0%",
  },
};

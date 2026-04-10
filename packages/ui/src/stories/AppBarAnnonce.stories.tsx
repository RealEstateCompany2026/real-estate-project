import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppBarAnnonce } from "../components/AppBarAnnonce";

const meta: Meta<typeof AppBarAnnonce> = {
  title: "Design System/Organisms/AppBarAnnonce",
  component: AppBarAnnonce,
};
export default meta;
type Story = StoryObj<typeof AppBarAnnonce>;

export const Default: Story = {
  args: {
    annonceId: "ANN-2026-5421",
    portal: "SeLoger",
    onBack: () => console.log("Back clicked"),
  },
};

export const LeBonoCornercase: Story = {
  args: {
    annonceId: "ANN-2026-8839",
    portal: "LeBonCoin",
    onBack: () => console.log("Back clicked"),
  },
};

export const PAPCornercase: Story = {
  args: {
    annonceId: "ANN-2026-3142",
    portal: "PAP",
    onBack: () => console.log("Back clicked"),
  },
};

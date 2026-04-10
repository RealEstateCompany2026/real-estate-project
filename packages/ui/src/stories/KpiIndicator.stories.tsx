import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { KpiIndicator } from "../components/KpiIndicator";

const meta: Meta<typeof KpiIndicator> = {
  title: "Design System/Atoms/KpiIndicator",
  component: KpiIndicator,
};
export default meta;
type Story = StoryObj<typeof KpiIndicator>;

export const QualificationVertical: Story = {
  args: {
    kpi: "qual",
    value: "64%",
    percentage: 64,
    variant: "vertical",
  },
};

export const EngagementStraight: Story = {
  args: {
    kpi: "eng",
    value: "38",
    percentage: 75,
    variant: "straight",
  },
};

export const ConversionVertical: Story = {
  args: {
    kpi: "conv",
    value: "92%",
    percentage: 92,
    variant: "vertical",
  },
};

export const ReactivationStraight: Story = {
  args: {
    kpi: "reac",
    value: "45",
    percentage: 45,
    variant: "straight",
  },
};

export const EntretienVertical: Story = {
  args: {
    kpi: "ent",
    value: "78%",
    percentage: 78,
    variant: "vertical",
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { KpiIndicator } from "../components/KpiIndicator";

const meta: Meta<typeof KpiIndicator> = {
  title: "Design System/Atoms/KpiIndicator",
  component: KpiIndicator,
};
export default meta;
type Story = StoryObj<typeof KpiIndicator>;

// --- Vertical variant (Lists / Cards) ---

export const QualificationVertical: Story = {
  args: {
    kpi: "qual",
    value: "64%",
    percentage: 64,
    variant: "vertical",
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

export const EntretienVertical: Story = {
  args: {
    kpi: "ent",
    value: "24%",
    percentage: 24,
    variant: "vertical",
  },
};

export const ReactivationVertical: Story = {
  args: {
    kpi: "reac",
    value: "49%",
    percentage: 49,
    variant: "vertical",
  },
};

// --- Straight variant (App bars) ---

export const QualificationStraight: Story = {
  args: {
    kpi: "qual",
    value: "64%",
    percentage: 64,
    variant: "straight",
  },
};

export const EntretienStraight: Story = {
  args: {
    kpi: "ent",
    value: "38",
    percentage: 38,
    variant: "straight",
  },
};

export const EngagementStraight: Story = {
  args: {
    kpi: "eng",
    value: "82%",
    percentage: 82,
    variant: "straight",
  },
};

// --- All KPIs side by side (like Figma) ---

export const AllKpisStraight: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <KpiIndicator kpi="qual" value="64%" percentage={64} variant="straight" />
      <KpiIndicator kpi="eng" value="82%" percentage={82} variant="straight" />
      <KpiIndicator kpi="conv" value="24%" percentage={24} variant="straight" />
      <KpiIndicator kpi="ent" value="49%" percentage={49} variant="straight" />
    </div>
  ),
};

export const AllKpisVertical: Story = {
  render: () => (
    <div className="flex gap-8 items-start">
      <KpiIndicator kpi="qual" value="64%" percentage={64} variant="vertical" />
      <KpiIndicator kpi="eng" value="82%" percentage={82} variant="vertical" />
      <KpiIndicator kpi="conv" value="24%" percentage={24} variant="vertical" />
      <KpiIndicator kpi="ent" value="49%" percentage={49} variant="vertical" />
    </div>
  ),
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBarWithControls } from "../components/ProgressBarWithControls";

const meta: Meta<typeof ProgressBarWithControls> = {
  title: "Design System/Organisms/ProgressBarWithControls",
  component: ProgressBarWithControls,
};
export default meta;
type Story = StoryObj<typeof ProgressBarWithControls>;

export const Default: Story = {
  args: {
    label: "Complétion du profil",
    progress: 50,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: false,
    disableNext: false,
  },
};

export const Starting: Story = {
  args: {
    label: "Étape 1 sur 5",
    progress: 20,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: true,
    disableNext: false,
  },
};

export const NearCompletion: Story = {
  args: {
    label: "Étape 4 sur 5",
    progress: 80,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: false,
    disableNext: false,
  },
};

export const Completed: Story = {
  args: {
    label: "Onboarding complété",
    progress: 100,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: false,
    disableNext: true,
  },
};

export const BothDisabled: Story = {
  args: {
    label: "Traitement en cours",
    progress: 65,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: true,
    disableNext: true,
  },
};

export const QuarterProgress: Story = {
  args: {
    label: "Qualification client",
    progress: 25,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: false,
    disableNext: false,
  },
};

export const ThreeQuartersProgress: Story = {
  args: {
    label: "Qualification client",
    progress: 75,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: false,
    disableNext: false,
  },
};

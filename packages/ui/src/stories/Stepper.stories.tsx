import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "../components/Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Design System/Molecules/Stepper",
  component: Stepper,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "minimal"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  "Informations",
  "Bien immobilier",
  "Financement",
  "Confirmation",
];

export const Default: Story = {
  args: {
    steps,
    currentStep: 1,
    completedSteps: [0],
    variant: "default",
  },
};

export const FirstStep: Story = {
  args: {
    steps,
    currentStep: 0,
    completedSteps: [],
    variant: "default",
  },
};

export const MiddleStep: Story = {
  args: {
    steps,
    currentStep: 2,
    completedSteps: [0, 1],
    variant: "default",
  },
};

export const LastStep: Story = {
  args: {
    steps,
    currentStep: 3,
    completedSteps: [0, 1, 2],
    variant: "default",
  },
};

export const AllCompleted: Story = {
  args: {
    steps,
    currentStep: 3,
    completedSteps: [0, 1, 2, 3],
    variant: "default",
  },
};

export const MinimalVariant: Story = {
  args: {
    steps,
    currentStep: 1,
    completedSteps: [0],
    variant: "minimal",
  },
};

export const MinimalAllCompleted: Story = {
  args: {
    steps,
    currentStep: 3,
    completedSteps: [0, 1, 2, 3],
    variant: "minimal",
  },
};

export const ManySteps: Story = {
  args: {
    steps: [
      "Étape 1",
      "Étape 2",
      "Étape 3",
      "Étape 4",
      "Étape 5",
      "Étape 6",
    ],
    currentStep: 2,
    completedSteps: [0, 1],
    variant: "default",
  },
};

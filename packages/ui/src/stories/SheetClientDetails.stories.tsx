import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SheetClientDetails } from "../components/SheetClientDetails";

const meta: Meta<typeof SheetClientDetails> = {
  title: "Design System/Molecules/SheetClientDetails",
  component: SheetClientDetails,
};

export default meta;
type Story = StoryObj<typeof SheetClientDetails>;

export const Default: Story = {
  args: {
    qualification: 75,
    engagement: 60,
    conversion: 80,
    reactivation: 45,
    qualificationAiSuggestions: 2,
    engagementAiSuggestions: 1,
    conversionAiSuggestions: 0,
    reactivationAiSuggestions: 3,
  },
};

export const HighPerformer: Story = {
  args: {
    qualification: 95,
    engagement: 90,
    conversion: 88,
    reactivation: 85,
    qualificationAiSuggestions: 0,
    engagementAiSuggestions: 0,
    conversionAiSuggestions: 0,
    reactivationAiSuggestions: 0,
  },
};

export const LowPerformer: Story = {
  args: {
    qualification: 30,
    engagement: 25,
    conversion: 20,
    reactivation: 15,
    qualificationAiSuggestions: 4,
    engagementAiSuggestions: 3,
    conversionAiSuggestions: 4,
    reactivationAiSuggestions: 5,
  },
};

export const MixedPerformance: Story = {
  args: {
    qualification: 70,
    engagement: 50,
    conversion: 65,
    reactivation: 40,
    qualificationAiSuggestions: 1,
    engagementAiSuggestions: 3,
    conversionAiSuggestions: 1,
    reactivationAiSuggestions: 2,
  },
};

export const NewClient: Story = {
  args: {
    qualification: 50,
    engagement: 40,
    conversion: 35,
    reactivation: 0,
    qualificationAiSuggestions: 2,
    engagementAiSuggestions: 2,
    conversionAiSuggestions: 1,
    reactivationAiSuggestions: 0,
  },
};

export const InactiveClient: Story = {
  args: {
    qualification: 20,
    engagement: 10,
    conversion: 15,
    reactivation: 5,
    qualificationAiSuggestions: 3,
    engagementAiSuggestions: 4,
    conversionAiSuggestions: 3,
    reactivationAiSuggestions: 4,
  },
};

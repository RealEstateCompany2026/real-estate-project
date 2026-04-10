import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card";

const meta: Meta<typeof Card> = {
  title: "Design System/Atoms/Card",
  component: Card,
  argTypes: {
    radius: {
      control: { type: "radio", options: ["sm", "default", "lg"] },
    },
    padding: {
      control: { type: "radio", options: ["sm", "default", "lg", "xl"] },
    },
    showBorder: { control: "boolean" },
    showShadow: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    radius: "default",
    padding: "default",
    showBorder: true,
    showShadow: true,
    children: "Card content",
  },
};

export const SmallRadius: Story = {
  args: {
    radius: "sm",
    padding: "default",
    showBorder: true,
    showShadow: true,
    children: "Small radius card",
  },
};

export const LargeRadius: Story = {
  args: {
    radius: "lg",
    padding: "default",
    showBorder: true,
    showShadow: true,
    children: "Large radius card",
  },
};

export const SmallPadding: Story = {
  args: {
    radius: "default",
    padding: "sm",
    showBorder: true,
    showShadow: true,
    children: "Small padding card",
  },
};

export const LargePadding: Story = {
  args: {
    radius: "default",
    padding: "lg",
    showBorder: true,
    showShadow: true,
    children: "Large padding card",
  },
};

export const ExtraLargePadding: Story = {
  args: {
    radius: "default",
    padding: "xl",
    showBorder: true,
    showShadow: true,
    children: "Extra large padding card",
  },
};

export const NoBorder: Story = {
  args: {
    radius: "default",
    padding: "default",
    showBorder: false,
    showShadow: true,
    children: "Card without border",
  },
};

export const NoShadow: Story = {
  args: {
    radius: "default",
    padding: "default",
    showBorder: true,
    showShadow: false,
    children: "Card without shadow",
  },
};

export const WithContent: Story = {
  render: (args) => (
    <Card {...args}>
      <h3 className="text-lg font-semibold mb-2">Card Title</h3>
      <p className="text-sm text-content-body">
        This is a card with more detailed content including text and other elements.
      </p>
    </Card>
  ),
  args: {
    radius: "default",
    padding: "default",
    showBorder: true,
    showShadow: true,
  },
};

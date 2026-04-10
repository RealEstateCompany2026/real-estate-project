import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageBadge } from "../components/MessageBadge";

const meta: Meta<typeof MessageBadge> = {
  title: "Design System/Atoms/MessageBadge",
  component: MessageBadge,
};
export default meta;
type Story = StoryObj<typeof MessageBadge>;

export const Received: Story = { args: { label: "REÇU" } };

export const Sent: Story = { args: { label: "ENVOYÉ" } };

export const Modified: Story = { args: { label: "MODIFIÉ" } };

export const Custom: Story = { args: { label: "DRAFT" } };

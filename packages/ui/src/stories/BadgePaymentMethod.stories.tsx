import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BadgePaymentMethod } from "../components/BadgePaymentMethod";

const meta: Meta<typeof BadgePaymentMethod> = {
  title: "Design System/Atoms/BadgePaymentMethod",
  component: BadgePaymentMethod,
};
export default meta;
type Story = StoryObj<typeof BadgePaymentMethod>;

export const Visa: Story = { args: { method: "visa" } };

export const Mastercard: Story = { args: { method: "mastercard" } };

export const CB: Story = { args: { method: "cb" } };

export const PayPal: Story = { args: { method: "paypal" } };

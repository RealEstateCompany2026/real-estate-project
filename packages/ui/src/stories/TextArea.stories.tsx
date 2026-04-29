import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../components/TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Design System/Atoms/TextArea",
  component: TextArea,
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    rows: { control: { type: "number", min: 1, max: 20 } },
    maxLength: { control: "number" },
    showCharCount: { control: "boolean" },
    resize: {
      control: { type: "radio", options: ["none", "vertical", "both"] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: "Commentaire libre",
  },
};

export const Filled: Story = {
  args: {
    value: "Lorem ipsum dolor sit amet",
  },
};

export const WithCharCount: Story = {
  args: {
    maxLength: 2000,
    showCharCount: true,
    value: "Un texte...",
  },
};

export const Error: Story = {
  args: {
    error: true,
    value: "Texte en erreur",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Non modifiable",
  },
};

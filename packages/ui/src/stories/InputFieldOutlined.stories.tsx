import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputFieldOutlined } from "../components/InputFieldOutlined";
import { Building, Euro, Calendar } from "lucide-react";

const meta: Meta<typeof InputFieldOutlined> = {
  title: "Design System/Molecules/InputFieldOutlined",
  component: InputFieldOutlined,
};

export default meta;
type Story = StoryObj<typeof InputFieldOutlined>;

export const Basic: Story = {
  args: {
    label: "Titre",
    placeholder: "Entrez le titre",
  },
};

export const Required: Story = {
  args: {
    label: "Description",
    placeholder: "Décrivez le bien",
    required: true,
  },
};

export const WithHintText: Story = {
  args: {
    label: "Surface",
    placeholder: "120",
    hintText: "En mètres carrés",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Bâtiment",
    placeholder: "Type de bâtiment",
    leftIcon: Building,
  },
};

export const WithCurrencyIcon: Story = {
  args: {
    label: "Prix de vente",
    placeholder: "450000",
    rightIcon: Euro,
    hintText: "Montant en euros",
  },
};

export const RequiredWithIcon: Story = {
  args: {
    label: "Date de visite",
    placeholder: "Sélectionnez une date",
    leftIcon: Calendar,
    required: true,
    icon: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Email du notaire",
    placeholder: "notaire@email.com",
    hintText: "Format d'email invalide",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Référence",
    placeholder: "REF-2024-001",
    disabled: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <InputFieldOutlined
        label="Notes"
        placeholder: "Ajoutez des notes..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        hintText={`${value.length} caractères`}
      />
    );
  },
};

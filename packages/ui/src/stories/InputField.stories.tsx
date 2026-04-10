import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../components/InputField";
import { User, Mail, Phone, MapPin } from "lucide-react";

const meta: Meta<typeof InputField> = {
  title: "Design System/Molecules/InputField",
  component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Basic: Story = {
  args: {
    label: "Nom",
    placeholder: "Entrez votre nom complet",
  },
};

export const Required: Story = {
  args: {
    label: "Prénom",
    placeholder: "Entrez votre prénom",
    required: true,
  },
};

export const WithHintText: Story = {
  args: {
    label: "Email",
    placeholder: "exemple@email.com",
    hintText: "Nous utiliserons cet email pour les communications importantes",
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Identité",
    placeholder: "Nom et prénom",
    leftIcon: User,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Email",
    placeholder: "votre.email@example.com",
    rightIcon: Mail,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: "Téléphone",
    placeholder: "+33 6 12 34 56 78",
    leftIcon: Phone,
    rightIcon: Phone,
  },
};

export const RequiredWithIcon: Story = {
  args: {
    label: "Adresse",
    placeholder: "123 rue de la Paix, 75000 Paris",
    leftIcon: MapPin,
    required: true,
    icon: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Code postal",
    placeholder: "75000",
    hintText: "Le code postal est invalide",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Domaine",
    placeholder: "Impossible de modifier",
    disabled: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <InputField
        label="Nom du client"
        placeholder="Entrez le nom du client"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        hintText={`Caractères saisis: ${value.length}`}
        leftIcon={User}
      />
    );
  },
};

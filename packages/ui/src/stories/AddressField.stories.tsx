import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AddressField, AddressSuggestion } from "../components/AddressField";

const meta: Meta<typeof AddressField> = {
  title: "Molecules/AddressField",
  component: AddressField,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AddressField>;

const mockSuggestions: AddressSuggestion[] = [
  {
    label: "12 Rue de Rivoli, 75001 Paris",
    street: "12 Rue de Rivoli",
    zipCode: "75001",
    city: "Paris",
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    label: "45 Avenue des Champs-Élysées, 75008 Paris",
    street: "45 Avenue des Champs-Élysées",
    zipCode: "75008",
    city: "Paris",
    lat: 48.8698,
    lng: 2.3075,
  },
  {
    label: "8 Place Bellecour, 69002 Lyon",
    street: "8 Place Bellecour",
    zipCode: "69002",
    city: "Lyon",
    lat: 45.7578,
    lng: 4.832,
  },
  {
    label: "1 Quai des Belges, 13001 Marseille",
    street: "1 Quai des Belges",
    zipCode: "13001",
    city: "Marseille",
    lat: 43.2965,
    lng: 5.3698,
  },
  {
    label: "22 Rue du Vieux Port, 06300 Nice",
    street: "22 Rue du Vieux Port",
    zipCode: "06300",
    city: "Nice",
    lat: 43.6961,
    lng: 7.2716,
  },
];

/**
 * État par défaut — champ vide, prêt pour la saisie.
 */
export const Default: Story = {
  args: {
    placeholder: "Rechercher une adresse...",
  },
};

/**
 * Avec suggestions — dropdown ouvert avec 5 adresses françaises.
 * Utilise un wrapper interactif pour que le dropdown s'affiche (input focusé).
 */
export const WithSuggestions: Story = {
  render: () => {
    const [value, setValue] = useState("12 Rue");
    return (
      <AddressField
        value={value}
        suggestions={mockSuggestions}
        onSearch={(q) => setValue(q)}
        onSelect={(s) => setValue(s.label)}
        onClear={() => setValue("")}
      />
    );
  },
};

/**
 * État loading — spinner visible à droite pendant l'appel API.
 */
export const Loading: Story = {
  args: {
    value: "12 Rue de Riv",
    loading: true,
  },
};

/**
 * Avec valeur sélectionnée — adresse complète affichée + bouton clear.
 */
export const WithValue: Story = {
  args: {
    value: "12 Rue de Rivoli, 75001 Paris",
  },
};

/**
 * État erreur — bordure rouge, champ invalide.
 */
export const Error: Story = {
  args: {
    value: "",
    error: true,
    placeholder: "Adresse requise",
  },
};

/**
 * État disabled — champ non interactif, style atténué.
 */
export const Disabled: Story = {
  args: {
    value: "12 Rue de Rivoli, 75001 Paris",
    disabled: true,
  },
};

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SelectField } from "../components/SelectField";

const meta: Meta<typeof SelectField> = {
  title: "Design System/Molecules/SelectField",
  component: SelectField,
};

export default meta;
type Story = StoryObj<typeof SelectField>;

const propertyTypeOptions = [
  { value: "maison", label: "Maison" },
  { value: "appartement", label: "Appartement" },
  { value: "commerce", label: "Commerce" },
  { value: "terrain", label: "Terrain" },
];

const dpeOptions = [
  { value: "A", label: "A - Très efficace" },
  { value: "B", label: "B - Efficace" },
  { value: "C", label: "C - Convenable" },
  { value: "D", label: "D - Assez convenable" },
  { value: "E", label: "E - Peu efficace" },
  { value: "F", label: "F - Très peu efficace" },
  { value: "G", label: "G - Extrêmement peu efficace" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <SelectField
        label="Type de bien"
        value={value}
        onChange={setValue}
        options={propertyTypeOptions}
        placeholder="Choisir un type..."
      />
    );
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <SelectField
        label="Diagnostic DPE"
        value={value}
        onChange={setValue}
        options={dpeOptions}
        required
      />
    );
  },
};

export const WithSelected: Story = {
  render: () => {
    const [value, setValue] = useState("appartement");
    return (
      <SelectField
        label="Type de bien"
        value={value}
        onChange={setValue}
        options={propertyTypeOptions}
      />
    );
  },
};

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <SelectField
        label="Statut du mandat"
        value={value}
        onChange={setValue}
        options={[
          { value: "actif", label: "Actif" },
          { value: "suspendu", label: "Suspendu" },
          { value: "termine", label: "Terminé" },
        ]}
        helperText="Sélectionnez le statut actuel du mandat"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <SelectField
        label="Type de propriétaire"
        value={value}
        onChange={setValue}
        options={[
          { value: "personne", label: "Personne physique" },
          { value: "entreprise", label: "Entreprise" },
          { value: "syndic", label: "Syndic" },
        ]}
        error="Ce champ est obligatoire"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState("maison");
    return (
      <SelectField
        label="Type de bien"
        value={value}
        onChange={setValue}
        options={propertyTypeOptions}
        disabled
      />
    );
  },
};

export const ManyOptions: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const cities = [
      { value: "paris", label: "Paris" },
      { value: "lyon", label: "Lyon" },
      { value: "marseille", label: "Marseille" },
      { value: "toulouse", label: "Toulouse" },
      { value: "nice", label: "Nice" },
      { value: "nantes", label: "Nantes" },
      { value: "strasbourg", label: "Strasbourg" },
      { value: "montpellier", label: "Montpellier" },
      { value: "bordeaux", label: "Bordeaux" },
      { value: "lille", label: "Lille" },
    ];
    return (
      <SelectField
        label="Ville"
        value={value}
        onChange={setValue}
        options={cities}
        placeholder="Sélectionner une ville..."
        required
      />
    );
  },
};

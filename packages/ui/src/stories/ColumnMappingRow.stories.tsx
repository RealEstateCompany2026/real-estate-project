import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ColumnMappingRow } from "../components/ColumnMappingRow";

const meta: Meta<typeof ColumnMappingRow> = {
  title: "Design System/Molecules/ColumnMappingRow",
  component: ColumnMappingRow,
};

export default meta;
type Story = StoryObj<typeof ColumnMappingRow>;

const fieldOptions = [
  { value: "firstName", label: "Prénom" },
  { value: "lastName", label: "Nom" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Téléphone" },
  { value: "address", label: "Adresse" },
  { value: "city", label: "Ville" },
  { value: "postalCode", label: "Code postal" },
];

export const Unmapped: Story = {
  render: () => {
    const [mapping, setMapping] = useState<string | null>(null);
    return (
      <ColumnMappingRow
        sourceColumn="nom_client"
        targetField={mapping}
        options={fieldOptions}
        onSelect={setMapping}
        status="none"
      />
    );
  },
};

export const Mapped: Story = {
  render: () => {
    const [mapping, setMapping] = useState<string | null>("lastName");
    return (
      <ColumnMappingRow
        sourceColumn="nom_client"
        targetField={mapping}
        options={fieldOptions}
        onSelect={setMapping}
        status="success"
      />
    );
  },
};

export const Required: Story = {
  render: () => {
    const [mapping, setMapping] = useState<string | null>(null);
    return (
      <ColumnMappingRow
        sourceColumn="email_adresse"
        targetField={mapping}
        options={fieldOptions}
        onSelect={setMapping}
        required
        status="error"
        message="Ce champ est obligatoire"
      />
    );
  },
};

export const WithWarning: Story = {
  render: () => {
    const [mapping, setMapping] = useState<string | null>("address");
    return (
      <ColumnMappingRow
        sourceColumn="adresse_complete"
        targetField={mapping}
        options={fieldOptions}
        onSelect={setMapping}
        status="warning"
        message="Le champ source contient des données incomplètes"
      />
    );
  },
};

export const MappingSelected: Story = {
  render: () => {
    const [mapping, setMapping] = useState<string | null>("email");
    return (
      <ColumnMappingRow
        sourceColumn="email_principal"
        targetField={mapping}
        options={fieldOptions}
        onSelect={setMapping}
        status="success"
        message="Mapping valide"
      />
    );
  },
};

export const InteractiveMapping: Story = {
  render: () => {
    const [mappings, setMappings] = useState<Record<string, string | null>>({
      prenom: "firstName",
      nom: "lastName",
      courriel: null,
    });

    const sourceColumns = ["prenom", "nom", "courriel"];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {sourceColumns.map((col) => (
          <ColumnMappingRow
            key={col}
            sourceColumn={col}
            targetField={mappings[col] || null}
            options={fieldOptions}
            onSelect={(field) =>
              setMappings({ ...mappings, [col]: field })
            }
            status={mappings[col] ? "success" : col === "courriel" ? "error" : "none"}
            required={col === "courriel"}
          />
        ))}
      </div>
    );
  },
};

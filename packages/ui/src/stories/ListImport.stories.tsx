import type { Meta, StoryObj } from "@storybook/react";
import { ListImport } from "../components/ListImport";

const meta: Meta<typeof ListImport> = {
  title: "Design System/Organisms/ListImport",
  component: ListImport,
};

export default meta;
type Story = StoryObj<typeof ListImport>;

/** Mode sélection avec callback */
export const Select: Story = {
  args: {
    status: "select",
    tableName: "clients_export.csv",
    onSelect: () => alert("Sélectionner"),
  },
};

/** Mode succès avec mapping et remapping */
export const Success: Story = {
  args: {
    status: "success",
    tableName: "clients_export.csv",
    targetTableName: "Clients",
    onRemap: () => alert("Remapper"),
  },
};

/** Mode erreur avec message et remapping */
export const Error: Story = {
  args: {
    status: "error",
    tableName: "proprietes_mai_2024.xlsx",
    targetTableName: "Biens",
    errorMessage: "Colonnes manquantes : adresse, prix, surface",
    onRemap: () => alert("Remapper"),
  },
};

/** Mode sélection sans callback (bouton masqué) */
export const SelectWithoutAction: Story = {
  args: {
    status: "select",
    tableName: "clients_export.csv",
  },
};

/** Mode succès sans bouton remapping */
export const SuccessWithoutRemap: Story = {
  args: {
    status: "success",
    tableName: "affaires_q1.csv",
    targetTableName: "Affaires",
  },
};

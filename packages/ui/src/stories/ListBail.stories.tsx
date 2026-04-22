import type { Meta, StoryObj } from "@storybook/react";
import { ListBail } from "../components/ListBail";

const meta: Meta<typeof ListBail> = {
  title: "Design System/Organisms/ListBail",
  component: ListBail,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste bail — titre avec référence + infos bien (locataire, ville, type, surface, DPE) + badges ÉDITION/RÉVISION/SIGNATURE + bouton Voir + suggestions IA.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListBail>;

/** Bail signé — toutes étapes complétées */
export const ToutValide: Story = {
  args: {
    reference: "000.000.042",
    tenantName: "Nathalie DUFLOT",
    city: "Carcassonne",
    propertyType: "T3",
    surface: "120m²",
    dpeGrade: "C",
    workflow: { edition: "success", revision: "success", signature: "success" },
    aiSuggestions: 0,
  },
};

/** Bail en cours de révision */
export const EnCours: Story = {
  args: {
    reference: "000.000.018",
    tenantName: "Pierre MARTIN",
    city: "Toulouse",
    propertyType: "T2",
    surface: "65m²",
    dpeGrade: "B",
    workflow: { edition: "success", revision: "warning", signature: "disabled" },
    aiSuggestions: 1,
  },
};

/** Bail à éditer */
export const AEditer: Story = {
  args: {
    reference: "000.000.007",
    tenantName: "Jean DUPONT",
    city: "Montpellier",
    propertyType: "T4",
    surface: "95m²",
    dpeGrade: "D",
    workflow: { edition: "warning", revision: "disabled", signature: "disabled" },
    aiSuggestions: 0,
  },
};

/** Sans DPE ni référence */
export const SansDpeNiRef: Story = {
  args: {
    tenantName: "Marie LEFEVRE",
    city: "Lyon",
    propertyType: "Studio",
    surface: "30m²",
    workflow: { edition: "success", revision: "success", signature: "disabled" },
    aiSuggestions: 2,
  },
};

/** Plusieurs lignes empilées */
export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListBail
        reference="000.000.042"
        tenantName="Nathalie DUFLOT"
        city="Carcassonne"
        propertyType="T3"
        surface="120m²"
        dpeGrade="C"
        workflow={{ edition: "success", revision: "success", signature: "success" }}
        aiSuggestions={0}
      />
      <ListBail
        reference="000.000.018"
        tenantName="Pierre MARTIN"
        city="Toulouse"
        propertyType="T2"
        surface="65m²"
        dpeGrade="B"
        workflow={{ edition: "success", revision: "warning", signature: "disabled" }}
        aiSuggestions={1}
      />
      <ListBail
        reference="000.000.007"
        tenantName="Jean DUPONT"
        city="Montpellier"
        propertyType="T4"
        surface="95m²"
        dpeGrade="D"
        workflow={{ edition: "warning", revision: "disabled", signature: "disabled" }}
        aiSuggestions={0}
      />
    </div>
  ),
};

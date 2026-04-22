import type { Meta, StoryObj } from "@storybook/react";
import { ListCandidatureLocataire } from "../components/ListCandidatureLocataire";

const meta: Meta<typeof ListCandidatureLocataire> = {
  title: "Design System/Organisms/ListCandidatureLocataire",
  component: ListCandidatureLocataire,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste candidature locataire — titre + infos bien (locataire, ville, type, surface, DPE) + badges DOSSIER/ACCORD + bouton Voir + suggestions IA.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListCandidatureLocataire>;

/** Candidature acceptée */
export const Accepte: Story = {
  args: {
    tenantName: "Nathalie DUFLOT",
    city: "Carcassonne",
    propertyType: "T3",
    surface: "120m²",
    dpeGrade: "C",
    workflow: { dossier: "success", accord: "success" },
    aiSuggestions: 0,
  },
};

/** Candidature en cours d'examen */
export const EnCours: Story = {
  args: {
    tenantName: "Pierre MARTIN",
    city: "Toulouse",
    propertyType: "T2",
    surface: "65m²",
    dpeGrade: "B",
    workflow: { dossier: "success", accord: "disabled" },
    aiSuggestions: 2,
  },
};

/** Dossier incomplet */
export const DossierIncomplet: Story = {
  args: {
    tenantName: "Jean DUPONT",
    city: "Montpellier",
    propertyType: "T4",
    surface: "95m²",
    dpeGrade: "D",
    workflow: { dossier: "warning", accord: "disabled" },
    aiSuggestions: 0,
  },
};

/** Sans DPE */
export const SansDpe: Story = {
  args: {
    tenantName: "Marie LEFEVRE",
    city: "Lyon",
    propertyType: "Studio",
    surface: "30m²",
    workflow: { dossier: "success", accord: "warning" },
    aiSuggestions: 1,
  },
};

/** Plusieurs lignes empilées */
export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListCandidatureLocataire
        tenantName="Nathalie DUFLOT"
        city="Carcassonne"
        propertyType="T3"
        surface="120m²"
        dpeGrade="C"
        workflow={{ dossier: "success", accord: "success" }}
        aiSuggestions={0}
      />
      <ListCandidatureLocataire
        tenantName="Pierre MARTIN"
        city="Toulouse"
        propertyType="T2"
        surface="65m²"
        dpeGrade="B"
        workflow={{ dossier: "success", accord: "disabled" }}
        aiSuggestions={2}
      />
      <ListCandidatureLocataire
        tenantName="Jean DUPONT"
        city="Montpellier"
        propertyType="T4"
        surface="95m²"
        dpeGrade="D"
        workflow={{ dossier: "warning", accord: "disabled" }}
        aiSuggestions={0}
      />
    </div>
  ),
};

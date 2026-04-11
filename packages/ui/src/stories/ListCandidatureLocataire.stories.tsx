import type { Meta, StoryObj } from "@storybook/react";
import { ListCandidatureLocataire } from "../components/ListCandidatureLocataire";

const meta: Meta<typeof ListCandidatureLocataire> = {
  title: "Organisms/ListCandidatureLocataire",
  component: ListCandidatureLocataire,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste candidature locataire — contact + type + surface + ville + badges dossier/décision + bouton voir le dossier + AI.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListCandidatureLocataire>;

export const Accepte: Story = {
  args: {
    contactName: "Nathalie DUFLOT",
    propertyType: "T3",
    surface: "120m²",
    city: "Carcassonne",
    status: {
      dossier: { label: "COMPLET", variant: "success" },
      decision: { label: "ACCEPTÉ", variant: "success" },
    },
    aiSuggestions: 0,
  },
};

export const EnAttente: Story = {
  args: {
    contactName: "Pierre MARTIN",
    propertyType: "T2",
    surface: "65m²",
    city: "Toulouse",
    status: {
      dossier: { label: "COMPLET", variant: "success" },
      decision: { label: "EN ATTENTE", variant: "warning" },
    },
    aiSuggestions: 2,
  },
};

export const DossierIncomplet: Story = {
  args: {
    contactName: "Jean DUPONT",
    propertyType: "T4",
    surface: "95m²",
    city: "Montpellier",
    status: {
      dossier: { label: "INCOMPLET", variant: "error" },
      decision: { label: "EN ATTENTE", variant: "disabled" },
    },
    aiSuggestions: 0,
  },
};

export const Refuse: Story = {
  args: {
    contactName: "Marie LEFEVRE",
    propertyType: "Studio",
    surface: "30m²",
    city: "Lyon",
    status: {
      dossier: { label: "COMPLET", variant: "success" },
      decision: { label: "REFUSÉ", variant: "error" },
    },
    aiSuggestions: 0,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListCandidatureLocataire
        contactName="Nathalie DUFLOT"
        propertyType="T3"
        surface="120m²"
        city="Carcassonne"
        status={{
          dossier: { label: "COMPLET", variant: "success" },
          decision: { label: "ACCEPTÉ", variant: "success" },
        }}
        aiSuggestions={0}
      />
      <ListCandidatureLocataire
        contactName="Pierre MARTIN"
        propertyType="T2"
        surface="65m²"
        city="Toulouse"
        status={{
          dossier: { label: "COMPLET", variant: "success" },
          decision: { label: "EN ATTENTE", variant: "warning" },
        }}
        aiSuggestions={2}
      />
      <ListCandidatureLocataire
        contactName="Jean DUPONT"
        propertyType="T4"
        surface="95m²"
        city="Montpellier"
        status={{
          dossier: { label: "INCOMPLET", variant: "error" },
          decision: { label: "EN ATTENTE", variant: "disabled" },
        }}
        aiSuggestions={0}
      />
    </div>
  ),
};

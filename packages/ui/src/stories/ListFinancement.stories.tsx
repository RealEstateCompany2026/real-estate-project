import type { Meta, StoryObj } from "@storybook/react";
import { ListFinancement } from "../components/ListFinancement";

const meta: Meta<typeof ListFinancement> = {
  title: "Organisms/ListFinancement",
  component: ListFinancement,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste dossier de financement — 2 variantes : Vente (contact + statut) et Recherche (contact + infos bien + statut).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListFinancement>;

export const VenteIncomplet: Story = {
  args: {
    useCase: "vente",
    contactName: "Nathalie DUFLOT",
    status: { label: "INCOMPLET", variant: "success" },
    aiSuggestions: 0,
  },
};

export const VenteComplet: Story = {
  args: {
    useCase: "vente",
    contactName: "Pierre MARTIN",
    status: { label: "COMPLET", variant: "success" },
    aiSuggestions: 1,
  },
};

export const Recherche: Story = {
  args: {
    useCase: "recherche",
    contactName: "Nathalie DUFLOT",
    propertyType: "T3",
    surface: "120m²",
    city: "Carcassonne",
    status: { label: "INCOMPLET", variant: "warning" },
    aiSuggestions: 0,
  },
};

export const RechercheValide: Story = {
  args: {
    useCase: "recherche",
    contactName: "Jean DUPONT",
    propertyType: "Maison",
    surface: "200m²",
    city: "Montpellier",
    status: { label: "VALIDÉ", variant: "success" },
    aiSuggestions: 2,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListFinancement
        useCase="vente"
        contactName="Nathalie DUFLOT"
        status={{ label: "INCOMPLET", variant: "success" }}
        aiSuggestions={0}
      />
      <ListFinancement
        useCase="vente"
        contactName="Pierre MARTIN"
        status={{ label: "COMPLET", variant: "success" }}
        aiSuggestions={1}
      />
      <ListFinancement
        useCase="recherche"
        contactName="Jean DUPONT"
        propertyType="T3"
        surface="120m²"
        city="Carcassonne"
        status={{ label: "INCOMPLET", variant: "warning" }}
        aiSuggestions={0}
      />
    </div>
  ),
};

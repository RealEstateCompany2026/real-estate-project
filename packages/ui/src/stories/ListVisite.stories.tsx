import type { Meta, StoryObj } from "@storybook/react";
import { ListVisite } from "../components/ListVisite";

const meta: Meta<typeof ListVisite> = {
  title: "Organisms/ListVisite",
  component: ListVisite,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste visite — 2 variantes : Vente (date + contact + 3 badges workflow) et Recherche (date + contact + infos bien + 2 badges workflow).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListVisite>;

export const Vente: Story = {
  args: {
    useCase: "vente",
    dateTime: "12 fév. 2026 à 14h00",
    contactName: "Nathalie DUFLOT",
    workflow: { calendrier: "success", odj: "success", cr: "disabled" },
    aiSuggestions: 0,
  },
};

export const VenteComplete: Story = {
  args: {
    useCase: "vente",
    dateTime: "5 janv. 2026 à 10h00",
    contactName: "Pierre MARTIN",
    workflow: { calendrier: "success", odj: "success", cr: "success" },
    aiSuggestions: 2,
  },
};

export const Recherche: Story = {
  args: {
    useCase: "recherche",
    dateTime: "12 fév. 2026 à 14h00",
    contactName: "Nathalie DUFLOT",
    propertyType: "T3",
    surface: "120m²",
    city: "Carcassonne",
    workflow: { programme: "success", cr: "disabled" },
    aiSuggestions: 0,
  },
};

export const RechercheComplete: Story = {
  args: {
    useCase: "recherche",
    dateTime: "3 mars 2026 à 16h30",
    contactName: "Jean DUPONT",
    propertyType: "Maison",
    surface: "200m²",
    city: "Montpellier",
    workflow: { programme: "success", cr: "success" },
    aiSuggestions: 1,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListVisite
        useCase="vente"
        dateTime="12 fév. 2026 à 14h00"
        contactName="Nathalie DUFLOT"
        workflow={{ calendrier: "success", odj: "success", cr: "disabled" }}
        aiSuggestions={0}
      />
      <ListVisite
        useCase="vente"
        dateTime="5 janv. 2026 à 10h00"
        contactName="Pierre MARTIN"
        workflow={{ calendrier: "success", odj: "success", cr: "success" }}
        aiSuggestions={2}
      />
      <ListVisite
        useCase="recherche"
        dateTime="12 fév. 2026 à 14h00"
        contactName="Nathalie DUFLOT"
        propertyType="T3"
        surface="120m²"
        city="Carcassonne"
        workflow={{ programme: "success", cr: "disabled" }}
        aiSuggestions={0}
      />
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { ListPromesse } from "../components/ListPromesse";

const meta: Meta<typeof ListPromesse> = {
  title: "Design System/Organisms/ListPromesse",
  component: ListPromesse,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste promesse — 2 variantes : Vente (contact + REÇUE/TRANSMISE/ACCORD) et Recherche (contact + infos bien + ENVOYÉE/ACCEPTÉE).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListPromesse>;

export const Vente: Story = {
  args: {
    useCase: "vente",
    contactName: "Nathalie DUFLOT",
    workflow: { recue: "success", transmise: "success", accord: "success" },
    aiSuggestions: 0,
  },
};

export const VenteEnCours: Story = {
  args: {
    useCase: "vente",
    contactName: "Pierre MARTIN",
    workflow: { recue: "success", transmise: "warning", accord: "disabled" },
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
    workflow: { envoyee: "success", acceptee: "success" },
    aiSuggestions: 0,
  },
};

export const RechercheEnCours: Story = {
  args: {
    useCase: "recherche",
    contactName: "Jean DUPONT",
    propertyType: "Maison",
    surface: "200m²",
    city: "Montpellier",
    workflow: { envoyee: "success", acceptee: "disabled" },
    aiSuggestions: 2,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListPromesse
        useCase="vente"
        contactName="Nathalie DUFLOT"
        workflow={{ recue: "success", transmise: "success", accord: "success" }}
        aiSuggestions={0}
      />
      <ListPromesse
        useCase="vente"
        contactName="Pierre MARTIN"
        workflow={{ recue: "success", transmise: "warning", accord: "disabled" }}
        aiSuggestions={1}
      />
      <ListPromesse
        useCase="recherche"
        contactName="Jean DUPONT"
        propertyType="T3"
        surface="120m²"
        city="Carcassonne"
        workflow={{ envoyee: "success", acceptee: "disabled" }}
        aiSuggestions={0}
      />
    </div>
  ),
};

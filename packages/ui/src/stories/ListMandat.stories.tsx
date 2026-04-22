import type { Meta, StoryObj } from "@storybook/react";
import { ListMandat } from "../components/ListMandat";

const meta: Meta<typeof ListMandat> = {
  title: "Design System/Organisms/ListMandat",
  component: ListMandat,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste mandat — référence + infos bien/recherche + client + 3 badges workflow + bouton Voir + suggestions IA.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListMandat>;

/** Mandat de vente — infos du bien */
export const Vente: Story = {
  args: {
    reference: "MV.789.083.263",
    city: "Montpellier",
    propertyType: "T3",
    surface: "85m²",
    dpeGrade: "B",
    clientName: "Roberto RASTAPOPULOS",
    workflow: { edition: "success", revision: "disabled", signature: "disabled" },
    aiSuggestions: 1,
  },
};

/** Mandat signé — toutes étapes terminées */
export const AllSigned: Story = {
  args: {
    reference: "MV.456.123.789",
    city: "Lyon",
    propertyType: "Maison",
    surface: "200m²",
    dpeGrade: "A",
    clientName: "Marie DUPONT",
    workflow: { edition: "success", revision: "success", signature: "success" },
    aiSuggestions: 0,
  },
};

/** Mandat de recherche location — critères de recherche */
export const RechercheLocation: Story = {
  args: {
    reference: "MRL.321.654.987",
    city: "Paris",
    propertyType: "T2",
    surface: "40–60m²",
    clientName: "Jean MARTIN",
    workflow: { edition: "success", revision: "warning", signature: "disabled" },
    aiSuggestions: 2,
  },
};

/** Mandat de recherche acquisition — sans DPE */
export const RechercheAcquisition: Story = {
  args: {
    reference: "MRA.111.222.333",
    city: "Bordeaux",
    propertyType: "Maison",
    surface: "≥120m²",
    clientName: "Sophie BERNARD",
    workflow: { edition: "warning", revision: "disabled", signature: "disabled" },
    aiSuggestions: 0,
  },
};

/** Plusieurs lignes empilées */
export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListMandat
        reference="MV.789.083.263"
        city="Montpellier"
        propertyType="T3"
        surface="85m²"
        dpeGrade="B"
        clientName="Roberto RASTAPOPULOS"
        workflow={{ edition: "success", revision: "disabled", signature: "disabled" }}
        aiSuggestions={1}
      />
      <ListMandat
        reference="MV.456.123.789"
        city="Lyon"
        propertyType="Maison"
        surface="200m²"
        dpeGrade="A"
        clientName="Marie DUPONT"
        workflow={{ edition: "success", revision: "success", signature: "success" }}
        aiSuggestions={0}
      />
      <ListMandat
        reference="MRL.321.654.987"
        city="Paris"
        propertyType="T2"
        surface="40–60m²"
        clientName="Jean MARTIN"
        workflow={{ edition: "success", revision: "warning", signature: "disabled" }}
        aiSuggestions={2}
      />
    </div>
  ),
};

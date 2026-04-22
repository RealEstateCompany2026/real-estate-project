import type { Meta, StoryObj } from "@storybook/react";
import { ListActeNotarie } from "../components/ListActeNotarie";

const meta: Meta<typeof ListActeNotarie> = {
  title: "Design System/Organisms/ListActeNotarie",
  component: ListActeNotarie,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste acte notarié — titre + infos bien (vendeur, ville, type, surface, DPE, acquéreur) + chip date/heure + badges RDV/SIGNATURE + bouton Voir + suggestions IA.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListActeNotarie>;

/** Acte signé — toutes étapes complétées */
export const Signe: Story = {
  args: {
    sellerName: "Marc LEROY",
    buyerName: "Nathalie DUFLOT",
    city: "Montpellier",
    propertyType: "T3",
    surface: "85m²",
    dpeGrade: "B",
    dateTime: "12 fév. 2026 à 17h30",
    workflow: { rdv: "success", signature: "success" },
    aiSuggestions: 0,
  },
};

/** RDV fixé, pas encore signé */
export const RdvFixe: Story = {
  args: {
    sellerName: "Sophie BERNARD",
    buyerName: "Pierre MARTIN",
    city: "Lyon",
    propertyType: "Maison",
    surface: "200m²",
    dpeGrade: "A",
    dateTime: "5 mars 2026 à 10h00",
    workflow: { rdv: "success", signature: "disabled" },
    aiSuggestions: 1,
  },
};

/** En attente — pas de RDV */
export const EnAttente: Story = {
  args: {
    sellerName: "Jean DUPONT",
    buyerName: "Marie LEFEVRE",
    city: "Carcassonne",
    propertyType: "T2",
    surface: "45m²",
    dpeGrade: "D",
    workflow: { rdv: "disabled", signature: "disabled" },
    aiSuggestions: 0,
  },
};

/** Sans DPE ni date */
export const SansDpeNiDate: Story = {
  args: {
    sellerName: "Paul MOREAU",
    buyerName: "Sophie BERNARD",
    city: "Paris",
    propertyType: "Studio",
    surface: "25m²",
    workflow: { rdv: "disabled", signature: "disabled" },
    aiSuggestions: 0,
  },
};

/** Plusieurs lignes empilées */
export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListActeNotarie
        sellerName="Marc LEROY"
        buyerName="Nathalie DUFLOT"
        city="Montpellier"
        propertyType="T3"
        surface="85m²"
        dpeGrade="B"
        dateTime="12 fév. 2026 à 17h30"
        workflow={{ rdv: "success", signature: "success" }}
        aiSuggestions={0}
      />
      <ListActeNotarie
        sellerName="Sophie BERNARD"
        buyerName="Pierre MARTIN"
        city="Lyon"
        propertyType="Maison"
        surface="200m²"
        dpeGrade="A"
        dateTime="5 mars 2026 à 10h00"
        workflow={{ rdv: "success", signature: "disabled" }}
        aiSuggestions={1}
      />
      <ListActeNotarie
        sellerName="Jean DUPONT"
        buyerName="Marie LEFEVRE"
        city="Carcassonne"
        propertyType="T2"
        surface="45m²"
        dpeGrade="D"
        workflow={{ rdv: "disabled", signature: "disabled" }}
        aiSuggestions={0}
      />
    </div>
  ),
};

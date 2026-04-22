import type { Meta, StoryObj } from "@storybook/react";
import { ListFinancement } from "../components/ListFinancement";

const meta: Meta<typeof ListFinancement> = {
  title: "Design System/Organisms/ListFinancement",
  component: ListFinancement,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste financement — titre fixe + infos bien (vendeur/acquéreur, ville, type, surface, DPE) + badges DOSSIER/FINANCÉ + bouton Voir + suggestions IA.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListFinancement>;

/** Vente — dossier en cours */
export const Vente: Story = {
  args: {
    useCase: "vente",
    sellerName: "Marc LEROY",
    buyerName: "Nathalie DUFLOT",
    city: "Montpellier",
    propertyType: "T3",
    surface: "85m²",
    dpeGrade: "B",
    workflow: { dossier: "warning", finance: "disabled" },
    aiSuggestions: 0,
  },
};

/** Vente — financement obtenu */
export const VenteFinance: Story = {
  args: {
    useCase: "vente",
    sellerName: "Sophie BERNARD",
    buyerName: "Pierre MARTIN",
    city: "Lyon",
    propertyType: "Maison",
    surface: "200m²",
    dpeGrade: "A",
    workflow: { dossier: "success", finance: "success" },
    aiSuggestions: 1,
  },
};

/** Acquisition — dossier en cours */
export const Acquisition: Story = {
  args: {
    useCase: "acquisition",
    buyerName: "Nathalie DUFLOT",
    sellerName: "Jean DUPONT",
    city: "Carcassonne",
    propertyType: "T3",
    surface: "120m²",
    dpeGrade: "C",
    workflow: { dossier: "warning", finance: "disabled" },
    aiSuggestions: 0,
  },
};

/** Acquisition — financement obtenu */
export const AcquisitionFinance: Story = {
  args: {
    useCase: "acquisition",
    buyerName: "Jean DUPONT",
    sellerName: "Marie LEFEVRE",
    city: "Montpellier",
    propertyType: "Maison",
    surface: "200m²",
    dpeGrade: "D",
    workflow: { dossier: "success", finance: "success" },
    aiSuggestions: 2,
  },
};

/** Sans DPE */
export const SansDpe: Story = {
  args: {
    useCase: "vente",
    sellerName: "Paul MOREAU",
    buyerName: "Sophie BERNARD",
    city: "Paris",
    propertyType: "Studio",
    surface: "25m²",
    workflow: { dossier: "success", finance: "disabled" },
    aiSuggestions: 0,
  },
};

/** Plusieurs lignes empilées */
export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListFinancement
        useCase="vente"
        sellerName="Marc LEROY"
        buyerName="Nathalie DUFLOT"
        city="Montpellier"
        propertyType="T3"
        surface="85m²"
        dpeGrade="B"
        workflow={{ dossier: "warning", finance: "disabled" }}
        aiSuggestions={0}
      />
      <ListFinancement
        useCase="acquisition"
        buyerName="Jean DUPONT"
        sellerName="Marie LEFEVRE"
        city="Carcassonne"
        propertyType="T3"
        surface="120m²"
        dpeGrade="C"
        workflow={{ dossier: "success", finance: "success" }}
        aiSuggestions={2}
      />
    </div>
  ),
};

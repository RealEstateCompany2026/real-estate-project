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
          "Ligne de liste promesse/offre — titre dynamique selon useCase (Offre d'achat / Promesse de vente) + infos bien + chip montant + badges ÉDITION/ACCORD + bouton Voir + suggestions IA.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListPromesse>;

/** Offre d'achat reçue — toutes étapes complétées */
export const Vente: Story = {
  args: {
    useCase: "vente",
    buyerName: "Nathalie DUFLOT",
    sellerName: "Marc LEROY",
    city: "Montpellier",
    propertyType: "T3",
    surface: "85m²",
    dpeGrade: "B",
    amount: "320 000 €",
    workflow: { edition: "success", accord: "success" },
    aiSuggestions: 0,
  },
};

/** Offre d'achat en cours d'édition */
export const VenteEnCours: Story = {
  args: {
    useCase: "vente",
    buyerName: "Pierre MARTIN",
    sellerName: "Sophie BERNARD",
    city: "Lyon",
    propertyType: "Maison",
    surface: "200m²",
    dpeGrade: "A",
    amount: "450 000 €",
    workflow: { edition: "warning", accord: "disabled" },
    aiSuggestions: 1,
  },
};

/** Promesse de vente — toutes étapes complétées */
export const Acquisition: Story = {
  args: {
    useCase: "acquisition",
    buyerName: "Nathalie DUFLOT",
    sellerName: "Jean DUPONT",
    city: "Carcassonne",
    propertyType: "T3",
    surface: "120m²",
    dpeGrade: "C",
    amount: "185 000 €",
    workflow: { edition: "success", accord: "success" },
    aiSuggestions: 0,
  },
};

/** Promesse de vente en cours */
export const AcquisitionEnCours: Story = {
  args: {
    useCase: "acquisition",
    buyerName: "Jean DUPONT",
    sellerName: "Marie LEFEVRE",
    city: "Montpellier",
    propertyType: "Maison",
    surface: "200m²",
    dpeGrade: "D",
    amount: "520 000 €",
    workflow: { edition: "success", accord: "disabled" },
    aiSuggestions: 2,
  },
};

/** Offre sans DPE ni montant */
export const SansDpeNiMontant: Story = {
  args: {
    useCase: "vente",
    buyerName: "Sophie BERNARD",
    sellerName: "Paul MOREAU",
    city: "Paris",
    propertyType: "Studio",
    surface: "25m²",
    workflow: { edition: "warning", accord: "disabled" },
    aiSuggestions: 0,
  },
};

/** Plusieurs lignes empilées */
export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListPromesse
        useCase="vente"
        buyerName="Nathalie DUFLOT"
        sellerName="Marc LEROY"
        city="Montpellier"
        propertyType="T3"
        surface="85m²"
        dpeGrade="B"
        amount="320 000 €"
        workflow={{ edition: "success", accord: "success" }}
        aiSuggestions={0}
      />
      <ListPromesse
        useCase="vente"
        buyerName="Pierre MARTIN"
        sellerName="Sophie BERNARD"
        city="Lyon"
        propertyType="Maison"
        surface="200m²"
        dpeGrade="A"
        amount="450 000 €"
        workflow={{ edition: "warning", accord: "disabled" }}
        aiSuggestions={1}
      />
      <ListPromesse
        useCase="acquisition"
        buyerName="Jean DUPONT"
        sellerName="Marie LEFEVRE"
        city="Carcassonne"
        propertyType="T3"
        surface="120m²"
        dpeGrade="C"
        amount="185 000 €"
        workflow={{ edition: "success", accord: "disabled" }}
        aiSuggestions={0}
      />
    </div>
  ),
};

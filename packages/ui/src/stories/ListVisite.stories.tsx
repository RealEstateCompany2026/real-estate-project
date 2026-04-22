import type { Meta, StoryObj } from "@storybook/react";
import { ListVisite } from "../components/ListVisite";

const meta: Meta<typeof ListVisite> = {
  title: "Design System/Organisms/ListVisite",
  component: ListVisite,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste visite — titre + infos visite (date, heure, ville, type, surface, DPE, client) + 3 badges workflow (CAL, ODJ, CR) + bouton Voir + suggestions IA.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListVisite>;

/** Visite planifiée avec infos bien complètes */
export const Default: Story = {
  args: {
    date: "12 fév. 2026",
    time: "14h00",
    city: "Montpellier",
    propertyType: "T3",
    surface: "85m²",
    dpeGrade: "B",
    clientName: "Nathalie DUFLOT",
    workflow: { cal: "success", odj: "success", cr: "disabled" },
    aiSuggestions: 0,
  },
};

/** Visite terminée — toutes étapes complétées */
export const Complete: Story = {
  args: {
    date: "5 janv. 2026",
    time: "10h00",
    city: "Lyon",
    propertyType: "Maison",
    surface: "200m²",
    dpeGrade: "A",
    clientName: "Pierre MARTIN",
    workflow: { cal: "success", odj: "success", cr: "success" },
    aiSuggestions: 2,
  },
};

/** Visite en cours de planification */
export const EarlyStage: Story = {
  args: {
    date: "3 mars 2026",
    time: "16h30",
    city: "Carcassonne",
    propertyType: "T2",
    surface: "45m²",
    dpeGrade: "D",
    clientName: "Jean DUPONT",
    workflow: { cal: "warning", odj: "disabled", cr: "disabled" },
    aiSuggestions: 1,
  },
};

/** Visite sans DPE */
export const SansDpe: Story = {
  args: {
    date: "20 avr. 2026",
    time: "09h00",
    city: "Paris",
    propertyType: "Studio",
    surface: "25m²",
    clientName: "Sophie BERNARD",
    workflow: { cal: "success", odj: "warning", cr: "disabled" },
    aiSuggestions: 0,
  },
};

/** Plusieurs lignes empilées */
export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListVisite
        date="12 fév. 2026"
        time="14h00"
        city="Montpellier"
        propertyType="T3"
        surface="85m²"
        dpeGrade="B"
        clientName="Nathalie DUFLOT"
        workflow={{ cal: "success", odj: "success", cr: "disabled" }}
        aiSuggestions={0}
      />
      <ListVisite
        date="5 janv. 2026"
        time="10h00"
        city="Lyon"
        propertyType="Maison"
        surface="200m²"
        dpeGrade="A"
        clientName="Pierre MARTIN"
        workflow={{ cal: "success", odj: "success", cr: "success" }}
        aiSuggestions={2}
      />
      <ListVisite
        date="3 mars 2026"
        time="16h30"
        city="Carcassonne"
        propertyType="T2"
        surface="45m²"
        dpeGrade="D"
        clientName="Jean DUPONT"
        workflow={{ cal: "warning", odj: "disabled", cr: "disabled" }}
        aiSuggestions={1}
      />
    </div>
  ),
};

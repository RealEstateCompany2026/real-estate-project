import type { Meta, StoryObj } from "@storybook/react";
import { ListAffaire } from "../components/ListAffaire";

const meta: Meta<typeof ListAffaire> = {
  title: "Design System/Organisms/ListAffaire",
  component: ListAffaire,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste affaire immobiliere — badge type + chips bien/client + KPI probabilite + CA pondere + zone variable selon dealType.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListAffaire>;

export const Vente: Story = {
  args: {
    dealType: "VENTE",
    reference: "MV-0042",
    status: "EN_COURS",
    propertyType: "T3",
    propertySurface: "85 m²",
    propertyCity: "Montpellier",
    clientName: "Jean Dupont",
    pipelineStage: "PROMOTION",
    winProbability: 45,
    weightedRevenue: "4 500 €",
    leadsCount: 8,
    visitsCount: 3,
    offersCount: 2,
    listingStatus: "success",
    promiseStatus: "disabled",
    aiSuggestions: 3,
  },
};

export const Acquisition: Story = {
  args: {
    dealType: "ACQUISITION",
    reference: "MRA-0018",
    status: "EN_COURS",
    propertyType: "Maison",
    propertyCity: "Lyon",
    clientName: "Marie Martin",
    pipelineStage: "VISITES",
    winProbability: 60,
    weightedRevenue: "7 200 €",
    visitsCount: 5,
    searchStatus: "success",
    applicationsCount: 3,
    applicationResultStatus: "disabled",
    aiSuggestions: 1,
  },
};

export const Location: Story = {
  args: {
    dealType: "LOCATION",
    reference: "MRL-0007",
    status: "EN_COURS",
    clientName: "Pierre Lefèvre",
    pipelineStage: "PROMOTION",
    winProbability: 35,
    weightedRevenue: "840 €",
    visitsCount: 2,
    searchStatus: "warning",
    applicationsCount: 1,
    applicationResultStatus: "disabled",
    aiSuggestions: 2,
  },
};

export const Gestion: Story = {
  args: {
    dealType: "GESTION",
    reference: "MG-0031",
    status: "EN_COURS",
    propertyType: "T4",
    propertySurface: "110 m²",
    propertyCity: "Nîmes",
    clientName: "Sophie Bernard",
    pipelineStage: "GESTION",
    winProbability: 90,
    weightedRevenue: "2 160 €",
    occupancyStatus: "success",
    maintenanceStatus: "disabled",
    aiSuggestions: 0,
  },
};

export const MandatNonSigne: Story = {
  args: {
    dealType: "VENTE",
    reference: "MV-0043",
    status: "EN_COURS",
    pipelineStage: "MANDAT",
    winProbability: 15,
  },
};

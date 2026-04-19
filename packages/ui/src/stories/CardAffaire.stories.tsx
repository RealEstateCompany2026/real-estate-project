import type { Meta, StoryObj } from "@storybook/react";
import { CardAffaire } from "../components/CardAffaire";

const meta: Meta<typeof CardAffaire> = {
  title: "Design System/Organisms/CardAffaire",
  component: CardAffaire,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Card affaire immobilière pour vue Kanban — badge type + chips bien/client + KPI probabilité + CA pondéré + zone variable selon dealType. Layout vertical 350px.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardAffaire>;

export const Vente: Story = {
  args: {
    dealType: "VENTE",
    mandateVariant: "success",
    reference: "MV-0042",
    propertyType: "T3",
    propertySurface: "85 m²",
    propertyCity: "Montpellier",
    propertyPrice: "320 000 €",
    clientName: "Jean Dupont",
    pipelineStage: "PROMOTION",
    winProbability: 45,
    weightedRevenue: "4 500 €",
    lastActivityDate: "15 avr. 2026",
    leadsCount: 8,
    visitsCount: 3,
    listingStatus: "success",
    offerStatus: "disabled",
  },
};

export const Gestion: Story = {
  args: {
    dealType: "GESTION",
    mandateVariant: "success",
    reference: "MG-0031",
    propertyType: "T4",
    propertySurface: "110 m²",
    propertyCity: "Nîmes",
    propertyPrice: "1 200 €/mois",
    clientName: "Sophie Bernard",
    pipelineStage: "GESTION",
    winProbability: 90,
    weightedRevenue: "2 160 €",
    occupancyStatus: "success",
    rentStatus: "success",
    maintenanceStatus: "disabled",
    mandateEndDate: "15 sept. 2027",
  },
};

export const VenteHover: Story = {
  args: {
    ...Vente.args,
    forceHover: true,
  },
};

export const VenteDark: Story = {
  args: {
    ...Vente.args,
    theme: "dark",
  },
};

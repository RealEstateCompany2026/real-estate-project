import type { Meta, StoryObj } from "@storybook/react";
import { ListActeNotarie } from "../components/ListActeNotarie";

const meta: Meta<typeof ListActeNotarie> = {
  title: "Organisms/ListActeNotarie",
  component: ListActeNotarie,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste acte notarié — contact + date + badge statut + bouton voir les notes + AI.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListActeNotarie>;

export const Programme: Story = {
  args: {
    contactName: "Nathalie DUFLOT",
    dateTime: "12 mar 2026 à 17h30",
    status: { label: "PROGRAMMÉ", variant: "warning" },
    aiSuggestions: 0,
  },
};

export const Signe: Story = {
  args: {
    contactName: "Pierre MARTIN",
    dateTime: "5 janv. 2026 à 10h00",
    status: { label: "SIGNÉ", variant: "success" },
    aiSuggestions: 1,
  },
};

export const EnAttente: Story = {
  args: {
    contactName: "Jean DUPONT",
    dateTime: "20 fév. 2026 à 14h00",
    status: { label: "EN ATTENTE", variant: "disabled" },
    aiSuggestions: 0,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListActeNotarie
        contactName="Nathalie DUFLOT"
        dateTime="12 mar 2026 à 17h30"
        status={{ label: "PROGRAMMÉ", variant: "warning" }}
        aiSuggestions={0}
      />
      <ListActeNotarie
        contactName="Pierre MARTIN"
        dateTime="5 janv. 2026 à 10h00"
        status={{ label: "SIGNÉ", variant: "success" }}
        aiSuggestions={1}
      />
      <ListActeNotarie
        contactName="Jean DUPONT"
        dateTime="20 fév. 2026 à 14h00"
        status={{ label: "EN ATTENTE", variant: "disabled" }}
        aiSuggestions={0}
      />
    </div>
  ),
};

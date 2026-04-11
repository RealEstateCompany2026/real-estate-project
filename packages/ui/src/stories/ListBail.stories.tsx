import type { Meta, StoryObj } from "@storybook/react";
import { ListBail } from "../components/ListBail";

const meta: Meta<typeof ListBail> = {
  title: "Design System/Organisms/ListBail",
  component: ListBail,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste bail — contact + type + surface + ville + 3 workflow badges (édition/révision/signature) + bouton voir le bail + AI.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListBail>;

export const ToutValide: Story = {
  args: {
    contactName: "Nathalie DUFLOT",
    propertyType: "T3",
    surface: "120m²",
    city: "Carcassonne",
    workflow: {
      edition: "success",
      revision: "success",
      signature: "success",
    },
    aiSuggestions: 0,
  },
};

export const EnCours: Story = {
  args: {
    contactName: "Pierre MARTIN",
    propertyType: "T2",
    surface: "65m²",
    city: "Toulouse",
    workflow: {
      edition: "success",
      revision: "warning",
      signature: "disabled",
    },
    aiSuggestions: 1,
  },
};

export const AEditer: Story = {
  args: {
    contactName: "Jean DUPONT",
    propertyType: "T4",
    surface: "95m²",
    city: "Montpellier",
    workflow: {
      edition: "warning",
      revision: "disabled",
      signature: "disabled",
    },
    aiSuggestions: 0,
  },
};

export const Erreur: Story = {
  args: {
    contactName: "Marie LEFEVRE",
    propertyType: "Studio",
    surface: "30m²",
    city: "Lyon",
    workflow: {
      edition: "success",
      revision: "error",
      signature: "disabled",
    },
    aiSuggestions: 2,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListBail
        contactName="Nathalie DUFLOT"
        propertyType="T3"
        surface="120m²"
        city="Carcassonne"
        workflow={{ edition: "success", revision: "success", signature: "success" }}
        aiSuggestions={0}
      />
      <ListBail
        contactName="Pierre MARTIN"
        propertyType="T2"
        surface="65m²"
        city="Toulouse"
        workflow={{ edition: "success", revision: "warning", signature: "disabled" }}
        aiSuggestions={1}
      />
      <ListBail
        contactName="Jean DUPONT"
        propertyType="T4"
        surface="95m²"
        city="Montpellier"
        workflow={{ edition: "warning", revision: "disabled", signature: "disabled" }}
        aiSuggestions={0}
      />
    </div>
  ),
};

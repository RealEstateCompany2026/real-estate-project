import type { Meta, StoryObj } from "@storybook/react";
import { ListMandat } from "../components/ListMandat";

const meta: Meta<typeof ListMandat> = {
  title: "Organisms/ListMandat",
  component: ListMandat,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste mandat — référence + 3 badges workflow (édition, révision, signature) + bouton Voir le mandat + suggestions IA.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListMandat>;

export const Default: Story = {
  args: {
    reference: "MV.789.083.263",
    workflow: { edition: "success", revision: "disabled", signature: "disabled" },
    aiSuggestions: 1,
  },
};

export const AllSigned: Story = {
  args: {
    reference: "MV.456.123.789",
    workflow: { edition: "success", revision: "success", signature: "success" },
    aiSuggestions: 0,
  },
};

export const InRevision: Story = {
  args: {
    reference: "ML.321.654.987",
    workflow: { edition: "success", revision: "warning", signature: "disabled" },
    aiSuggestions: 2,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListMandat
        reference="MV.789.083.263"
        workflow={{ edition: "success", revision: "disabled", signature: "disabled" }}
        aiSuggestions={1}
      />
      <ListMandat
        reference="MV.456.123.789"
        workflow={{ edition: "success", revision: "success", signature: "success" }}
        aiSuggestions={0}
      />
      <ListMandat
        reference="ML.321.654.987"
        workflow={{ edition: "success", revision: "warning", signature: "disabled" }}
        aiSuggestions={2}
      />
    </div>
  ),
};

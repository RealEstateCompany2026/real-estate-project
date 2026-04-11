import type { Meta, StoryObj } from "@storybook/react";
import { ListAnnonce } from "../components/ListAnnonce";

const meta: Meta<typeof ListAnnonce> = {
  title: "Organisms/ListAnnonce",
  component: ListAnnonce,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste annonce immobilière — infos bien + propriétaire + 3 badges workflow (édition, révision, publication) + bouton Voir + suggestions IA.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListAnnonce>;

export const Default: Story = {
  args: {
    city: "Montpellier",
    propertyType: "T3",
    surface: "120m²",
    dpeGrade: "A",
    ownerName: "RASTAPOPULOS, Roberto",
    workflow: { edition: "success", revision: "success", publication: "warning" },
    aiSuggestions: 1,
  },
};

export const AllDone: Story = {
  args: {
    city: "Lyon",
    propertyType: "Maison",
    surface: "200m²",
    dpeGrade: "B",
    ownerName: "DUPONT, Marie",
    workflow: { edition: "success", revision: "success", publication: "success" },
    aiSuggestions: 0,
  },
};

export const EarlyStage: Story = {
  args: {
    city: "Paris",
    propertyType: "T2",
    surface: "45m²",
    dpeGrade: "D",
    ownerName: "MARTIN, Jean",
    workflow: { edition: "warning", revision: "disabled", publication: "disabled" },
    aiSuggestions: 3,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListAnnonce
        city="Montpellier"
        propertyType="T3"
        surface="120m²"
        dpeGrade="A"
        ownerName="RASTAPOPULOS, Roberto"
        workflow={{ edition: "success", revision: "success", publication: "warning" }}
        aiSuggestions={1}
      />
      <ListAnnonce
        city="Lyon"
        propertyType="Maison"
        surface="200m²"
        dpeGrade="B"
        ownerName="DUPONT, Marie"
        workflow={{ edition: "success", revision: "success", publication: "success" }}
        aiSuggestions={0}
      />
      <ListAnnonce
        city="Paris"
        propertyType="T2"
        surface="45m²"
        dpeGrade="D"
        ownerName="MARTIN, Jean"
        workflow={{ edition: "warning", revision: "disabled", publication: "disabled" }}
        aiSuggestions={3}
      />
    </div>
  ),
};

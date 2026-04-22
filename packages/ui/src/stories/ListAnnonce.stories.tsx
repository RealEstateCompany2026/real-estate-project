import type { Meta, StoryObj } from "@storybook/react";
import { ListAnnonce } from "../components/ListAnnonce";

const meta: Meta<typeof ListAnnonce> = {
  title: "Design System/Organisms/ListAnnonce",
  component: ListAnnonce,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste annonce immobilière — titre + infos bien + propriétaire + 3 badges workflow + bouton Voir + suggestions IA.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListAnnonce>;

export const Default: Story = {
  args: {
    reference: "000.000.001",
    city: "Montpellier",
    propertyType: "T3",
    surface: "120m²",
    dpeGrade: "A",
    ownerName: "Roberto RASTAPOPULOS",
    workflow: { edition: "success", revision: "success", publication: "warning" },
    aiSuggestions: 1,
  },
};

export const AllDone: Story = {
  args: {
    reference: "000.000.002",
    city: "Lyon",
    propertyType: "Maison",
    surface: "200m²",
    dpeGrade: "B",
    ownerName: "Marie DUPONT",
    workflow: { edition: "success", revision: "success", publication: "success" },
    aiSuggestions: 0,
  },
};

export const EarlyStage: Story = {
  args: {
    reference: "000.000.003",
    city: "Paris",
    propertyType: "T2",
    surface: "45m²",
    dpeGrade: "D",
    ownerName: "Jean MARTIN",
    workflow: { edition: "warning", revision: "disabled", publication: "disabled" },
    aiSuggestions: 3,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListAnnonce
        reference="000.000.001"
        city="Montpellier"
        propertyType="T3"
        surface="120m²"
        dpeGrade="A"
        ownerName="Roberto RASTAPOPULOS"
        workflow={{ edition: "success", revision: "success", publication: "warning" }}
        aiSuggestions={1}
      />
      <ListAnnonce
        reference="000.000.002"
        city="Lyon"
        propertyType="Maison"
        surface="200m²"
        dpeGrade="B"
        ownerName="Marie DUPONT"
        workflow={{ edition: "success", revision: "success", publication: "success" }}
        aiSuggestions={0}
      />
      <ListAnnonce
        reference="000.000.003"
        city="Paris"
        propertyType="T2"
        surface="45m²"
        dpeGrade="D"
        ownerName="Jean MARTIN"
        workflow={{ edition: "warning", revision: "disabled", publication: "disabled" }}
        aiSuggestions={3}
      />
    </div>
  ),
};

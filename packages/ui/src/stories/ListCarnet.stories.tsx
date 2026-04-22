import type { Meta, StoryObj } from "@storybook/react";
import { ListCarnet } from "../components/ListCarnet";

const meta: Meta<typeof ListCarnet> = {
  title: "Design System/Organisms/ListCarnet",
  component: ListCarnet,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste carnet d'entretien — infos bien + propriétaire + statut + date + suggestions IA.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListCarnet>;

export const Default: Story = {
  args: {
    reference: "CE-0042",
    city: "Montpellier",
    propertyType: "T3",
    surface: "120m²",
    dpeGrade: "A",
    ownerName: "RASTAPOPULOS, Roberto",
    status: "active",
    date: "12 fév. 2026",
    aiSuggestions: 1,
  },
};

export const Dormant: Story = {
  args: {
    reference: "CE-0018",
    city: "Lyon",
    propertyType: "Maison",
    surface: "200m²",
    dpeGrade: "D",
    ownerName: "DUPONT, Marie",
    status: "dormant",
    date: "3 janv. 2025",
    aiSuggestions: 0,
  },
};

export const Pending: Story = {
  args: {
    reference: "CE-0007",
    city: "Paris",
    propertyType: "T2",
    surface: "45m²",
    dpeGrade: "C",
    ownerName: "MARTIN, Jean",
    status: "pending",
    date: "8 mars 2026",
    aiSuggestions: 2,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListCarnet
        reference="CE-0042"
        city="Montpellier"
        propertyType="T3"
        surface="120m²"
        dpeGrade="A"
        ownerName="RASTAPOPULOS, Roberto"
        status="active"
        date="12 fév. 2026"
        aiSuggestions={1}
      />
      <ListCarnet
        reference="CE-0018"
        city="Lyon"
        propertyType="Maison"
        surface="200m²"
        dpeGrade="D"
        ownerName="DUPONT, Marie"
        status="dormant"
        date="3 janv. 2025"
        aiSuggestions={0}
      />
      <ListCarnet
        reference="CE-0007"
        city="Paris"
        propertyType="T2"
        surface="45m²"
        dpeGrade="C"
        ownerName="MARTIN, Jean"
        status="pending"
        date="8 mars 2026"
        aiSuggestions={2}
      />
    </div>
  ),
};

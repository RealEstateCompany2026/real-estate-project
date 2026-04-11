import type { Meta, StoryObj } from "@storybook/react";
import { ListBien } from "../components/ListBien";

const meta: Meta<typeof ListBien> = {
  title: "Organisms/ListBien",
  component: ListBien,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste bien immobilier — image + infos + 3 KPIs (qualification, entretien, conversion) + suggestions IA.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListBien>;

const sampleImage =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=320&h=240&fit=crop";

export const Default: Story = {
  args: {
    imageUrl: sampleImage,
    operationType: "VENTE",
    price: "450 000€",
    hasCarnet: true,
    city: "Saint-Jean-de-Vedas",
    propertyType: "T3",
    surface: "120m²",
    dpeGrade: "A",
    kpis: { qualification: 64, entretien: 38, conversion: 24 },
    aiSuggestions: 1,
  },
};

export const Location: Story = {
  args: {
    imageUrl: sampleImage,
    operationType: "LOCATION",
    price: "1 200€/mois",
    hasCarnet: false,
    city: "Montpellier",
    propertyType: "T2",
    surface: "55m²",
    dpeGrade: "C",
    kpis: { qualification: 85, entretien: 72, conversion: 45 },
    aiSuggestions: 3,
  },
};

export const LowScores: Story = {
  args: {
    imageUrl: sampleImage,
    operationType: "VENTE",
    price: "180 000€",
    hasCarnet: false,
    city: "Nîmes",
    propertyType: "T1",
    surface: "32m²",
    dpeGrade: "F",
    kpis: { qualification: 15, entretien: 10, conversion: 5 },
    aiSuggestions: 0,
  },
};

export const NoImage: Story = {
  args: {
    operationType: "VENTE",
    price: "320 000€",
    hasCarnet: true,
    city: "Lyon",
    propertyType: "Maison",
    surface: "95m²",
    dpeGrade: "B",
    kpis: { qualification: 78, entretien: 55, conversion: 60 },
    aiSuggestions: 2,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListBien
        imageUrl={sampleImage}
        operationType="VENTE"
        price="450 000€"
        hasCarnet={true}
        city="Saint-Jean-de-Vedas"
        propertyType="T3"
        surface="120m²"
        dpeGrade="A"
        kpis={{ qualification: 64, entretien: 38, conversion: 24 }}
        aiSuggestions={1}
      />
      <ListBien
        imageUrl={sampleImage}
        operationType="LOCATION"
        price="1 200€/mois"
        hasCarnet={false}
        city="Montpellier"
        propertyType="T2"
        surface="55m²"
        dpeGrade="D"
        kpis={{ qualification: 45, entretien: 72, conversion: 85 }}
        aiSuggestions={3}
      />
      <ListBien
        operationType="VENTE"
        price="180 000€"
        hasCarnet={false}
        city="Nîmes"
        propertyType="T1"
        surface="32m²"
        dpeGrade="G"
        kpis={{ qualification: 15, entretien: 10, conversion: 5 }}
        aiSuggestions={0}
      />
    </div>
  ),
};

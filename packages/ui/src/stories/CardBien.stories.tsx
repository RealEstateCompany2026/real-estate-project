import type { Meta, StoryObj } from "@storybook/react";
import { CardBien } from "../components/CardBien";

const meta: Meta<typeof CardBien> = {
  title: "Design System/Organisms/CardBien",
  component: CardBien,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Carte bien immobilier — image + infos + 3 KPIs (qualification, entretien, conversion) + suggestions IA. Layout vertical.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardBien>;

const sampleImage =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&h=400&fit=crop";

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

export const HighScores: Story = {
  args: {
    imageUrl: sampleImage,
    operationType: "LOCATION",
    price: "1 200€/mois",
    hasCarnet: false,
    city: "Montpellier",
    propertyType: "T2",
    surface: "55m²",
    dpeGrade: "B",
    kpis: { qualification: 92, entretien: 88, conversion: 75 },
    aiSuggestions: 0,
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div className="flex gap-[16px] flex-wrap">
      <CardBien
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
      <CardBien
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
      <CardBien
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

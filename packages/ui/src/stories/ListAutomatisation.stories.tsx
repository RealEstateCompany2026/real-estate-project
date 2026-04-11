import type { Meta, StoryObj } from "@storybook/react";
import { ListAutomatisation } from "../components/ListAutomatisation";

const meta: Meta<typeof ListAutomatisation> = {
  title: "Organisms/ListAutomatisation",
  component: ListAutomatisation,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste automatisation — nom + tags + switch on/off + icon buttons (historique, dupliquer, menu).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListAutomatisation>;

export const Active: Story = {
  args: {
    name: "Relance acquéreur J+7",
    tags: ["Email", "Relance", "J+7"],
    isActive: true,
  },
};

export const Inactive: Story = {
  args: {
    name: "Notification propriétaire mensuelle",
    tags: ["Email", "Rapport"],
    isActive: false,
  },
};

export const SansTags: Story = {
  args: {
    name: "Alerte nouveau bien correspondant",
    tags: [],
    isActive: true,
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListAutomatisation
        name="Relance acquéreur J+7"
        tags={["Email", "Relance", "J+7"]}
        isActive={true}
      />
      <ListAutomatisation
        name="Notification propriétaire mensuelle"
        tags={["Email", "Rapport"]}
        isActive={false}
      />
      <ListAutomatisation
        name="Alerte nouveau bien correspondant"
        tags={["Push", "Matching"]}
        isActive={true}
      />
      <ListAutomatisation
        name="Rappel visite J-1"
        tags={["SMS", "Visite"]}
        isActive={true}
      />
    </div>
  ),
};

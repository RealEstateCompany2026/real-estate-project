import type { Meta, StoryObj } from "@storybook/react";
import { ListBaseDeDonnees } from "../components/ListBaseDeDonnees";

const meta: Meta<typeof ListBaseDeDonnees> = {
  title: "Organisms/ListBaseDeDonnees",
  component: ListBaseDeDonnees,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Ligne de liste import base de données — date + nom de l'import + menu contextuel.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListBaseDeDonnees>;

export const Default: Story = {
  args: {
    date: "26 Jan. 2026",
    name: "Nom de l'import de base de données",
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div className="flex flex-col gap-[8px]">
      <ListBaseDeDonnees
        date="26 Jan. 2026"
        name="Import contacts notaires Carcassonne"
      />
      <ListBaseDeDonnees
        date="15 Déc. 2025"
        name="Export base propriétaires secteur Sud"
      />
      <ListBaseDeDonnees
        date="3 Nov. 2025"
        name="Import CSV clients anciens"
      />
      <ListBaseDeDonnees
        date="18 Sep. 2025"
        name="Synchronisation portail SeLoger"
      />
    </div>
  ),
};

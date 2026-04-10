import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListItemImportSelect, type ListItemImportSelectItem } from "../components/ListItemImportSelect";

const meta: Meta<typeof ListItemImportSelect> = {
  title: "Design System/Molecules/ListItemImportSelect",
  component: ListItemImportSelect,
};

export default meta;
type Story = StoryObj<typeof ListItemImportSelect>;

const mockItems: ListItemImportSelectItem[] = [
  {
    id: "1",
    filename: "clients_export.csv",
    selected: true,
  },
  {
    id: "2",
    filename: "proprietes_mai_2024.xlsx",
    selected: false,
  },
];

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState(mockItems);
    return (
      <div>
        {items.map((item) => (
          <ListItemImportSelect
            key={item.id}
            item={item}
            onSelect={(id, selected) => {
              setItems(
                items.map((i) => (i.id === id ? { ...i, selected } : i))
              );
            }}
          />
        ))}
      </div>
    );
  },
};

export const MultipleItems: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: "1", filename: "clients.csv", selected: true },
      { id: "2", filename: "biens.xlsx", selected: false },
      { id: "3", filename: "affaires.csv", selected: true },
      { id: "4", filename: "data.xlsx", selected: false },
    ]);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item) => (
          <ListItemImportSelect
            key={item.id}
            item={item}
            onSelect={(id, selected) => {
              setItems(
                items.map((i) => (i.id === id ? { ...i, selected } : i))
              );
            }}
          />
        ))}
      </div>
    );
  },
};

export const AllSelected: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: "1", filename: "clients.csv", selected: true },
      { id: "2", filename: "biens.xlsx", selected: true },
      { id: "3", filename: "affaires.csv", selected: true },
    ]);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item) => (
          <ListItemImportSelect
            key={item.id}
            item={item}
            onSelect={(id, selected) => {
              setItems(
                items.map((i) => (i.id === id ? { ...i, selected } : i))
              );
            }}
          />
        ))}
      </div>
    );
  },
};

export const Empty: Story = {
  render: () => <div>Aucun fichier à sélectionner</div>,
};

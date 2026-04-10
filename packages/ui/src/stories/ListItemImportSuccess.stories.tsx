import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListItemImportSuccess, type ListItemImportSuccessItem } from "../components/ListItemImportSuccess";

const meta: Meta<typeof ListItemImportSuccess> = {
  title: "Design System/Molecules/ListItemImportSuccess",
  component: ListItemImportSuccess,
};

export default meta;
type Story = StoryObj<typeof ListItemImportSuccess>;

const mockItems: ListItemImportSuccessItem[] = [
  {
    id: "1",
    filename: "clients_export.csv",
    count: 45,
  },
  {
    id: "2",
    filename: "proprietes_mai_2024.xlsx",
    count: 28,
  },
];

export const Default: Story = {
  args: {
    items: mockItems,
  },
};

export const SingleItem: Story = {
  args: {
    items: [mockItems[0]],
  },
};

export const MultipleItems: Story = {
  args: {
    items: [
      { id: "1", filename: "clients.csv", count: 45 },
      { id: "2", filename: "biens.xlsx", count: 128 },
      { id: "3", filename: "affaires.csv", count: 72 },
      { id: "4", filename: "data.xlsx", count: 1500 },
    ],
  },
};

export const ManyRecords: Story = {
  args: {
    items: [
      { id: "1", filename: "full_export_2024.xlsx", count: 5000 },
      { id: "2", filename: "large_dataset.csv", count: 10000 },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  AppBarCategory,
  AppBarBasic,
  AppBarImport,
  AppBarEventQuinte,
} from "../components/AppBars";
import { Button } from "../components/Button";
import { MessageStatus } from "../components/MessageStatusDot";

const meta: Meta = {
  title: "Design System/Organisms/AppBars",
};
export default meta;

export const Category: StoryObj = {
  render: () => (
    <AppBarCategory
      title="Rubrique"
      category="Tous"
      categoryOpen={false}
      onCategoryClick={() => console.log("Category clicked")}
      showAdd
      onAdd={() => console.log("Add clicked")}
      showSearch
      onSearch={() => console.log("Search clicked")}
    />
  ),
};

export const CategoryOpened: StoryObj = {
  render: () => (
    <AppBarCategory
      title="Biens immobiliers"
      category="À vendre"
      categoryOpen={true}
      onCategoryClick={() => console.log("Category clicked")}
      showAdd
      onAdd={() => console.log("Add clicked")}
      showSearch
      onSearch={() => console.log("Search clicked")}
    />
  ),
};

export const Basic: StoryObj = {
  render: () => (
    <AppBarBasic
      title="Base de données"
      showAdd
      onAdd={() => console.log("Add clicked")}
      showSearch
      onSearch={() => console.log("Search clicked")}
    />
  ),
};

export const BasicWithoutActions: StoryObj = {
  render: () => (
    <AppBarBasic
      title="Clients"
      showAdd={false}
      showSearch={false}
    />
  ),
};

export const Import: StoryObj = {
  render: () => (
    <AppBarImport
      title="Import d'une base de données"
      fileName="clients_export_2026.csv"
      saveLabel="Enregistrer"
      onBack={() => console.log("Back clicked")}
      onSave={() => console.log("Save clicked")}
      saving={false}
    />
  ),
};

export const ImportSaving: StoryObj = {
  render: () => (
    <AppBarImport
      title="Import d'une base de données"
      fileName="clients_export_2026.csv"
      saveLabel="Enregistrement..."
      onBack={() => console.log("Back clicked")}
      onSave={() => console.log("Save clicked")}
      saving={true}
    />
  ),
};

export const ImportWithActions: StoryObj = {
  render: () => (
    <AppBarImport
      title="Import d'une base de données"
      fileName="biens_export_2026.csv"
      saveLabel="Enregistrer"
      onBack={() => console.log("Back clicked")}
      onSave={() => console.log("Save clicked")}
      saving={false}
      actions={<Button variant="secondary">Prévisualiser</Button>}
    />
  ),
};

export const EventStatusIndicators: StoryObj = {
  render: () => {
    const statuses: [MessageStatus, MessageStatus, MessageStatus, MessageStatus, MessageStatus] = [
      "read",
      "unread",
      "sending",
      "delivered",
      "failed",
    ];
    return (
      <div className="bg-surface-neutral-default p-4">
        <AppBarEventQuinte statuses={statuses} />
      </div>
    );
  },
};

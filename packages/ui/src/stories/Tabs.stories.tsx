import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, type Tab } from "../components/Tabs";
import { Home, FileText, User, Settings } from "lucide-react";

const meta: Meta<typeof Tabs> = {
  title: "Design System/Molecules/Tabs",
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const defaultTabs: Tab[] = [
  { id: "details", label: "Détails" },
  { id: "documents", label: "Documents" },
  { id: "historique", label: "Historique" },
];

const tabsWithIcons: Tab[] = [
  { id: "accueil", label: "Accueil", icon: Home },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "contact", label: "Contact", icon: User },
  { id: "parametres", label: "Paramètres", icon: Settings },
];

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("details");
    return (
      <Tabs
        tabs={defaultTabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("accueil");
    return (
      <Tabs
        tabs={tabsWithIcons}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
    );
  },
};

export const WithDisabledTab: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("details");
    const tabsWithDisabled: Tab[] = [
      { id: "details", label: "Détails" },
      { id: "documents", label: "Documents", disabled: true },
      { id: "historique", label: "Historique" },
    ];
    return (
      <Tabs
        tabs={tabsWithDisabled}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
    );
  },
};

export const ManyTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const manyTabs: Tab[] = [
      { id: "tab1", label: "Vue d'ensemble" },
      { id: "tab2", label: "Bien immobilier" },
      { id: "tab3", label: "Acheteur" },
      { id: "tab4", label: "Vendeur" },
      { id: "tab5", label: "Financement" },
      { id: "tab6", label: "Contrats" },
    ];
    return (
      <Tabs
        tabs={manyTabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
    );
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CollapsibleSection } from "../components/CollapsibleSection";

const meta: Meta<typeof CollapsibleSection> = {
  title: "Design System/Molecules/CollapsibleSection",
  component: CollapsibleSection,
};

export default meta;
type Story = StoryObj<typeof CollapsibleSection>;

export const Default: Story = {
  args: {
    title: "Informations personnelles",
    children: (
      <div>
        <p>Nom: Martin Dupont</p>
        <p>Email: martin.dupont@email.com</p>
        <p>Téléphone: +33 6 12 34 56 78</p>
      </div>
    ),
  },
};

export const WithDescription: Story = {
  args: {
    title: "Documents",
    description: "Gérez vos documents importants",
    children: (
      <div>
        <p>Acte de vente</p>
        <p>Attestation de propriété</p>
        <p>Diagnostic immobilier</p>
      </div>
    ),
  },
};

export const WithBadge: Story = {
  args: {
    title: "Contrats",
    badge: "3 nouveaux",
    children: (
      <div>
        <p>Contrat de vente</p>
        <p>Promesse d'achat</p>
        <p>Mandat de vente</p>
      </div>
    ),
  },
};

export const WithCustomBadge: Story = {
  args: {
    title: "Historique",
    badge: <span style={{ color: "green" }}>Actif</span>,
    children: (
      <div>
        <p>Créé le: 15 mars 2024</p>
        <p>Modifié le: 10 avril 2024</p>
      </div>
    ),
  },
};

export const Expanded: Story = {
  args: {
    title: "Paramètres avancés",
    description: "Options de configuration supplémentaires",
    children: (
      <div>
        <p>Notifications: Activées</p>
        <p>Synchronisation: En temps réel</p>
        <p>Sauvegarde: Automatique</p>
      </div>
    ),
  },
};

export const MultipleCollapsible: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <CollapsibleSection
        title="Section 1"
        children={<p>Contenu de la section 1</p>}
      />
      <CollapsibleSection
        title="Section 2"
        children={<p>Contenu de la section 2</p>}
      />
      <CollapsibleSection
        title="Section 3"
        children={<p>Contenu de la section 3</p>}
      />
    </div>
  ),
};

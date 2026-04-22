import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  SheetMandatEdit,
  SheetMandatEditProps,
  EligibilitySection,
} from "../components/SheetMandatEdit";

const meta: Meta<typeof SheetMandatEdit> = {
  title: "Design System/Organisms/SheetMandatEdit",
  component: SheetMandatEdit,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj<typeof SheetMandatEdit>;

// ── Shared mock data factories ─────────────────────────

const agenceValide: EligibilitySection = {
  title: "Agence",
  status: "valid",
  fields: [
    {
      entity: "organization",
      field: "name",
      label: "Raison sociale",
      value: "Immobilier Saint-Germain SAS",
      type: "text",
    },
    {
      entity: "organization",
      field: "siret",
      label: "SIRET",
      value: "812 345 678 00012",
      type: "text",
    },
    {
      entity: "organization",
      field: "rcp",
      label: "Attestation RCP",
      value: "RCP-2025-04872",
      type: "text",
    },
    {
      entity: "organization",
      field: "carteT",
      label: "Carte T",
      value: "CPI 7501 2024 000 042 871",
      type: "text",
    },
  ],
};

const agenceInvalideSiretRcp: EligibilitySection = {
  title: "Agence",
  status: "invalid",
  fields: [
    {
      entity: "organization",
      field: "name",
      label: "Raison sociale",
      value: "Immobilier Saint-Germain SAS",
      type: "text",
    },
    {
      entity: "organization",
      field: "siret",
      label: "SIRET",
      value: null,
      type: "text",
    },
    {
      entity: "organization",
      field: "rcp",
      label: "Attestation RCP",
      value: null,
      type: "text",
    },
    {
      entity: "organization",
      field: "carteT",
      label: "Carte T",
      value: "CPI 7501 2024 000 042 871",
      type: "text",
    },
  ],
};

const agenceInvalideCarteG: EligibilitySection = {
  title: "Agence",
  status: "invalid",
  fields: [
    {
      entity: "organization",
      field: "name",
      label: "Raison sociale",
      value: "Cabinet Dupont Gestion",
      type: "text",
    },
    {
      entity: "organization",
      field: "siret",
      label: "SIRET",
      value: "923 456 789 00034",
      type: "text",
    },
    {
      entity: "organization",
      field: "carteG",
      label: "Carte G",
      value: null,
      type: "text",
    },
    {
      entity: "organization",
      field: "rcp",
      label: "Attestation RCP",
      value: "RCP-2025-07231",
      type: "text",
    },
  ],
};

const clientValide: EligibilitySection = {
  title: "Client",
  status: "valid",
  fields: [
    {
      entity: "client",
      field: "lastName",
      label: "Nom",
      value: "Durand",
      type: "text",
    },
    {
      entity: "client",
      field: "firstName",
      label: "Prenom",
      value: "Marie",
      type: "text",
    },
    {
      entity: "client",
      field: "address",
      label: "Adresse",
      value: "12 rue de la Paix, 75002 Paris",
      type: "text",
    },
    {
      entity: "client",
      field: "email",
      label: "Email",
      value: "m.durand@email.fr",
      type: "text",
    },
  ],
};

const clientInvalideAdresse: EligibilitySection = {
  title: "Client",
  status: "invalid",
  fields: [
    {
      entity: "client",
      field: "lastName",
      label: "Nom",
      value: "Petit",
      type: "text",
    },
    {
      entity: "client",
      field: "firstName",
      label: "Prenom",
      value: "Julien",
      type: "text",
    },
    {
      entity: "client",
      field: "address",
      label: "Adresse",
      value: null,
      type: "text",
    },
    {
      entity: "client",
      field: "email",
      label: "Email",
      value: "j.petit@email.fr",
      type: "text",
    },
  ],
};

const bienValideVente: EligibilitySection = {
  title: "Bien",
  status: "valid",
  fields: [
    {
      entity: "property",
      field: "addressCity",
      label: "Ville",
      value: "Paris",
      type: "text",
    },
    {
      entity: "property",
      field: "propertyType",
      label: "Type de bien",
      value: "APARTMENT",
      type: "select",
      options: [
        { value: "APARTMENT", label: "Appartement" },
        { value: "HOUSE", label: "Maison" },
        { value: "LAND", label: "Terrain" },
        { value: "COMMERCIAL", label: "Local commercial" },
      ],
    },
    {
      entity: "property",
      field: "surface",
      label: "Surface (m2)",
      value: "72",
      type: "number",
    },
    {
      entity: "property",
      field: "prixVente",
      label: "Prix de vente",
      value: "485000",
      type: "number",
    },
    {
      entity: "property",
      field: "nbPieces",
      label: "Nombre de pieces",
      value: "3",
      type: "number",
    },
  ],
};

const bienInvalideVente: EligibilitySection = {
  title: "Bien",
  status: "invalid",
  fields: [
    {
      entity: "property",
      field: "addressCity",
      label: "Ville",
      value: "Lyon",
      type: "text",
    },
    {
      entity: "property",
      field: "propertyType",
      label: "Type de bien",
      value: "APARTMENT",
      type: "select",
      options: [
        { value: "APARTMENT", label: "Appartement" },
        { value: "HOUSE", label: "Maison" },
        { value: "LAND", label: "Terrain" },
        { value: "COMMERCIAL", label: "Local commercial" },
      ],
    },
    {
      entity: "property",
      field: "surface",
      label: "Surface (m2)",
      value: "65",
      type: "number",
    },
    {
      entity: "property",
      field: "prixVente",
      label: "Prix de vente",
      value: null,
      type: "number",
    },
    {
      entity: "property",
      field: "nbPieces",
      label: "Nombre de pieces",
      value: null,
      type: "number",
    },
  ],
};

const bienInvalideSurface: EligibilitySection = {
  title: "Bien",
  status: "invalid",
  fields: [
    {
      entity: "property",
      field: "addressCity",
      label: "Ville",
      value: "Bordeaux",
      type: "text",
    },
    {
      entity: "property",
      field: "propertyType",
      label: "Type de bien",
      value: "APARTMENT",
      type: "select",
      options: [
        { value: "APARTMENT", label: "Appartement" },
        { value: "HOUSE", label: "Maison" },
        { value: "LAND", label: "Terrain" },
        { value: "COMMERCIAL", label: "Local commercial" },
      ],
    },
    {
      entity: "property",
      field: "surface",
      label: "Surface (m2)",
      value: null,
      type: "number",
    },
    {
      entity: "property",
      field: "loyer",
      label: "Loyer mensuel",
      value: "850",
      type: "number",
    },
  ],
};

const rechercheInvalide: EligibilitySection = {
  title: "Recherche",
  status: "invalid",
  fields: [
    {
      entity: "deal",
      field: "budgetMin",
      label: "Budget minimum",
      value: null,
      type: "number",
    },
    {
      entity: "deal",
      field: "budgetMax",
      label: "Budget maximum",
      value: null,
      type: "number",
    },
    {
      entity: "deal",
      field: "secteurRecherche",
      label: "Secteur de recherche",
      value: "Paris 16e, Neuilly-sur-Seine",
      type: "text",
    },
    {
      entity: "deal",
      field: "typeRecherche",
      label: "Type de bien recherche",
      value: "APARTMENT",
      type: "select",
      options: [
        { value: "APARTMENT", label: "Appartement" },
        { value: "HOUSE", label: "Maison" },
        { value: "LAND", label: "Terrain" },
      ],
    },
  ],
};

// ── Stories ─────────────────────────────────────────────

export const VenteIncomplete: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    dealType: "VENTE",
    sections: [agenceInvalideSiretRcp, clientValide, bienInvalideVente],
    onSave: (updates) => console.log("onSave", updates),
  },
};

export const VenteComplete: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    dealType: "VENTE",
    sections: [agenceValide, clientValide, bienValideVente],
    onSave: (updates) => console.log("onSave", updates),
  },
};

export const AcquisitionIncomplete: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    dealType: "ACQUISITION",
    sections: [agenceValide, clientInvalideAdresse, rechercheInvalide],
    onSave: (updates) => console.log("onSave", updates),
  },
};

export const GestionIncomplete: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    dealType: "GESTION",
    sections: [agenceInvalideCarteG, clientValide, bienInvalideSurface],
    onSave: (updates) => console.log("onSave", updates),
  },
};

export const WithRevision: Story = {
  render: (args) => {
    const [revision, setRevision] = useState(true);
    return (
      <SheetMandatEdit
        {...args}
        isRevision={revision}
        onToggleRevision={setRevision}
      />
    );
  },
  args: {
    isOpen: true,
    onClose: () => {},
    dealType: "VENTE",
    sections: [
      agenceInvalideSiretRcp,
      clientValide,
      bienInvalideVente,
    ],
    onSave: (updates) => console.log("onSave", updates),
    isRevision: true,
    onToggleRevision: () => {},
  },
};

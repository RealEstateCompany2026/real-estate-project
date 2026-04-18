import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  FilterPanel,
  type FilterCriterionDef,
  type ActiveFilter,
} from "../components/FilterPanel";
import {
  MapPin,
  Calendar,
  Ruler,
  Euro,
  Users,
  FileText,
  Notebook,
  Home,
  Building2,
  DollarSign,
} from "lucide-react";

const meta: Meta<typeof FilterPanel> = {
  title: "Design System/Organisms/FilterPanel",
  component: FilterPanel,
  parameters: {
    layout: "padded",
  },
};
export default meta;
type Story = StoryObj<typeof FilterPanel>;

// ─── Criteria definitions ──────────────────────────────────────────────────

const CLIENT_CRITERIA: FilterCriterionDef[] = [
  {
    id: "01.01",
    label: "Secteur géographique",
    icon: <MapPin size={18} />,
    type: "location",
    config: { placeholder: "Rechercher une ville..." },
  },
  {
    id: "01.02",
    label: "Âge",
    icon: <Users size={18} />,
    type: "range",
    config: { unit: "ans", min: 18, max: 99, step: 1 },
  },
  {
    id: "01.03",
    label: "Dernière transaction",
    icon: <Calendar size={18} />,
    type: "date",
  },
  {
    id: "01.04",
    label: "Quantité de biens",
    icon: <Home size={18} />,
    type: "range",
    config: { unit: "biens", min: 0, max: 50, step: 1 },
  },
  {
    id: "01.05",
    label: "Mandat en cours",
    icon: <FileText size={18} />,
    type: "enum",
    config: {
      options: [
        { value: "exclusif", label: "Exclusif" },
        { value: "simple", label: "Simple" },
        { value: "semi-exclusif", label: "Semi-exclusif" },
        { value: "aucun", label: "Aucun mandat" },
      ],
    },
  },
  {
    id: "01.06",
    label: "Mandat terminé",
    icon: <FileText size={18} />,
    type: "date",
  },
  {
    id: "01.07",
    label: "Carnet",
    icon: <Notebook size={18} />,
    type: "enum",
    config: {
      options: [
        { value: "actif", label: "Actif" },
        { value: "inactif", label: "Inactif" },
        { value: "prospect", label: "Prospect" },
      ],
    },
  },
];

const BIEN_CRITERIA: FilterCriterionDef[] = [
  {
    id: "02.01",
    label: "Surface",
    icon: <Ruler size={18} />,
    type: "range",
    config: { unit: "m²", min: 0, max: 1000, step: 5 },
  },
  {
    id: "02.02",
    label: "Localisation",
    icon: <MapPin size={18} />,
    type: "location",
    config: { placeholder: "Rechercher une ville..." },
  },
  {
    id: "02.03",
    label: "Prix",
    icon: <Euro size={18} />,
    type: "range",
    config: { unit: "€", min: 0, max: 5000000, step: 10000 },
  },
  {
    id: "02.04",
    label: "Date de construction",
    icon: <Building2 size={18} />,
    type: "date",
  },
];

// ─── Stories ────────────────────────────────────────────────────────────────

export const ClientFilters: Story = {
  render: () => {
    const [filters, setFilters] = useState<ActiveFilter[]>([]);
    const [open, setOpen] = useState(true);

    const handleApply = (filter: ActiveFilter) => {
      setFilters((prev) => {
        const idx = prev.findIndex((f) => f.criterionId === filter.criterionId);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = filter;
          return next;
        }
        return [...prev, filter];
      });
    };

    const handleRemove = (criterionId: string) => {
      setFilters((prev) => prev.filter((f) => f.criterionId !== criterionId));
    };

    return (
      <div className="w-[640px]">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="mb-4 px-4 py-2 bg-surface-branded-action text-content-branded-on-action rounded-lg text-sm font-semibold"
          >
            + Filtres
          </button>
        )}
        {open && (
          <FilterPanel
            criteria={CLIENT_CRITERIA}
            activeFilters={filters}
            onApplyFilter={handleApply}
            onRemoveFilter={handleRemove}
            onClose={() => setOpen(false)}
          />
        )}
      </div>
    );
  },
};

export const BienFilters: Story = {
  render: () => {
    const [filters, setFilters] = useState<ActiveFilter[]>([]);
    const [open, setOpen] = useState(true);

    const handleApply = (filter: ActiveFilter) => {
      setFilters((prev) => {
        const idx = prev.findIndex((f) => f.criterionId === filter.criterionId);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = filter;
          return next;
        }
        return [...prev, filter];
      });
    };

    const handleRemove = (criterionId: string) => {
      setFilters((prev) => prev.filter((f) => f.criterionId !== criterionId));
    };

    return (
      <div className="w-[640px]">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="mb-4 px-4 py-2 bg-surface-branded-action text-content-branded-on-action rounded-lg text-sm font-semibold"
          >
            + Filtres
          </button>
        )}
        {open && (
          <FilterPanel
            criteria={BIEN_CRITERIA}
            activeFilters={filters}
            onApplyFilter={handleApply}
            onRemoveFilter={handleRemove}
            onClose={() => setOpen(false)}
          />
        )}
      </div>
    );
  },
};

export const WithActiveFilters: Story = {
  render: () => {
    const [filters, setFilters] = useState<ActiveFilter[]>([
      {
        criterionId: "01.01",
        label: "Secteur géographique: Paris, Lyon",
        value: ["Paris", "Lyon"],
      },
      {
        criterionId: "01.02",
        label: "Âge: 25–45 ans",
        value: { min: 25, max: 45 },
      },
      {
        criterionId: "01.05",
        label: "Mandat en cours: Exclusif",
        value: ["exclusif"],
      },
    ]);

    const handleApply = (filter: ActiveFilter) => {
      setFilters((prev) => {
        const idx = prev.findIndex((f) => f.criterionId === filter.criterionId);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = filter;
          return next;
        }
        return [...prev, filter];
      });
    };

    const handleRemove = (criterionId: string) => {
      setFilters((prev) => prev.filter((f) => f.criterionId !== criterionId));
    };

    return (
      <div className="w-[640px]">
        <FilterPanel
          criteria={CLIENT_CRITERIA}
          activeFilters={filters}
          onApplyFilter={handleApply}
          onRemoveFilter={handleRemove}
          onClose={() => {}}
        />
      </div>
    );
  },
};

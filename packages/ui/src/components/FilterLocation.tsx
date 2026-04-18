"use client";

import React, { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Checkbox } from "./Checkbox";
import { Chip } from "./Chip";

/**
 * FilterLocation — Molécule DS pour filtres géographiques
 *
 * Champ de recherche + liste multi-select avec Checkbox DS + Chips de sélection.
 * V1 : liste statique de villes françaises en démo.
 */

const DEMO_CITIES = [
  "Paris",
  "Lyon",
  "Marseille",
  "Bordeaux",
  "Lille",
  "Toulouse",
  "Nice",
  "Nantes",
  "Strasbourg",
  "Montpellier",
];

export interface FilterLocationProps {
  label: string;
  placeholder?: string;
  selectedLocations: string[];
  onChange: (locations: string[]) => void;
}

export function FilterLocation({
  label,
  placeholder = "Rechercher une ville...",
  selectedLocations,
  onChange,
}: FilterLocationProps) {
  const [search, setSearch] = useState("");

  const filteredCities = useMemo(() => {
    if (!search.trim()) return DEMO_CITIES;
    const q = search.toLowerCase();
    return DEMO_CITIES.filter((city) => city.toLowerCase().includes(q));
  }, [search]);

  const toggleCity = (city: string) => {
    if (selectedLocations.includes(city)) {
      onChange(selectedLocations.filter((c) => c !== city));
    } else {
      onChange([...selectedLocations, city]);
    }
  };

  const removeCity = (city: string) => {
    onChange(selectedLocations.filter((c) => c !== city));
  };

  const inputClasses =
    "w-full bg-surface-neutral-default border border-edge-default rounded-lg pl-9 pr-3 py-2 text-sm text-content-body placeholder:text-content-caption focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors";

  return (
    <div className="flex flex-col gap-4">
      {/* Title */}
      <h6 className="text-[16px] font-bold leading-[20px] tracking-[0.16px] text-content-headings">
        {label}
      </h6>

      {/* Search input */}
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-content-caption"
        />
        <input
          type="text"
          className={inputClasses}
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* City list with checkboxes */}
      <div className="flex flex-col gap-1 max-h-[200px] overflow-y-auto">
        {filteredCities.map((city) => {
          const isSelected = selectedLocations.includes(city);
          return (
            <button
              key={city}
              type="button"
              className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-surface-neutral-action transition-colors cursor-pointer text-left"
              onClick={() => toggleCity(city)}
            >
              <Checkbox checked={isSelected} />
              <span className="text-sm text-content-body">{city}</span>
            </button>
          );
        })}
        {filteredCities.length === 0 && (
          <p className="text-sm text-content-caption px-2 py-3">
            Aucun résultat
          </p>
        )}
      </div>

      {/* Selected locations as Chips */}
      {selectedLocations.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-edge-divider">
          {selectedLocations.map((city) => (
            <Chip
              key={city}
              label={city}
              size="small"
              icon={
                <X
                  size={14}
                  className="cursor-pointer hover:text-content-headings transition-colors"
                />
              }
              iconPosition="right"
              onClick={() => removeCity(city)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

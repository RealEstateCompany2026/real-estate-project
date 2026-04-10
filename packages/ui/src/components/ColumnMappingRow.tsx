"use client";

import React from "react";
import { Link2, Check, X } from "lucide-react";

/**
 * ColumnMappingRow Component
 *
 * Ligne de mapping entre une colonne source (fichier) et un champ cible (base de données).
 * Utilisé dans le parcours d'import pour associer les colonnes.
 *
 * @component
 * @example
 * <ColumnMappingRow
 *   sourceColumn="nom_client"
 *   targetField="lastName"
 *   options={['firstName', 'lastName', 'email']}
 *   onSelect={(field) => handleMapping('nom_client', field)}
 *   status="success"
 * />
 */

export interface ColumnMappingRowProps {
  /** Nom de la colonne source (depuis le fichier) */
  sourceColumn: string;
  /** Champ cible sélectionné (ou null si non mappé) */
  targetField: string | null;
  /** Liste des champs cibles disponibles */
  options: Array<{ value: string; label: string }>;
  /** Callback lors de la sélection d'un champ */
  onSelect: (field: string | null) => void;
  /** Statut du mapping */
  status?: "success" | "warning" | "error" | "none";
  /** Message d'erreur ou d'avertissement */
  message?: string;
  /** Champ obligatoire */
  required?: boolean;
}

export const ColumnMappingRow: React.FC<ColumnMappingRowProps> = ({
  sourceColumn,
  targetField,
  options,
  onSelect,
  status = "none",
  message,
  required = false,
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case "success":
        return <Check size={16} className="text-icon-success-strong" />;
      case "error":
        return <X size={16} className="text-icon-error-strong" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "success":
        return "border-edge-success-default";
      case "error":
        return "border-edge-error-default";
      case "warning":
        return "border-edge-warning-default";
      default:
        return "border-edge-default";
    }
  };

  return (
    <div className="w-full">
      {/* Mapping Row */}
      <div className={`flex items-center gap-4 p-3 rounded-lg border bg-surface-container ${getStatusColor()}`}>
        {/* Source Column */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono font-medium text-content-strong">
              {sourceColumn}
            </span>
            {required && (
              <span className="text-xs px-1.5 py-0.5 rounded bg-surface-error-subtle text-text-error-strong">
                Requis
              </span>
            )}
          </div>
        </div>

        {/* Mapping Icon */}
        <Link2
          size={20}
          className={status === "success" ? "text-icon-success-default" : "text-icon-subtle"}
        />

        {/* Target Field Selector */}
        <div className="flex-1 min-w-0">
          <select
            value={targetField || ""}
            onChange={(e) => onSelect(e.target.value || null)}
            className="w-full px-3 py-2 rounded-lg border border-edge-default bg-surface-page text-content-body text-sm"
          >
            <option value="">Sélectionner un champ...</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Status Icon */}
        <div className="w-6 flex items-center justify-center">
          {getStatusIcon()}
        </div>
      </div>

      {/* Error/Warning Message */}
      {message && (status === "error" || status === "warning") && (
        <div
          className={`mt-2 px-3 py-2 rounded text-xs ${
            status === "error"
              ? "bg-surface-error-subtle text-text-error-strong"
              : "bg-surface-warning-subtle text-text-warning-strong"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

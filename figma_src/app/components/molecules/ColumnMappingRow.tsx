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
        return <Check size={16} style={{ color: "var(--icon-success-strong)" }} />;
      case "error":
        return <X size={16} style={{ color: "var(--icon-error-strong)" }} />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "success":
        return "var(--border-success-default)";
      case "error":
        return "var(--border-error-default)";
      case "warning":
        return "var(--border-warning-default)";
      default:
        return "var(--border-default)";
    }
  };

  return (
    <div className="w-full">
      {/* Mapping Row */}
      <div
        className="flex items-center gap-4 p-3 rounded-lg border"
        style={{
          borderColor: getStatusColor(),
          backgroundColor: "var(--surface-container)",
        }}
      >
        {/* Source Column */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span
              className="text-sm font-mono font-medium"
              style={{ color: "var(--text-strong)" }}
            >
              {sourceColumn}
            </span>
            {required && (
              <span
                className="text-xs px-1.5 py-0.5 rounded"
                style={{
                  backgroundColor: "var(--surface-error-subtle)",
                  color: "var(--text-error-strong)",
                }}
              >
                Requis
              </span>
            )}
          </div>
        </div>

        {/* Mapping Icon */}
        <Link2
          size={20}
          style={{
            color: status === "success" ? "var(--icon-success-default)" : "var(--icon-subtle)",
          }}
        />

        {/* Target Field Selector */}
        <div className="flex-1 min-w-0">
          <select
            value={targetField || ""}
            onChange={(e) => onSelect(e.target.value || null)}
            className="w-full px-3 py-2 rounded-lg border text-sm"
            style={{
              borderColor: "var(--border-default)",
              backgroundColor: "var(--surface-page)",
              color: "var(--text-body)",
            }}
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
          className="mt-2 px-3 py-2 rounded text-xs"
          style={{
            backgroundColor: status === "error"
              ? "var(--surface-error-subtle)"
              : "var(--surface-warning-subtle)",
            color: status === "error"
              ? "var(--text-error-strong)"
              : "var(--text-warning-strong)",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

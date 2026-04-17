"use client";

/**
 * ORGANISM: ListImport
 *
 * Composant unifié pour les items de liste d'import de données.
 * Fusionne les anciens ListItemImportSelect, ListItemImportSuccess et ListItemImportError.
 *
 * Trois modes via la prop `status`:
 * - "select"  : affiche le nom de table + bouton "Sélectionner"
 * - "success" : affiche le mapping source → cible avec icône check
 * - "error"   : affiche le mapping source → cible avec icône erreur + InlineMessage
 *
 * Figma: Import / ListImport
 */

import { Plus, RefreshCw, Check, X } from "lucide-react";
import { Button, IconButton } from "./Button";
import { ListItemDivider } from "./ListItemDivider";
import { InlineMessage } from "./InlineMessage";

export type ListImportStatus = "select" | "success" | "error";

export interface ListImportProps {
  status: ListImportStatus;
  /** Nom de la table (mode select) ou table source (mode success/error) */
  tableName: string;
  /** Table cible — requis pour success et error */
  targetTableName?: string;
  /** Message d'erreur — requis pour error */
  errorMessage?: string;
  /** Callback sélection (mode select) */
  onSelect?: () => void;
  /** Callback remapping (mode success/error) */
  onRemap?: () => void;
  className?: string;
}

export function ListImport({
  status,
  tableName,
  targetTableName,
  errorMessage,
  onSelect,
  onRemap,
  className = "",
}: ListImportProps) {
  return (
    <div className={className}>
      {/* ---- Select mode ---- */}
      {status === "select" && (
        <div className="flex items-center justify-between gap-6 px-4 py-6 min-h-[80px] bg-surface-page">
          {/* Nom de la table */}
          <div className="w-[360px] shrink-0">
            <p className="text-content-body font-sans text-base leading-base">
              {tableName}
            </p>
          </div>

          {/* Bouton de sélection */}
          {onSelect && (
            <Button
              variant="outlined"
              size="md"
              onClick={onSelect}
              iconLeft={<Plus size={20} />}
            >
              Sélectionner
            </Button>
          )}
        </div>
      )}

      {/* ---- Success mode ---- */}
      {status === "success" && (
        <div className="flex items-center gap-6 px-4 py-6 min-h-[80px] bg-surface-page">
          {/* Nom de la table source */}
          <div className="w-[360px] shrink-0">
            <p className="text-content-body font-sans text-base leading-base">
              {tableName}
            </p>
          </div>

          {/* Bouton de remapping */}
          {onRemap && (
            <IconButton
              icon={<RefreshCw size={20} />}
              variant="neutral"
              size="md"
              onClick={onRemap}
              title="Remapper"
            />
          )}

          {/* Mapping et statut */}
          <div className="flex items-center gap-4 flex-1">
            <div className="w-[160px] shrink-0">
              <p className="text-content-body font-sans text-base leading-base">
                {targetTableName}
              </p>
            </div>
            <Check size={20} className="text-icon-success" strokeWidth={1.5} />
          </div>
        </div>
      )}

      {/* ---- Error mode ---- */}
      {status === "error" && (
        <div className="flex items-start gap-6 px-4 py-2 min-h-[80px] bg-surface-page">
          {/* Nom de la table source */}
          <div className="w-[360px] shrink-0 pt-4">
            <p className="text-content-body font-sans text-base leading-base">
              {tableName}
            </p>
          </div>

          {/* Bouton de remapping */}
          {onRemap && (
            <div className="shrink-0 mt-2">
              <IconButton
                icon={<RefreshCw size={20} />}
                variant="neutral"
                size="md"
                onClick={onRemap}
                title="Remapper"
              />
            </div>
          )}

          {/* Mapping, statut et erreur */}
          <div className="flex items-start gap-4 flex-1">
            <div className="w-[160px] shrink-0 pt-4">
              <p className="text-content-body font-sans text-base leading-base">
                {targetTableName}
              </p>
            </div>

            <div className="flex items-start gap-4 flex-1">
              <div className="shrink-0 pt-4">
                <X size={20} className="text-icon-error" strokeWidth={1.5} />
              </div>

              {errorMessage && (
                <div className="flex-1 pt-2">
                  <InlineMessage type="error" message={errorMessage} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <ListItemDivider />
    </div>
  );
}

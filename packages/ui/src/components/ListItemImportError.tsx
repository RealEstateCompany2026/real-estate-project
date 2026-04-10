/**
 * MOLECULE: ListItemImportError
 *
 * Item de liste pour l'import de données avec erreur
 * Affiche le mapping avec message d'erreur inline
 */

"use client";

import { RefreshCw } from "lucide-react";
import { IconButton } from "./Button";
import { StatusIndicatorIcon } from "./StatusIndicatorIcon";
import { ListItemDivider } from "./ListItemDivider";
import { InlineMessage } from "./InlineMessage";

export interface ListItemImportErrorProps {
  sourceTableName: string;
  targetTableName: string;
  errorMessage: string;
  onRemap?: () => void;
  className?: string;
}

export function ListItemImportError({
  sourceTableName,
  targetTableName,
  errorMessage,
  onRemap,
  className = "",
}: ListItemImportErrorProps) {
  return (
    <div className={className}>
      <div className="flex items-start gap-6 px-4 py-2 min-h-[80px] bg-surface-page">
        {/* Nom de la table source */}
        <div className="flex-shrink-0 pt-4 w-[360px]">
          <p className="text-content-body font-family-var text-base leading-base">
            {sourceTableName}
          </p>
        </div>

        {/* Bouton de remapping */}
        {onRemap && (
          <div className="flex-shrink-0 mt-2">
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
          {/* Nom de la table cible */}
          <div className="flex-shrink-0 pt-4 w-[160px]">
            <p className="text-content-body font-family-var text-base leading-base">
              {targetTableName}
            </p>
          </div>

          <div className="flex items-start gap-4 flex-1">
            {/* Icône d'erreur */}
            <div className="flex-shrink-0 pt-4">
              <StatusIndicatorIcon status="error" size={20} />
            </div>

            {/* Message d'erreur avec InlineMessage */}
            <div className="flex-1 pt-2">
              <InlineMessage type="error" message={errorMessage} />
            </div>
          </div>
        </div>
      </div>

      <ListItemDivider />
    </div>
  );
}

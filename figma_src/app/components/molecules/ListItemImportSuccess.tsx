/**
 * MOLECULE: ListItemImportSuccess
 * 
 * Item de liste pour l'import de données réussi
 * Affiche le mapping entre table source et table de destination avec statut succès
 */

import { RefreshCw } from "lucide-react";
import { IconButton } from "../atoms/Button";
import { StatusIndicatorIcon } from "../atoms/StatusIndicatorIcon";
import { ListItemDivider } from "../atoms/ListItemDivider";

export interface ListItemImportSuccessProps {
  sourceTableName: string;
  targetTableName: string;
  onRemap?: () => void;
  className?: string;
}

export function ListItemImportSuccess({
  sourceTableName,
  targetTableName,
  onRemap,
  className = "",
}: ListItemImportSuccessProps) {
  return (
    <div className={className}>
      <div
        className="flex items-center gap-6 px-4 py-6"
        style={{
          minHeight: "80px",
          backgroundColor: "var(--surface-page)",
        }}
      >
        {/* Nom de la table source */}
        <div
          className="flex-shrink-0"
          style={{
            width: "360px",
          }}
        >
          <p
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--lh-base)",
            }}
          >
            {sourceTableName}
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
          {/* Nom de la table cible */}
          <div
            className="flex-shrink-0"
            style={{
              width: "160px",
            }}
          >
            <p
              style={{
                color: "var(--text-body)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-base)",
                lineHeight: "var(--lh-base)",
              }}
            >
              {targetTableName}
            </p>
          </div>

          {/* Icône de succès */}
          <StatusIndicatorIcon status="success" size={20} />
        </div>
      </div>

      <ListItemDivider />
    </div>
  );
}
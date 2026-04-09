/**
 * MOLECULE: ListItemImportSelect
 * 
 * Item de liste pour la sélection d'import de données
 * Affiche le nom de la table et un bouton de sélection
 */

import { Plus } from "lucide-react";
import { Button } from "../atoms/Button";
import { ListItemDivider } from "../atoms/ListItemDivider";

export interface ListItemImportSelectProps {
  tableName: string;
  onSelect: () => void;
  className?: string;
}

export function ListItemImportSelect({
  tableName,
  onSelect,
  className = "",
}: ListItemImportSelectProps) {
  return (
    <div className={className}>
      <div
        className="flex items-center justify-between px-4 py-6"
        style={{
          minHeight: "80px",
          backgroundColor: "var(--surface-page)",
        }}
      >
        {/* Nom de la table */}
        <div
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
            {tableName}
          </p>
        </div>

        {/* Bouton de sélection */}
        <Button
          variant="outlined"
          size="md"
          onClick={onSelect}
          iconLeft={<Plus size={20} />}
        >
          Sélectionner
        </Button>
      </div>
      
      <ListItemDivider />
    </div>
  );
}
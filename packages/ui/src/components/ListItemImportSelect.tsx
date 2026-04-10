/**
 * MOLECULE: ListItemImportSelect
 *
 * Item de liste pour la sélection d'import de données
 * Affiche le nom de la table et un bouton de sélection
 */

"use client";

import { Plus } from "lucide-react";
import { Button } from "./Button";
import { ListItemDivider } from "./ListItemDivider";

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
      <div className="flex items-center justify-between px-4 py-6 min-h-[80px] bg-surface-page">
        {/* Nom de la table */}
        <div className="w-[360px]">
          <p className="text-content-body font-family-var text-base leading-base">
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

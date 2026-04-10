/**
 * ListFinance - Liste des données financières
 * Molecule du design system RealAgent
 *
 * Affiche les informations financières d'une affaire avec :
 * - Nom du contact
 * - Statut (INCOMPLET, COMPLET, EN_ATTENTE)
 * - Bouton pour voir les notes
 * - Compteur de notes
 */

"use client";

import React from "react";
import { FinanceItem } from "./FinanceItem";

export interface ListFinanceItem {
  id: string;
  name: string;
  status: "INCOMPLET" | "COMPLET" | "EN_ATTENTE";
  notesCount: number;
}

export interface ListFinanceProps {
  items: ListFinanceItem[];
  onViewNotes?: (item: ListFinanceItem) => void;
}

export const ListFinance: React.FC<ListFinanceProps> = ({ items, onViewNotes }) => {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      {items.map((item) => (
        <FinanceItem
          key={item.id}
          name={item.name}
          status={item.status}
          notesCount={item.notesCount}
          onViewNotes={() => onViewNotes?.(item)}
        />
      ))}
    </div>
  );
};

/**
 * ListActeNotarie - Liste des actes notariés
 * Molecule du design system RealAgent
 *
 * Affiche une liste d'actes notariés avec :
 * - Nom du notaire
 * - Date et heure
 * - Statut (PROGRAMME, EN_ATTENTE, SIGNE)
 * - Bouton pour voir les notes
 * - Compteur de suggestions AI
 */

"use client";

import React from "react";
import { ActeNotarieItem } from "./ActeNotarieItem";

export interface ListActeNotarieItem {
  id: string;
  notaireName: string;
  dateTime: string;
  status: "PROGRAMME" | "EN_ATTENTE" | "SIGNE";
  aiSuggestions?: number;
}

export interface ListActeNotarieProps {
  items: ListActeNotarieItem[];
  onViewNotes?: (item: ListActeNotarieItem) => void;
}

export const ListActeNotarie: React.FC<ListActeNotarieProps> = ({ items, onViewNotes }) => {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      {items.map((item) => (
        <ActeNotarieItem
          key={item.id}
          notaireName={item.notaireName}
          dateTime={item.dateTime}
          status={item.status}
          aiSuggestions={item.aiSuggestions}
          onViewNotes={() => onViewNotes?.(item)}
        />
      ))}
    </div>
  );
};

/**
 * ListPromesse - Liste des promesses de vente
 * Molecule du design system RealAgent
 *
 * Affiche une liste de promesses avec leur statut (REÇUE, TRANSMISE, ACCORD)
 * et un bouton pour voir le détail de la promesse
 */

"use client";

import React from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { ArrowRight, User } from "lucide-react";

export interface ListPromesseItem {
  id: string;
  clientName: string;
  recueStatus: "success" | "disabled" | "default";
  transmiseStatus: "success" | "disabled" | "default";
  accordStatus: "success" | "disabled" | "default";
  aiSuggestions?: number;
  onView?: () => void;
}

export interface ListPromesseProps {
  items: ListPromesseItem[];
}

export const ListPromesse: React.FC<ListPromesseProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl px-5 py-3 bg-surface-neutral-default border border-edge-default"
        >
          <div className="flex items-center justify-between">
            {/* Partie gauche : Nom du client */}
            <div className="flex items-center gap-1">
              <User size={20} className="text-icon-neutral-default" />
              <div className="font-roboto font-semibold text-base leading-5 tracking-0.16 text-content-body">
                {item.clientName}
              </div>
            </div>

            {/* Partie droite : Statuts et actions */}
            <div className="flex items-center gap-6">
              {/* Badges de statut */}
              <div className="flex items-center gap-6">
                <Badge variant={item.recueStatus}>
                  REÇUE
                </Badge>
                <Badge variant={item.transmiseStatus}>
                  TRANSMISE
                </Badge>
                <Badge variant={item.accordStatus}>
                  ACCORD
                </Badge>
              </div>

              {/* Button Voir la promesse */}
              <Button
                variant="default"
                iconRight={<ArrowRight size={20} />}
                onClick={item.onView}
              >
                Voir la promesse
              </Button>

              {/* AI Suggestions Badge */}
              <AiSuggestion count={item.aiSuggestions ?? 0} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

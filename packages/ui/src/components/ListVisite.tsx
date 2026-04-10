/**
 * ListVisite - Liste des visites
 * Molecule du design system RealAgent
 *
 * Affiche une liste de visites avec leur statut (CALENDRIER, ODJ, CR)
 * et un bouton pour voir le détail de la visite
 */

"use client";

import React from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { ArrowRight, User, Calendar } from "lucide-react";

export interface ListVisiteItem {
  id: string;
  agentName: string;
  dateTime: string;
  calendrierStatus: "success" | "disabled" | "default";
  odjStatus: "success" | "disabled" | "default";
  crStatus: "success" | "disabled" | "default";
  aiSuggestions?: number;
  onView?: () => void;
}

export interface ListVisiteProps {
  items: ListVisiteItem[];
}

export const ListVisite: React.FC<ListVisiteProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl px-5 py-3 bg-surface-neutral-default border border-edge-default"
        >
          <div className="flex items-center justify-between">
            {/* Partie gauche : Agent et Date/Heure */}
            <div className="flex items-center gap-6">
              {/* Nom de l'agent */}
              <div className="flex items-center gap-1">
                <User size={20} className="text-icon-neutral-default" />
                <div className="font-roboto font-semibold text-base leading-5 tracking-0.16 text-content-body">
                  {item.agentName}
                </div>
              </div>

              {/* Date et heure */}
              <div className="flex items-center gap-1">
                <Calendar size={20} className="text-icon-neutral-default" />
                <div className="font-roboto font-semibold text-base leading-5 tracking-0.16 text-content-body">
                  {item.dateTime}
                </div>
              </div>
            </div>

            {/* Partie droite : Statuts et actions */}
            <div className="flex items-center gap-6">
              {/* Badges de statut */}
              <div className="flex items-center gap-6">
                <Badge variant={item.calendrierStatus}>
                  CALENDRIER
                </Badge>
                <Badge variant={item.odjStatus}>
                  ODJ
                </Badge>
                <Badge variant={item.crStatus}>
                  CR
                </Badge>
              </div>

              {/* Button Voir le rendez-vous */}
              <Button
                variant="default"
                iconRight={<ArrowRight size={20} />}
                onClick={item.onView}
              >
                Voir le rendez-vous
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

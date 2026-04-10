/**
 * ListMandat - Liste des mandats
 * Molecule du design system RealAgent
 *
 * Affiche une liste de mandats avec leur statut (ÉDITION, RÉVISION, SIGNATURE)
 * et un bouton pour voir le détail du mandat
 */

"use client";

import React from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { ArrowRight } from "lucide-react";

export interface ListMandatItem {
  id: string;
  reference: string;
  editionStatus: "success" | "disabled" | "default";
  revisionStatus: "success" | "disabled" | "default";
  signatureStatus: "success" | "disabled" | "default";
  aiSuggestions?: number;
  onView?: () => void;
}

export interface ListMandatProps {
  items: ListMandatItem[];
}

export const ListMandat: React.FC<ListMandatProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl px-5 py-3 bg-surface-neutral-default border border-edge-default"
        >
          <div className="flex items-center justify-between">
            {/* Référence du mandat */}
            <div className="font-roboto font-semibold text-base leading-5 tracking-0.16 text-content-body px-[10px] py-[8px]">
              {item.reference}
            </div>

            {/* Statuts et actions */}
            <div className="flex items-center gap-6">
              {/* Badges de statut */}
              <div className="flex items-center gap-6">
                <Badge variant={item.editionStatus}>
                  ÉDITION
                </Badge>
                <Badge variant={item.revisionStatus}>
                  RÉVISION
                </Badge>
                <Badge variant={item.signatureStatus}>
                  SIGNATURE
                </Badge>
              </div>

              {/* Button Voir le mandat */}
              <Button
                variant="default"
                iconRight={<ArrowRight size={20} />}
                onClick={item.onView}
              >
                Voir le mandat
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

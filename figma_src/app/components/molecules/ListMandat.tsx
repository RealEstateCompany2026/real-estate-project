/**
 * ListMandat - Liste des mandats
 * Molecule du design system RealAgent
 *
 * Affiche une liste de mandats avec leur statut (ÉDITION, RÉVISION, SIGNATURE)
 * et un bouton pour voir le détail du mandat
 */

"use client";

import React from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { AiSuggestion } from "../atoms/AiSuggestion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl px-5 py-3"
          style={{
            backgroundColor: isDark ? "var(--neutral-800)" : "white",
            border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
          }}
        >
          <div className="flex items-center justify-between">
            {/* Référence du mandat */}
            <div
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.16px",
                color: "var(--text-body)",
                padding: "8px 10px",
              }}
            >
              {item.reference}
            </div>

            {/* Statuts et actions */}
            <div className="flex items-center gap-6">
              {/* Badges de statut */}
              <div className="flex items-center gap-6">
                <Badge variant={item.editionStatus} theme={theme}>
                  ÉDITION
                </Badge>
                <Badge variant={item.revisionStatus} theme={theme}>
                  RÉVISION
                </Badge>
                <Badge variant={item.signatureStatus} theme={theme}>
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
              <AiSuggestion count={item.aiSuggestions ?? 0} theme={theme} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

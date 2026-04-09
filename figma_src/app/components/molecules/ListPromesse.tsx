/**
 * ListPromesse - Liste des promesses de vente
 * Molecule du design system RealAgent
 *
 * Affiche une liste de promesses avec leur statut (REÇUE, TRANSMISE, ACCORD)
 * et un bouton pour voir le détail de la promesse
 */

"use client";

import React from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { AiSuggestion } from "../atoms/AiSuggestion";
import { ArrowRight, User } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

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
            {/* Partie gauche : Nom du client */}
            <div className="flex items-center gap-1">
              <User size={20} style={{ color: "var(--text-body)" }} />
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                }}
              >
                {item.clientName}
              </div>
            </div>

            {/* Partie droite : Statuts et actions */}
            <div className="flex items-center gap-6">
              {/* Badges de statut */}
              <div className="flex items-center gap-6">
                <Badge variant={item.recueStatus} theme={theme}>
                  REÇUE
                </Badge>
                <Badge variant={item.transmiseStatus} theme={theme}>
                  TRANSMISE
                </Badge>
                <Badge variant={item.accordStatus} theme={theme}>
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
              <AiSuggestion count={item.aiSuggestions ?? 0} theme={theme} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * ListVisite - Liste des visites
 * Molecule du design system RealAgent
 *
 * Affiche une liste de visites avec leur statut (CALENDRIER, ODJ, CR)
 * et un bouton pour voir le détail de la visite
 */

"use client";

import React from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { AiSuggestion } from "../atoms/AiSuggestion";
import { ArrowRight, User, Calendar } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

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
            {/* Partie gauche : Agent et Date/Heure */}
            <div className="flex items-center gap-6">
              {/* Nom de l'agent */}
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
                  {item.agentName}
                </div>
              </div>

              {/* Date et heure */}
              <div className="flex items-center gap-1">
                <Calendar size={20} style={{ color: "var(--text-body)" }} />
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
                  {item.dateTime}
                </div>
              </div>
            </div>

            {/* Partie droite : Statuts et actions */}
            <div className="flex items-center gap-6">
              {/* Badges de statut */}
              <div className="flex items-center gap-6">
                <Badge variant={item.calendrierStatus} theme={theme}>
                  CALENDRIER
                </Badge>
                <Badge variant={item.odjStatus} theme={theme}>
                  ODJ
                </Badge>
                <Badge variant={item.crStatus} theme={theme}>
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
              <AiSuggestion count={item.aiSuggestions ?? 0} theme={theme} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

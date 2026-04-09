/**
 * AppBarFicheClient - Barre d'en-tête de fiche client
 * Organism du design system RealAgent
 *
 * Construction atomique avec composants du design system.
 * Affiche nom du client, tags, KPI indicators et suggestion IA.
 */

"use client";

import React from "react";
import { ArrowLeft, Database, MessageCircle, ScrollText, Flame } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { Badge } from "../atoms/Badge";
import { KpiIndicator } from "../atoms/KpiIndicator";
import { AiTitleWithBadge } from "../atoms/AiTitleWithBadge";

export interface AppBarFicheClientProps {
  /** Nom du client */
  clientName?: string;
  /** Tags du client */
  tags?: string[];
  /** KPI Qualification (0-100) */
  qualification?: number;
  /** KPI Engagement (0-100) */
  engagement?: number;
  /** KPI Conversion (0-100) */
  conversion?: number;
  /** KPI Réactivation (0-100) */
  reactivation?: number;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback lors du clic sur le bouton retour */
  onBack?: () => void;
}

export const AppBarFicheClient: React.FC<AppBarFicheClientProps> = ({
  clientName = "NOM, Prénom du client",
  tags = ["VENDEUR", "ACQUÉREUR"],
  qualification = 64,
  engagement = 82,
  conversion = 24,
  reactivation = 49,
  aiSuggestions = 1,
  onBack,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const iconColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";

  return (
    <div
      className="h-[100px] flex items-center px-8"
      style={{
        backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
      }}
    >
      <div className="flex items-center gap-6">
        {/* Bouton retour */}
        <button
          onClick={onBack}
          className="p-3 rounded-2xl transition-colors hover:opacity-70"
          style={{
            color: "var(--text-body)",
          }}
        >
          <ArrowLeft size={20} />
        </button>

        {/* Nom du client - H4 Desktop Bold */}
        <h4
          className="whitespace-nowrap"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "34px",
            letterSpacing: "0.28px",
            color: "var(--text-strong)",
          }}
        >
          {clientName}
        </h4>

        {/* Tags */}
        {tags.map((tag, index) => (
          <Badge key={index} variant="default" theme={theme}>
            {tag}
          </Badge>
        ))}

        {/* KPI Qualification */}
        <KpiIndicator
          icon={<Database size={20} style={{ color: iconColor }} />}
          value={`${qualification}%`}
          percentage={qualification}
          variant="straight"
          theme={theme}
        />

        {/* KPI Engagement */}
        <KpiIndicator
          icon={<MessageCircle size={20} style={{ color: iconColor }} />}
          value={`${engagement}%`}
          percentage={engagement}
          variant="straight"
          theme={theme}
        />

        {/* KPI Conversion */}
        <KpiIndicator
          icon={<ScrollText size={20} style={{ color: iconColor }} />}
          value={`${conversion}%`}
          percentage={conversion}
          variant="straight"
          theme={theme}
        />

        {/* KPI Réactivation */}
        <KpiIndicator
          icon={<Flame size={20} style={{ color: iconColor }} />}
          value={`${reactivation}%`}
          percentage={reactivation}
          variant="straight"
          theme={theme}
        />

        {/* Badge IA */}
        {aiSuggestions > 0 && (
          <div
            className="h-6 px-3 rounded-2xl flex items-center justify-center"
            style={{
              backgroundColor: "var(--surface-branded-default)",
              border: `1px solid ${isDark ? "var(--purple-400)" : "var(--purple-600)"}`,
            }}
          >
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "16px",
                letterSpacing: "0.14px",
                color: "var(--neutral-white)",
              }}
            >
              {aiSuggestions}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

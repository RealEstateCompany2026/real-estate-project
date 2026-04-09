/**
 * AppBarFicheBien - Barre d'en-tête de fiche bien
 * Organism du design system RealAgent
 *
 * Construction atomique avec composants du design system.
 * Affiche identifiant du bien, badges, contact, KPI Qualification et suggestion IA.
 */

"use client";

import React from "react";
import { ArrowLeft, User, Database } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { Badge } from "../atoms/Badge";
import { Chip } from "../atoms/Chip";
import { KpiIndicator } from "../atoms/KpiIndicator";

export interface AppBarFicheBienProps {
  /** Identifiant du bien */
  bienId?: string;
  /** Type de transaction (À VENDRE, À LOUER, etc.) */
  transactionType?: string;
  /** Nom du contact/client */
  contactName?: string;
  /** KPI Qualification (0-100) */
  qualification?: number;
  /** Badge CARNET */
  showCarnet?: boolean;
  /** Badge MANDAT */
  showMandat?: boolean;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback lors du clic sur le bouton retour */
  onBack?: () => void;
}

export const AppBarFicheBien: React.FC<AppBarFicheBienProps> = ({
  bienId = "identifiant du bien",
  transactionType = "À VENDRE",
  contactName = "CAPELLO, Jean-François",
  qualification = 64,
  showCarnet = true,
  showMandat = true,
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

        {/* Identifiant du bien - H4 Desktop Bold */}
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
          {bienId}
        </h4>

        {/* Badge type transaction */}
        <Badge variant="default" theme={theme}>
          {transactionType}
        </Badge>

        {/* Chip nom du contact */}
        <Chip size="medium" icon={<User size={20} style={{ color: iconColor }} />}>
          {contactName}
        </Chip>

        {/* KPI Qualification */}
        <KpiIndicator
          icon={<Database size={20} style={{ color: iconColor }} />}
          value={`${qualification}%`}
          percentage={qualification}
          variant="straight"
          theme={theme}
        />

        {/* Badge CARNET */}
        {showCarnet && (
          <Badge variant="success" theme={theme}>
            CARNET
          </Badge>
        )}

        {/* Badge MANDAT */}
        {showMandat && (
          <Badge variant="success" theme={theme}>
            MANDAT
          </Badge>
        )}

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

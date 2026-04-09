/**
 * CardCA - Card pour afficher les données de Chiffre d'Affaires
 * Molecule du design system RealAgent
 *
 * Affiche 4 métriques financières :
 * - Chiffre d'Affaire
 * - Coûts de l'Affaire
 * - Marge Brute
 * - Taux de marge brute
 */

"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";

export interface CardCAProps {
  chiffreAffaire: string;
  couts: string;
  margeBrute: string;
  tauxMarge: string;
}

export const CardCA: React.FC<CardCAProps> = ({
  chiffreAffaire,
  couts,
  margeBrute,
  tauxMarge,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const MetricColumn = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col gap-1 items-start justify-center w-[280px]">
      <div className="px-[10px] py-[8px]">
        <p
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "0.16px",
            color: "var(--text-body)",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </p>
      </div>
      <div className="px-[10px] py-[8px]">
        <p
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "0.16px",
            color: "var(--text-body)",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );

  const VerticalDivider = () => (
    <div
      style={{
        width: "1px",
        height: "84px",
        backgroundColor: isDark ? "var(--neutral-700)" : "var(--neutral-50)",
      }}
    />
  );

  return (
    <div
      className="rounded-2xl px-5 py-3"
      style={{
        backgroundColor: isDark ? "var(--neutral-800)" : "white",
        border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
      }}
    >
      <div className="flex items-start justify-between w-full">
        <MetricColumn label="Chiffre d'Affaire" value={chiffreAffaire} />
        <VerticalDivider />
        <MetricColumn label="Coûts de l'Affaire" value={couts} />
        <VerticalDivider />
        <MetricColumn label="Marge Brute" value={margeBrute} />
        <VerticalDivider />
        <MetricColumn label="Taux de marge brute" value={tauxMarge} />
      </div>
    </div>
  );
};

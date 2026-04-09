/**
 * CardLog - Carte d'activité / log
 * Molecule du design system RealAgent
 * 
 * Affiche une entrée d'activité avec date, heure, auteur, catégorie et description.
 */

"use client";

import React from "react";
import { Badge } from "../atoms/Badge";
import { useTheme } from "../../context/ThemeContext";

export interface CardLogProps {
  /** Date de l'activité */
  date: string;
  /** Heure de l'activité */
  time: string;
  /** Auteur de l'activité */
  author: string;
  /** Catégorie/type d'activité */
  category: string;
  /** Description de l'activité */
  description: string;
  /** Variante de couleur pour la catégorie */
  categoryVariant?: "default" | "primary" | "success" | "warning" | "error";
}

export const CardLog: React.FC<CardLogProps> = ({
  date,
  time,
  author,
  category,
  description,
  categoryVariant = "default",
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="px-[10px] py-[6px]">
      {/* Divider top */}
      <div
        className="h-px mb-2"
        style={{
          backgroundColor: isDark ? "var(--neutral-700)" : "var(--neutral-50)",
        }}
      />

      {/* Contenu */}
      <div className="space-y-2">
        {/* Date et heure */}
        <div className="flex items-center gap-2">
          <div
            className="text-sm font-bold"
            style={{
              color: isDark ? "var(--neutral-200)" : "var(--text-subtle)",
              fontFamily: "Roboto, sans-serif",
              fontSize: "14px",
              lineHeight: "16px",
              letterSpacing: "0.14px",
            }}
          >
            {date}
          </div>
          <div
            className="text-sm font-bold"
            style={{
              color: isDark ? "var(--neutral-200)" : "var(--text-subtle)",
              fontFamily: "Roboto, sans-serif",
              fontSize: "14px",
              lineHeight: "16px",
              letterSpacing: "0.14px",
            }}
          >
            {time}
          </div>
        </div>

        {/* Auteur et catégorie */}
        <div className="flex items-center gap-2">
          <div
            className="text-sm font-bold"
            style={{
              color: "var(--text-body)",
              fontFamily: "Roboto, sans-serif",
              fontSize: "14px",
              lineHeight: "16px",
              letterSpacing: "0.14px",
            }}
          >
            {author}
          </div>
          <Badge variant={categoryVariant} uppercase={true}>
            {category}
          </Badge>
        </div>

        {/* Description */}
        <div
          className="text-sm"
          style={{
            color: "var(--text-body)",
            fontFamily: "Roboto, sans-serif",
            fontSize: "14px",
            lineHeight: "16px",
            letterSpacing: "0.14px",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
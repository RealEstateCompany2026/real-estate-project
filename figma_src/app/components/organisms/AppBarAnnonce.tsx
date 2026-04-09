/**
 * AppBarAnnonce - Barre d'informations de l'annonce immobilière
 * Organism du design system RealAgent
 *
 * Affiche les informations principales de l'annonce : type, surface, année, ville, prix et prix/m²
 * Composé exclusivement d'éléments du design system
 */

"use client";

import React from "react";
import { Building, Square, MapPin, Tag, Compass } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export interface AppBarAnnonceProps {
  /** Type de bien (ex: T4, T3) */
  type?: string;
  /** Surface en m² */
  surface?: string;
  /** Année de construction */
  annee?: string;
  /** Ville */
  ville?: string;
  /** Prix de vente */
  prix?: string;
  /** Prix par m² */
  prixM2?: string;
}

export const AppBarAnnonce: React.FC<AppBarAnnonceProps> = ({
  type = "T4",
  surface = "82 m²",
  annee = "2018",
  ville = "Ville",
  prix = "340 000 €",
  prixM2 = "1 450€ /m2",
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="px-[10px] flex items-center"
      style={{
        backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
        height: "100px",
      }}
    >
      <div className="flex items-center gap-[8px]">
        {/* Type de bien */}
        <div className="flex items-center">
          <div
            className="flex items-center p-3 rounded-2xl"
            style={{
              color: "var(--icon-neutral-default)",
            }}
          >
            <Building size={20} />
          </div>
          <div
            className="flex items-center px-[10px] py-2"
            style={{
              color: "var(--text-headings)",
              fontFamily: "Roboto, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.2px",
            }}
          >
            {type}
          </div>
        </div>

        {/* Surface */}
        <div className="flex items-center">
          <div
            className="flex items-center p-3 rounded-2xl"
            style={{
              color: "var(--icon-neutral-default)",
            }}
          >
            <Square size={20} />
          </div>
          <div
            className="flex items-center px-[10px] py-2"
            style={{
              color: "var(--text-headings)",
              fontFamily: "Roboto, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.2px",
            }}
          >
            {surface}
          </div>
        </div>

        {/* Orientation */}
        <div className="flex items-center">
          <div
            className="flex items-center p-3 rounded-2xl"
            style={{
              color: "var(--icon-neutral-default)",
            }}
          >
            <Compass size={20} />
          </div>
          <div
            className="flex items-center px-[10px] py-2"
            style={{
              color: "var(--text-headings)",
              fontFamily: "Roboto, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.2px",
            }}
          >
            N.E
          </div>
        </div>

        {/* Année */}
        <div className="flex items-center">
          <div
            className="flex items-center p-3 rounded-2xl"
            style={{
              color: "var(--icon-neutral-default)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 5V10L13.3333 11.6667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="flex items-center px-[10px] py-2"
            style={{
              color: "var(--text-headings)",
              fontFamily: "Roboto, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.2px",
            }}
          >
            {annee}
          </div>
        </div>

        {/* Ville */}
        <div className="flex items-center">
          <div
            className="flex items-center p-3 rounded-2xl"
            style={{
              color: "var(--icon-neutral-default)",
            }}
          >
            <MapPin size={20} />
          </div>
          <div
            className="flex items-center px-[10px] py-2"
            style={{
              color: "var(--text-headings)",
              fontFamily: "Roboto, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.2px",
            }}
          >
            {ville}
          </div>
        </div>

        {/* Prix */}
        <div className="flex items-center">
          <div
            className="flex items-center p-3 rounded-2xl"
            style={{
              color: "var(--icon-neutral-default)",
            }}
          >
            <Tag size={20} />
          </div>
          <div
            className="flex items-center px-[10px] py-2"
            style={{
              color: "var(--text-headings)",
              fontFamily: "Roboto, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.2px",
            }}
          >
            {prix}
          </div>
        </div>

        {/* Prix au m² - Sticker */}
        <div
          className="h-5 px-2 py-1 rounded-2xl border border-solid flex items-center"
          style={{
            borderColor: "var(--icon-neutral-default)",
          }}
        >
          <p
            className="font-bold text-xs text-center whitespace-nowrap"
            style={{
              color: "var(--text-body)",
              fontFamily: "Roboto, sans-serif",
              fontSize: "12px",
              lineHeight: "14px",
              letterSpacing: "0.12px",
            }}
          >
            {prixM2}
          </p>
        </div>
      </div>
    </div>
  );
};

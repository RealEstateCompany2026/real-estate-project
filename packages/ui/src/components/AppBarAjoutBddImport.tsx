"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./Button";

/**
 * AppBarAjoutBddImport - Barre d'en-tête du parcours d'import BDD
 * Organism du design system RealAgent
 *
 * Hauteur fixe : 100px. Affiche le titre d'import, le nom du fichier uploadé,
 * et un bouton pour valider l'étape en cours.
 *
 * Figma : "app bar . ajout bdd . import" — h=100px, px=20, py=27, justify-between
 *
 * Composition :
 *   1. Bouton retour (← vers page BDD)
 *   2. Titre "Import d'une base de données" — H4 Bold
 *   3. Nom du fichier uploadé (semibold body)
 *   4. Bouton "Enregistrer >" — primary branded (à droite)
 */

export interface AppBarAjoutBddImportProps {
  /** Titre affiché (par défaut "Import d'une base de données") */
  title?: string;
  /** Nom du fichier uploadé (ex: "contacts_2026.csv") */
  fileName?: string;
  /** Label du bouton de validation (par défaut "Enregistrer") */
  buttonLabel?: string;
  /** Callback retour */
  onBack?: () => void;
  /** Callback clic sur le bouton de validation */
  onSave?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

export function AppBarAjoutBddImport({
  title = "Import d'une base de données",
  fileName,
  buttonLabel = "Enregistrer",
  onBack,
  onSave,
  className = "",
}: AppBarAjoutBddImportProps) {
  return (
    <div
      className={`bg-surface-neutral-default h-[100px] flex items-center justify-between px-[20px] py-[27px] ${className}`.trim()}
    >
      {/* Gauche : retour + titre + nom fichier */}
      <div className="flex gap-[8px] items-center">
        {/* 1. Bouton retour */}
        <button
          type="button"
          onClick={onBack}
          className="p-[12px] rounded-2xl transition-colors hover:opacity-70 text-content-body"
        >
          <ArrowLeft size={20} />
        </button>

        {/* 2. Titre — H4 Bold */}
        <h4 className="whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings px-[10px] py-[10px]">
          {title}
        </h4>

        {/* 3. Nom du fichier */}
        {fileName && (
          <span className="text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap px-[10px] py-[8px]">
            {fileName}
          </span>
        )}
      </div>

      {/* Droite : bouton enregistrer */}
      <Button variant="primary" size="default" onClick={onSave}>
        {buttonLabel}
        <ArrowRight size={20} />
      </Button>
    </div>
  );
}

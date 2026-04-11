"use client";

import React from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "./Button";

/**
 * AppBarFicheAffaireAjout - Barre d'en-tête du formulaire d'ajout d'affaire
 * Organism du design system RealAgent
 *
 * Hauteur fixe : 100px. Layout simple : titre + bouton enregistrer + bouton fermer.
 *
 * Figma : "app bar . fiche affaire . ajout" — h=100px, w=1024px, px=20, py=27
 *
 * Composition :
 *   1. Titre "Ajouter une affaire" — H4 Bold
 *   2. Bouton "Enregistrer >" — primary branded
 *   3. Bouton fermer (✕) — icon button
 */

export interface AppBarFicheAffaireAjoutProps {
  /** Titre affiché (par défaut "Ajouter une affaire") */
  title?: string;
  /** Callback clic sur Enregistrer */
  onSave?: () => void;
  /** Callback clic sur fermer (✕) */
  onClose?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

export function AppBarFicheAffaireAjout({
  title = "Ajouter une affaire",
  onSave,
  onClose,
  className = "",
}: AppBarFicheAffaireAjoutProps) {
  return (
    <div
      className={`bg-surface-neutral-default h-[100px] flex items-center justify-between px-[20px] py-[27px] ${className}`.trim()}
    >
      {/* Gauche : titre */}
      <h4 className="whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings px-[10px] py-[10px]">
        {title}
      </h4>

      {/* Droite : bouton enregistrer + bouton fermer */}
      <div className="flex gap-[24px] items-center">
        <Button variant="primary" size="default" onClick={onSave}>
          Enregistrer
          <ArrowRight size={20} />
        </Button>

        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="p-[12px] rounded-2xl transition-colors hover:opacity-70 text-content-body"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

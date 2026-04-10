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
  const MetricColumn = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col gap-1 items-start justify-center w-[280px]">
      <div className="px-[10px] py-[8px]">
        <p className="font-roboto font-semibold text-base leading-5 tracking-0.16 text-content-body whitespace-nowrap">
          {label}
        </p>
      </div>
      <div className="px-[10px] py-[8px]">
        <p className="font-roboto font-semibold text-base leading-5 tracking-0.16 text-content-body whitespace-nowrap">
          {value}
        </p>
      </div>
    </div>
  );

  const VerticalDivider = () => (
    <div className="w-px h-[84px] bg-edge-default" />
  );

  return (
    <div className="rounded-2xl px-5 py-3 bg-surface-neutral-default border border-edge-default">
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

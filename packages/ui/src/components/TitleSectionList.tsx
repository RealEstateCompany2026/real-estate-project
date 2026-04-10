"use client";

import { ReactNode } from "react";

/**
 * TitleSectionList - Titre de section avec pourcentage aligné à droite
 *
 * Basé sur AtomeTitleSectionList.tsx du design system Figma
 * Couleur: neutral/200 (adapté selon le thème)
 */

export interface TitleSectionListProps {
  children?: ReactNode;
  title?: string;
  percentage?: number;
  width?: number;
  className?: string;
}

export function TitleSectionList({
  children,
  title,
  percentage,
  width = 195,
  className = "",
}: TitleSectionListProps) {
  const content = title || children;

  return (
    <div
      className={`
        relative leading-[20px] not-italic text-[16px] tracking-[0.16px]
        whitespace-nowrap text-neutral-200
        ${className}
      `}
      style={{
        height: "20px",
        width: `${width}px`,
      }}
    >
      <p className="absolute left-0 top-0 font-semibold">{content}</p>
      {percentage !== undefined && (
        <p className="absolute text-right top-0 font-normal" style={{ right: 0 }}>
          {percentage}%
        </p>
      )}
    </div>
  );
}

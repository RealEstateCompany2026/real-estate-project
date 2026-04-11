"use client";

import React from "react";

/**
 * CardLog - Carte d'activité / log
 *
 * Figma: card . logs (node 639:45166)
 *
 * Structure Figma:
 * - Container: flex-col, items-start, px-10 py-6, w-360
 * - Row 1 (date + time): flex items-start
 *   - Date: Body sm Bold (14px/16px), tracking 0.14, color ~neutral-200 → --text-disabled
 *   - Time: same specs
 * - Row 2 (author + badge): flex items-center
 *   - Author: Body sm Bold (14px/16px), --text-body
 *   - Badge sticker: border 1px --border-neutral-default, rounded-16, px-8 py-4
 *     text: xsm Bold (12px/14px), --text-caption
 * - Row 3 (description): Body sm Regular (14px/16px), --text-caption, full width
 *
 * Tokens Layer 3, dark mode auto via .dark class.
 */

export interface CardLogProps {
  /** Date de l'activité (ex: "12 fév. 2026") */
  date: string;
  /** Heure de l'activité (ex: "12:56") */
  time: string;
  /** Auteur de l'activité */
  author: string;
  /** Catégorie/type d'activité */
  category: string;
  /** Description de l'activité */
  description: string;
  className?: string;
}

export const CardLog: React.FC<CardLogProps> = ({
  date,
  time,
  author,
  category,
  description,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-start px-[10px] py-[6px] w-[360px] ${className}`.trim()}
    >
      <div className="flex flex-col items-start w-full">
        {/* Row 1 — Date + Time */}
        <div className="flex items-start">
          <div className="flex items-center px-[10px] py-[8px]">
            <span
              className="text-[14px] font-bold leading-[16px] tracking-[0.14px] whitespace-nowrap"
              style={{ color: "var(--text-disabled)" }}
            >
              {date}
            </span>
          </div>
          <div className="flex items-center px-[10px] py-[8px]">
            <span
              className="text-[14px] font-bold leading-[16px] tracking-[0.14px] whitespace-nowrap"
              style={{ color: "var(--text-disabled)" }}
            >
              {time}
            </span>
          </div>
        </div>

        {/* Row 2 — Author + Category badge */}
        <div className="flex items-center">
          <div className="flex items-center px-[10px] py-[8px]">
            <span
              className="text-[14px] font-bold leading-[16px] tracking-[0.14px] whitespace-nowrap"
              style={{ color: "var(--text-body)" }}
            >
              {author}
            </span>
          </div>
          <div
            className="inline-flex items-center h-[20px] px-[8px] py-[4px]
              rounded-[16px] border border-solid shrink-0"
            style={{ borderColor: "var(--border-neutral-default)" }}
          >
            <span
              className="text-[12px] font-bold leading-[14px] tracking-[0.12px] whitespace-nowrap text-center"
              style={{ color: "var(--text-caption)" }}
            >
              {category}
            </span>
          </div>
        </div>

        {/* Row 3 — Description */}
        <div className="flex items-start px-[10px] py-[8px] w-full">
          <p
            className="text-[14px] font-normal leading-[16px] tracking-[0.14px] flex-1"
            style={{ color: "var(--text-caption)" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

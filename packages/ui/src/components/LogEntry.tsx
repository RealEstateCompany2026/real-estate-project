"use client";

import { Badge } from "./Badge";

/**
 * LogEntry - Composant d'entrée d'historique de logs
 *
 * Affiche une entrée de log avec date, heure, auteur, catégorie et description.
 * Utilisable dans une page ou une sheet modal.
 *
 * Structure:
 * - Divider horizontal (1px, edge-default)
 * - Date + Heure : body sm bold en text-content-subtle
 * - Auteur : body sm bold en text-content-body
 * - Badge : tokens badge default
 * - Description : body sm regular en text-content-body
 *
 * Layout:
 * - Padding: 10px horizontal, 6px vertical
 * - Gap: 8px entre sections
 * - Border-top: 1px solid edge-default
 *
 * Usage:
 * <LogEntry
 *   date="12 fév. 2026"
 *   time="12:56"
 *   author="Jean Dupont"
 *   category="Modification"
 *   description="Lorem ipsum dolor sit amet..."
 * />
 */

export interface LogEntryProps {
  /**
   * Date formatée (ex: "12 fév. 2026")
   */
  date: string;
  /**
   * Heure formatée (ex: "12:56")
   */
  time: string;
  /**
   * Nom de l'auteur de l'action
   */
  author: string;
  /**
   * Catégorie de l'action (ex: "Modification", "Création", "Suppression")
   */
  category: string;
  /**
   * Description détaillée de l'action
   */
  description: string;
  /**
   * Classe CSS personnalisée
   */
  className?: string;
}

export function LogEntry({
  date,
  time,
  author,
  category,
  description,
  className = "",
}: LogEntryProps) {
  return (
    <div className={`relative w-full ${className}`.trim()}>
      <div className="flex flex-col gap-[8px] px-[10px] py-[6px] w-full">
        {/* Content */}
        <div className="flex flex-col w-full">
          {/* Date + Time */}
          <div className="flex items-center">
            <div className="px-[10px] py-[8px]">
              <p className="text-[14px] font-bold tracking-[0.14px] leading-[16px] whitespace-nowrap font-roboto text-content-subtle">
                {date}
              </p>
            </div>
            <div className="px-[10px] py-[8px]">
              <p className="text-[14px] font-bold tracking-[0.14px] leading-[16px] whitespace-nowrap font-roboto text-content-subtle">
                {time}
              </p>
            </div>
          </div>

          {/* Author + Category Badge */}
          <div className="flex items-center">
            <div className="px-[10px] py-[8px]">
              <p className="text-[14px] font-bold tracking-[0.14px] leading-[16px] whitespace-nowrap font-roboto text-content-body">
                {author}
              </p>
            </div>
            <Badge variant="default">
              {category}
            </Badge>
          </div>

          {/* Description */}
          <div className="w-full px-[10px] py-[8px]">
            <p className="text-[14px] font-normal tracking-[0.14px] leading-[16px] font-roboto text-content-body">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

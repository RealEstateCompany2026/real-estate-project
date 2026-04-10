"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * CollapsibleSection Component
 *
 * Section dépliable avec titre et contenu.
 * Utilisé dans les formulaires du parcours Setup.
 *
 * @component
 * @example
 * <CollapsibleSection
 *   title="Identité"
 *   defaultExpanded={true}
 * >
 *   <InputField ... />
 * </CollapsibleSection>
 */

export interface CollapsibleSectionProps {
  /** Titre de la section */
  title: string | React.ReactNode;
  /** Description optionnelle sous le titre */
  description?: string;
  /** Contenu de la section */
  children: React.ReactNode;
  /** État initial (défaut: true) */
  defaultExpanded?: boolean;
  /** Badge optionnel (ex: nombre de champs complétés) */
  badge?: string | React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  description,
  children,
  defaultExpanded = true,
  badge,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="rounded-lg border overflow-hidden bg-surface-neutral-default dark:bg-surface-neutral-700 border-edge-default">
      {/* Header */}
      <button
        className="w-full px-6 py-4 flex items-center justify-between transition-colors hover:bg-surface-neutral-action dark:hover:bg-neutral-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3 flex-1 text-left">
          {/* Title */}
          <h3 className="text-lg font-semibold text-content-strong">
            {title}
          </h3>

          {/* Badge */}
          {badge && (
            typeof badge === "string" ? (
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-surface-branded-subtle text-content-branded-strong">
                {badge}
              </span>
            ) : (
              <>{badge}</>
            )
          )}

          {/* Description */}
          {description && !isExpanded && (
            <span className="text-sm ml-2 text-content-subtle">
              {description}
            </span>
          )}
        </div>

        {/* Icon */}
        {isExpanded ? (
          <ChevronUp
            size={20}
            className="text-icon-neutral-default"
          />
        ) : (
          <ChevronDown
            size={20}
            className="text-icon-neutral-default"
          />
        )}
      </button>

      {/* Content */}
      {isExpanded && (
        <div className="px-6 py-4 border-t border-edge-default">
          {description && (
            <p className="text-sm mb-4 text-content-body">
              {description}
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  );
};

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{
        backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
        borderColor: isDark ? "var(--neutral-700)" : "var(--border-default)",
      }}
    >
      {/* Header */}
      <button
        className="w-full px-6 py-4 flex items-center justify-between transition-colors"
        style={{
          backgroundColor: isExpanded
            ? (isDark ? "var(--neutral-800)" : "var(--neutral-white)")
            : "transparent",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.backgroundColor = isDark 
              ? "var(--neutral-700)" 
              : "var(--neutral-50)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.backgroundColor = "transparent";
          }
        }}
      >
        <div className="flex items-center gap-3 flex-1 text-left">
          {/* Title */}
          <h3
            className="text-lg font-semibold"
            style={{ color: "var(--text-strong)" }}
          >
            {title}
          </h3>

          {/* Badge */}
          {badge && (
            typeof badge === 'string' ? (
              <span
                className="px-2 py-0.5 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "var(--surface-branded-subtle)",
                  color: "var(--text-branded-strong)",
                }}
              >
                {badge}
              </span>
            ) : (
              <>{badge}</>
            )
          )}

          {/* Description */}
          {description && !isExpanded && (
            <span
              className="text-sm ml-2"
              style={{ color: "var(--text-subtle)" }}
            >
              {description}
            </span>
          )}
        </div>

        {/* Icon */}
        {isExpanded ? (
          <ChevronUp size={20} style={{ color: "var(--icon-default)" }} />
        ) : (
          <ChevronDown size={20} style={{ color: "var(--icon-default)" }} />
        )}
      </button>

      {/* Content */}
      {isExpanded && (
        <div
          className="px-6 py-4 border-t"
          style={{
            borderColor: isDark ? "var(--neutral-700)" : "var(--border-default)",
          }}
        >
          {description && (
            <p
              className="text-sm mb-4"
              style={{ color: "var(--text-body)" }}
            >
              {description}
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  );
};
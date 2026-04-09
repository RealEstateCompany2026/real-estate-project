import { Badge } from "../atoms/Badge";
import { useTheme } from "../../context/ThemeContext";

/**
 * LogEntry - Composant d'entrée d'historique de logs
 * 
 * Affiche une entrée de log avec date, heure, auteur, catégorie et description.
 * Utilisable dans une page ou une sheet modal.
 * 
 * Structure:
 * - Divider horizontal (1px, var(--border))
 * - Date + Heure : body sm bold en neutral/200 (light) ou neutral/500 (dark)
 * - Auteur : body sm bold en neutral/500 (light) ou neutral/200 (dark)
 * - Badge : tokens badge default
 * - Description : body sm regular en neutral/500 (light) ou neutral/200 (dark)
 * 
 * Layout:
 * - Padding: 10px horizontal, 6px vertical
 * - Gap: 8px entre sections
 * - Border-top: 1px solid var(--border)
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
  const { theme } = useTheme();

  return (
    <div className={`relative w-full ${className}`.trim()}>
      <div className="flex flex-col gap-[8px] px-[10px] py-[6px] w-full">
        {/* Content */}
        <div className="flex flex-col w-full">
          {/* Date + Time */}
          <div className="flex items-center">
            <div className="px-[10px] py-[8px]">
              <p
                className="text-[14px] font-bold tracking-[0.14px] leading-[16px] whitespace-nowrap"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: theme === "light" ? "var(--neutral-200)" : "var(--neutral-500)",
                }}
              >
                {date}
              </p>
            </div>
            <div className="px-[10px] py-[8px]">
              <p
                className="text-[14px] font-bold tracking-[0.14px] leading-[16px] whitespace-nowrap"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: theme === "light" ? "var(--neutral-200)" : "var(--neutral-500)",
                }}
              >
                {time}
              </p>
            </div>
          </div>

          {/* Author + Category Badge */}
          <div className="flex items-center">
            <div className="px-[10px] py-[8px]">
              <p
                className="text-[14px] font-bold tracking-[0.14px] leading-[16px] whitespace-nowrap"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: theme === "light" ? "var(--neutral-500)" : "var(--neutral-200)",
                }}
              >
                {author}
              </p>
            </div>
            <Badge variant="default" label={category} />
          </div>

          {/* Description */}
          <div className="w-full px-[10px] py-[8px]">
            <p
              className="text-[14px] font-normal tracking-[0.14px] leading-[16px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: theme === "light" ? "var(--neutral-500)" : "var(--neutral-200)",
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
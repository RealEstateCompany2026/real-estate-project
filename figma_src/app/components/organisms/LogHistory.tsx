import { LogEntry, LogEntryProps } from "../molecules/LogEntry";

/**
 * LogHistory - Composant d'historique de logs
 * 
 * Affiche une liste d'entrées de logs avec scroll vertical.
 * Peut être utilisé dans une page ou une sheet modal.
 * 
 * Features:
 * - Affichage de multiples entrées de logs
 * - Scroll vertical automatique si trop d'entrées
 * - Support light/dark mode
 * - Padding et spacing cohérents
 * 
 * Usage:
 * <LogHistory
 *   logs={[
 *     {
 *       date: "12 fév. 2026",
 *       time: "12:56",
 *       author: "Jean Dupont",
 *       category: "Modification",
 *       description: "Lorem ipsum..."
 *     }
 *   ]}
 * />
 */

export interface LogHistoryProps {
  /**
   * Liste des entrées de logs à afficher
   */
  logs: LogEntryProps[];
  /**
   * Hauteur maximale avant scroll (optionnelle)
   */
  maxHeight?: string;
  /**
   * Classe CSS personnalisée
   */
  className?: string;
  /**
   * Afficher un message si aucun log
   */
  emptyMessage?: string;
}

export function LogHistory({
  logs,
  maxHeight,
  className = "",
  emptyMessage = "Aucun historique disponible",
}: LogHistoryProps) {
  if (logs.length === 0) {
    return (
      <div
        className={`relative w-full p-[24px] text-center ${className}`.trim()}
        style={{ backgroundColor: "var(--surface-neutral-default)" }}
      >
        <p
          className="text-[14px] tracking-[0.14px] leading-[16px]"
          style={{
            fontFamily: "Roboto, sans-serif",
            color: "var(--text-placeholder)",
          }}
        >
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-y-auto ${className}`.trim()}
      style={{
        backgroundColor: "var(--surface-neutral-default)",
        maxHeight: maxHeight || "auto",
      }}
    >
      <div className="flex flex-col gap-[15px]">
        {logs.map((log, index) => (
          <LogEntry
            key={index}
            date={log.date}
            time={log.time}
            author={log.author}
            category={log.category}
            description={log.description}
          />
        ))}
      </div>
    </div>
  );
}
/**
 * ATOM: ListItemDivider
 * 
 * Divider horizontal pour séparer les items de liste
 * Utilise uniquement les tokens CSS du design system
 */

interface ListItemDividerProps {
  className?: string;
}

export function ListItemDivider({ className = "" }: ListItemDividerProps) {
  return (
    <div 
      className={`h-px w-full ${className}`}
      style={{ backgroundColor: "var(--border-divider)" }}
    />
  );
}
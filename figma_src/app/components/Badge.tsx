import clsx from "clsx";

/**
 * Badge/Sticker Component
 * Used for status indicators, tags, and labels
 * 
 * Variants:
 * - branded: Purple (client type VENDEUR)
 * - success: Green (active, completed)
 * - error: Red (urgent, error)
 * - warning: Orange (pending, expiring)
 * - info: Blue (informational, ACQUÉREUR)
 * - neutral: Grey (default, inactive)
 */

export type BadgeVariant =
  | "branded"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "neutral";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  uppercase?: boolean;
}

export function Badge({
  variant = "neutral",
  children,
  className,
  uppercase = true,
}: BadgeProps) {
  const getStyles = () => {
    switch (variant) {
      case "branded":
        return {
          backgroundColor: "var(--branded-50, #F2F1FE)",
          color: "var(--text-branded-action, #635CC7)",
          borderColor: "var(--border-branded-default, #B2AEFC)",
        };
      case "success":
        return {
          backgroundColor: "var(--surface-success, #E6F6E5)",
          color: "var(--text-success, #0DA500)",
          borderColor: "var(--border-success, #C3E9BF)",
        };
      case "error":
        return {
          backgroundColor: "var(--surface-error, #FFE5E5)",
          color: "var(--text-error, #FF0000)",
          borderColor: "var(--border-error, #FFBFBF)",
        };
      case "warning":
        return {
          backgroundColor: "var(--surface-warning, #FFF0E5)",
          color: "var(--text-warning, #FF6B00)",
          borderColor: "var(--border-warning, #FFDABF)",
        };
      case "info":
        return {
          backgroundColor: "var(--surface-information, #E5E6FF)",
          color: "var(--text-information, #000AFF)",
          borderColor: "var(--border-information, #BFC2FF)",
        };
      case "neutral":
      default:
        return {
          backgroundColor: "var(--surface-neutral-action, transparent)",
          color: "var(--text-neutral-action, #444955)",
          borderColor: "var(--border, #A1A4AA)",
        };
    }
  };

  const styles = getStyles();

  return (
    <span
      className={clsx(
        "inline-flex items-center px-[8px] py-[4px] border",
        "text-[12px] font-semibold leading-[14px]",
        uppercase && "uppercase",
        className
      )}
      style={{
        ...styles,
        letterSpacing: uppercase ? "0.3px" : "normal",
        borderWidth: "var(--border-width-25)",
        borderRadius: "var(--border-radius-200)",
      }}
    >
      {children}
    </span>
  );
}

/**
 * Status Badge with icon prefix
 */
interface StatusBadgeProps extends BadgeProps {
  icon?: "✓" | "✗" | "⚠️" | "●";
}

export function StatusBadge({ icon, children, ...props }: StatusBadgeProps) {
  return (
    <Badge {...props}>
      {icon && <span className="mr-[4px]">{icon}</span>}
      {children}
    </Badge>
  );
}

/**
 * Client Type Badge (specific styles)
 */
type ClientType = "VENDEUR" | "ACQUÉREUR" | "LOCATAIRE";

interface ClientTypeBadgeProps {
  type: ClientType;
}

export function ClientTypeBadge({ type }: ClientTypeBadgeProps) {
  const variantMap: Record<ClientType, BadgeVariant> = {
    VENDEUR: "branded",
    ACQUÉREUR: "info",
    LOCATAIRE: "warning",
  };

  return <Badge variant={variantMap[type]}>{type}</Badge>;
}

/**
 * Deal Type Badge
 */
type DealType = "VENTE" | "ACQUISITION" | "LOCATION" | "GESTION" | "À VENDRE" | "À LOUER";

interface DealTypeBadgeProps {
  type: DealType;
}

export function DealTypeBadge({ type }: DealTypeBadgeProps) {
  const variantMap: Record<DealType, BadgeVariant> = {
    VENTE: "branded",
    ACQUISITION: "info",
    LOCATION: "warning",
    GESTION: "neutral",
    "À VENDRE": "branded",
    "À LOUER": "warning",
  };

  return <Badge variant={variantMap[type]}>{type}</Badge>;
}
/**
 * Card - Carte de base réutilisable
 * 
 * Conteneur avec border, shadow et background adaptatifs.
 * 
 * Specs:
 * - Border: var(--border-width-25) solid var(--neutral-50) / var(--neutral-800)
 * - Border radius: scale200 (8px), scale300 (12px), scale400 (16px)
 * - Shadow: subtle basée sur tokens
 * - Background: var(--surface-neutral-default)
 * - Padding: configurable via tokens
 * 
 * Usage:
 * <Card>
 *   <h2>Title</h2>
 *   <p>Content</p>
 * </Card>
 * 
 * <Card radius="scale400" padding="scale600">
 *   <CardContent />
 * </Card>
 */

export type CardRadius = "scale200" | "scale300" | "scale400";
export type CardPadding = "scale400" | "scale500" | "scale600" | "scale800";

export interface CardProps {
  /**
   * Border radius
   * @default "scale300"
   */
  radius?: CardRadius;
  /**
   * Padding interne (via tokens)
   * @default "scale400"
   */
  padding?: CardPadding | string;
  /**
   * Afficher la border
   * @default true
   */
  showBorder?: boolean;
  /**
   * Afficher la shadow
   * @default true
   */
  showShadow?: boolean;
  /**
   * Background personnalisé (override le thème)
   */
  background?: string;
  /**
   * Classe CSS supplémentaire
   */
  className?: string;
  /**
   * Callback au clic (rend la card clickable)
   */
  onClick?: () => void;
}

const RADIUS_MAP: Record<CardRadius, string> = {
  scale200: "var(--border-radius-200)",
  scale300: "var(--border-radius-400)", // 12px n'existe pas dans tokens, on use 16px
  scale400: "var(--border-radius-400)",
};

const PADDING_MAP: Record<CardPadding, string> = {
  scale400: "var(--scale-400)",
  scale500: "var(--scale-500)",
  scale600: "var(--scale-600)",
  scale800: "var(--scale-800)",
};

export function Card({
  children,
  radius = "scale300",
  padding = "scale400",
  showBorder = true,
  showShadow = true,
  background,
  className = "",
  onClick,
}: React.PropsWithChildren<CardProps>) {
  // Background via token ou custom
  const backgroundColor = background || "var(--surface-neutral-default)";

  // Border via token
  const border = showBorder
    ? `var(--border-width-25) solid var(--neutral-50)`
    : "none";

  // Shadow subtile
  const boxShadow = showShadow
    ? "0 1px 3px rgba(0, 0, 0, 0.1)"
    : "none";

  // Padding via token ou custom
  const paddingValue = PADDING_MAP[padding as CardPadding] || padding;

  return (
    <div
      className={`
        ${onClick ? "cursor-pointer hover:shadow-lg transition-shadow" : ""}
        ${className}
      `.trim()}
      style={{
        backgroundColor,
        border,
        borderRadius: RADIUS_MAP[radius],
        padding: paddingValue,
        boxShadow,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/**
 * CardHeader - Header de carte avec titre et actions
 */
export interface CardHeaderProps {
  /**
   * Titre de la carte
   */
  title: string;
  /**
   * Sous-titre optionnel
   */
  subtitle?: string;
  /**
   * Actions à droite (boutons, icônes)
   */
  actions?: React.ReactNode;
  /**
   * Classe CSS supplémentaire
   */
  className?: string;
}

export function CardHeader({
  title,
  subtitle,
  actions,
  className = "",
}: CardHeaderProps) {
  return (
    <div
      className={`flex items-center justify-between ${className}`.trim()}
      style={{ marginBottom: "var(--scale-400)" }}
    >
      <div>
        <h3
          className="font-semibold"
          style={{
            color: "var(--text-body)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-h6)",
            lineHeight: "var(--lh-h6)",
          }}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            style={{
              color: "var(--text-caption)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
              marginTop: "var(--scale-100)",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {actions && <div>{actions}</div>}
    </div>
  );
}

/**
 * CardContent - Content de carte avec padding
 */
export interface CardContentProps {
  /**
   * Classe CSS supplémentaire
   */
  className?: string;
}

export function CardContent({
  children,
  className = "",
}: React.PropsWithChildren<CardContentProps>) {
  return <div className={className}>{children}</div>;
}

import { ReactNode } from "react";
import clsx from "clsx";

/**
 * Card Component
 * Container for content sections
 * 
 * Uses design system spacing:
 * - scale200 (8px) radius for most cards
 * - scale400 (16px) radius for prominent cards
 */

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg";
  variant?: "default" | "branded" | "success" | "error" | "warning" | "info";
}

export function Card({
  children,
  className,
  padding = "md",
  radius = "md",
  variant = "default",
}: CardProps) {
  const getPaddingClass = () => {
    switch (padding) {
      case "none":
        return "";
      case "sm":
        return "p-[12px]";
      case "lg":
        return "p-[24px]";
      case "md":
      default:
        return "p-[16px]";
    }
  };

  const getRadiusClass = () => {
    switch (radius) {
      case "sm":
        return "var(--border-radius-200)";
      case "lg":
        return "var(--border-radius-400)";
      case "md":
      default:
        return "var(--border-radius-200)";
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "branded":
        return {
          backgroundColor: "var(--branded-50)",
          borderColor: "var(--border-branded-default)",
        };
      case "success":
        return {
          backgroundColor: "var(--surface-success)",
          borderColor: "var(--border-success)",
        };
      case "error":
        return {
          backgroundColor: "var(--surface-error)",
          borderColor: "var(--border-error)",
        };
      case "warning":
        return {
          backgroundColor: "var(--surface-warning)",
          borderColor: "var(--border-warning)",
        };
      case "info":
        return {
          backgroundColor: "var(--surface-information)",
          borderColor: "var(--border-information)",
        };
      case "default":
      default:
        return {
          backgroundColor: "var(--surface-neutral-default)",
          borderColor: "var(--border)",
        };
    }
  };

  const paddingClass = getPaddingClass();
  const radiusValue = getRadiusClass();
  const variantStyles = getVariantStyles();

  return (
    <div
      className={clsx(
        "border",
        paddingClass,
        className
      )}
      style={{
        ...variantStyles,
        borderWidth: "var(--border-width-25)",
        borderRadius: radiusValue,
      }}
    >
      {children}
    </div>
  );
}

/**
 * CardHeader - Header section of a card
 */
interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
}

export function CardHeader({ title, subtitle, action, className }: CardHeaderProps) {
  return (
    <div className={clsx("flex items-start justify-between mb-[16px]", className)}>
      <div>
        <h5 style={{ color: "var(--text-headings)" }}>{title}</h5>
        {subtitle && (
          <p className="text-[14px] mt-[4px]" style={{ color: "var(--text-caption)" }}>
            {subtitle}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

/**
 * CardSection - Section within a card
 */
interface CardSectionProps {
  children: ReactNode;
  className?: string;
  divider?: boolean;
}

export function CardSection({ children, className, divider = false }: CardSectionProps) {
  return (
    <div
      className={clsx(
        "py-[16px]",
        divider && "border-t",
        className
      )}
      style={{
        borderColor: divider ? "var(--border)" : undefined,
        borderWidth: divider ? "var(--border-width-25)" : undefined,
      }}
    >
      {children}
    </div>
  );
}
import { ReactNode } from "react";
import { ArrowLeft, Search, Plus } from "lucide-react";
import { Link } from "react-router";
import clsx from "clsx";

/**
 * AppBar Component - Top navigation bar
 * 
 * Variants:
 * 1. category - For list pages (Clients, Properties, etc.)
 * 2. detail - For detail pages (Client detail, Property detail, etc.)
 * 3. import - For import flows
 */

interface AppBarProps {
  variant?: "category" | "detail" | "import";
  title: string;
  backTo?: string;
  children?: ReactNode;
  className?: string;
}

export function AppBar({
  variant = "category",
  title,
  backTo,
  children,
  className,
}: AppBarProps) {
  // Gap depends on variant: 8px for category, 24px for detail/import
  const gap = variant === "category" ? "8px" : "24px";

  return (
    <div
      className={clsx(
        "flex items-center px-[24px] py-[16px] border-b",
        className
      )}
      style={{
        backgroundColor: "var(--surface-neutral-default)",
        borderColor: "var(--neutral-50)",
        borderWidth: "var(--border-width-25)",
      }}
    >
      {/* Back button (if backTo provided) */}
      {backTo && (
        <Link
          to={backTo}
          className="mr-[16px] p-[8px] hover:opacity-80 transition-opacity"
          style={{
            color: "var(--icon-neutral-action)",
            borderRadius: "var(--border-radius-200)",
          }}
        >
          <ArrowLeft className="w-[20px] h-[20px]" />
        </Link>
      )}

      {/* Title */}
      <h4 style={{ color: "var(--text-headings)" }}>{title}</h4>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Children (filters, actions, etc.) */}
      {children && (
        <div className="flex items-center" style={{ gap }}>
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * AppBarAction - Action button for AppBar
 */
interface AppBarActionProps {
  icon?: "search" | "add";
  variant?: "neutral" | "branded";
  onClick?: () => void;
  children?: ReactNode;
}

export function AppBarAction({
  icon,
  variant = "neutral",
  onClick,
  children,
}: AppBarActionProps) {
  const IconComponent = icon === "search" ? Search : icon === "add" ? Plus : null;

  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center gap-[8px] px-[16px] py-[8px]",
        "transition-colors hover:opacity-90",
        "font-semibold text-[16px]"
      )}
      style={{
        backgroundColor:
          variant === "branded"
            ? "var(--surface-branded-action)"
            : "var(--surface-neutral-action)",
        color:
          variant === "branded"
            ? "var(--text-neutral-on-action)"
            : "var(--text-neutral-action)",
        borderRadius: "var(--border-radius-200)",
      }}
    >
      {IconComponent && <IconComponent className="w-[20px] h-[20px]" />}
      {children}
    </button>
  );
}

/**
 * AppBarChip - Filter chip for AppBar
 */
interface AppBarChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function AppBarChip({ label, active = false, onClick }: AppBarChipProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-[12px] py-[6px] text-[14px] font-medium",
        "transition-colors hover:opacity-90"
      )}
      style={{
        backgroundColor: active
          ? "var(--surface-branded-action)"
          : "var(--surface-neutral-action)",
        color: active
          ? "var(--text-neutral-on-action)"
          : "var(--text-neutral-action)",
        borderRadius: "var(--border-radius-200)",
      }}
    >
      {label}
    </button>
  );
}
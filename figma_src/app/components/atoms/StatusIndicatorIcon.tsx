/**
 * ATOM: StatusIndicatorIcon
 * 
 * Icône de statut (check, close, etc.) avec code couleur
 * Utilise uniquement les tokens CSS du design system
 */

import { Check, X, AlertCircle } from "lucide-react";

type StatusType = "success" | "error" | "warning";

export interface StatusIndicatorIconProps {
  status: StatusType;
  size?: number;
  className?: string;
}

export function StatusIndicatorIcon({
  status,
  size = 20,
  className = "",
}: StatusIndicatorIconProps) {
  const getStatusColor = () => {
    switch (status) {
      case "success":
        return "var(--icon-success)";
      case "error":
        return "var(--icon-error)";
      case "warning":
        return "var(--icon-warning)";
    }
  };

  const getIcon = () => {
    switch (status) {
      case "success":
        return Check;
      case "error":
        return X;
      case "warning":
        return AlertCircle;
    }
  };

  const Icon = getIcon();

  return (
    <Icon
      size={size}
      className={className}
      style={{ color: getStatusColor() }}
    />
  );
}
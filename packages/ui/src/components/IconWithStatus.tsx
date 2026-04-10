"use client";

import React from "react";

/**
 * IconWithStatus - Icône avec indicateur de statut (point coloré)
 *
 * Specs Figma:
 * - Wraps any icon/avatar with a small status dot
 * - Status dot: 8px, positioned bottom-right
 * - Default status color: success (green-500)
 */

export interface IconWithStatusProps {
  children: React.ReactNode;
  showStatus?: boolean;
  statusColor?: "success" | "error" | "warning" | "neutral";
  className?: string;
}

const statusColorClasses = {
  success: "bg-green-500",
  error: "bg-red-500",
  warning: "bg-orange-500",
  neutral: "bg-neutral-400",
};

export function IconWithStatus({
  children,
  showStatus = true,
  statusColor = "success",
  className = "",
}: IconWithStatusProps) {
  return (
    <div className={`relative inline-flex ${className}`.trim()}>
      {children}
      {showStatus && (
        <div
          className={`absolute -bottom-0.5 -right-0.5 size-2 rounded-full border-2 border-surface-neutral-default ${statusColorClasses[statusColor]}`}
        />
      )}
    </div>
  );
}

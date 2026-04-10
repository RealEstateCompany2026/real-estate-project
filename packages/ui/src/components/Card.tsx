"use client";

import React from "react";

/**
 * Card - Carte conteneur réutilisable
 *
 * Specs Figma:
 * - Border: 1px solid border-default
 * - Border radius: border-radius-200 (8px) / border-radius-400 (16px)
 * - Shadow: subtle drop shadow
 * - Background: surface-neutral-default
 * - Padding: configurable
 */

export type CardRadius = "sm" | "default" | "lg";
export type CardPadding = "sm" | "default" | "lg" | "xl";

export interface CardProps {
  radius?: CardRadius;
  padding?: CardPadding;
  showBorder?: boolean;
  showShadow?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const radiusClasses: Record<CardRadius, string> = {
  sm: "rounded",
  default: "rounded",
  lg: "rounded-lg",
};

const paddingClasses: Record<CardPadding, string> = {
  sm: "p-2",
  default: "p-4",
  lg: "p-6",
  xl: "p-8",
};

export function Card({
  radius = "default",
  padding = "default",
  showBorder = true,
  showShadow = true,
  onClick,
  className = "",
  children,
}: CardProps) {
  return (
    <div
      className={`
        bg-surface-neutral-default
        ${showBorder ? "border border-edge-default" : ""}
        ${showShadow ? "shadow-sm" : ""}
        ${radiusClasses[radius]}
        ${paddingClasses[padding]}
        ${onClick ? "cursor-pointer hover:shadow-md transition-shadow" : ""}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}

export function CardHeader({ title, subtitle, actions, className = "" }: CardHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`.trim()}>
      <div>
        <h3 className="text-h6 font-semibold text-content-body">{title}</h3>
        {subtitle && <p className="text-sm text-content-caption mt-1">{subtitle}</p>}
      </div>
      {actions && <div>{actions}</div>}
    </div>
  );
}

export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

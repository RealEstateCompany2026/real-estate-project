"use client";

import React from "react";
import { Info } from "lucide-react";

/**
 * Label - Label de formulaire
 *
 * Specs Figma:
 * - Font: Roboto Semibold 14px/16px
 * - Letter-spacing: 0.14px
 * - Gap: 8px entre label et icône info
 * - Icône info: 20×20px (Lucide Info)
 * - Required: astérisque rouge
 */

export interface LabelProps {
  label: string;
  icon?: boolean;
  required?: boolean;
  htmlFor?: string;
  className?: string;
}

export function Label({
  label,
  icon = false,
  required = false,
  htmlFor,
  className = "",
}: LabelProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2 relative">
        {required && (
          <span className="text-red-500 text-base absolute -left-2 top-1/2 -translate-y-1/2">*</span>
        )}
        <label
          htmlFor={htmlFor}
          className="text-sm font-semibold text-content-body tracking-wide whitespace-nowrap"
        >
          {label}
        </label>
        {icon && (
          <Info className="size-5 text-content-body" strokeWidth={2} />
        )}
      </div>
    </div>
  );
}

"use client";

import { LucideIcon } from "lucide-react";
import { useState } from "react";

/**
 * TextFieldOutlined - Champ de saisie avec border complet
 *
 * Variante du TextField avec contour complet au lieu de border-bottom.
 *
 * Specs:
 * - Height: 56px (padding 18px × 2 + line 20px)
 * - Padding: 12px (horizontal) × 18px (vertical)
 * - Gap: 8px entre éléments
 * - Border: 1px solid (tous les côtés)
 * - Border-radius: 8px
 * - Icons: 20×20px (Lucide)
 * - Font: Roboto SemiBold 16px/20px
 */

export interface TextFieldOutlinedProps {
  /**
   * Valeur du champ
   */
  value?: string;
  /**
   * Callback appelé quand la valeur change
   */
  onChange?: (value: string) => void;
  /**
   * Texte du placeholder
   */
  placeholder?: string;
  /**
   * Type de champ HTML5
   */
  type?:
    | "text"
    | "email"
    | "tel"
    | "url"
    | "password"
    | "number"
    | "search"
    | "date"
    | "time"
    | "datetime-local";
  /**
   * Icône gauche (Lucide)
   */
  leftIcon?: LucideIcon;
  /**
   * Icône droite (Lucide)
   */
  rightIcon?: LucideIcon;
  /**
   * État erreur (border rouge)
   */
  error?: boolean;
  /**
   * État disabled (non interactif)
   */
  disabled?: boolean;
  /**
   * Nom du champ (pour formulaires)
   */
  name?: string;
  /**
   * ID du champ
   */
  id?: string;
  /**
   * Label accessible (aria-label)
   */
  ariaLabel?: string;
  /**
   * Autocomplete attribute
   */
  autoComplete?: string;
  /**
   * Required field
   */
  required?: boolean;
  /**
   * Max length
   */
  maxLength?: number;
  /**
   * Callback sur focus
   */
  onFocus?: () => void;
  /**
   * Callback sur blur
   */
  onBlur?: () => void;
  className?: string;
}

export function TextFieldOutlined({
  value = "",
  onChange,
  placeholder = "",
  type = "text",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  error = false,
  disabled = false,
  name,
  id,
  ariaLabel,
  autoComplete,
  required = false,
  maxLength,
  onFocus,
  onBlur,
  className = "",
}: TextFieldOutlinedProps) {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (disabled) return "border-edge-disabled";
    if (error) return "border-red-500";
    if (isFocused)
      return "border-edge-neutral-default";
    return "border-edge-disabled";
  };

  const getBackgroundColor = () => {
    if (disabled) return "bg-surface-neutral-action";
    if (error) return "bg-red-50";
    return "bg-surface-neutral-default";
  };

  return (
    <div
      className={`
        text-field-outlined-component
        flex items-center gap-[8px]
        h-[56px] px-[12px] py-[18px]
        border border-solid rounded-[8px]
        transition-all
        ${getBorderColor()}
        ${getBackgroundColor()}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `.trim()}
    >
      {/* Left Icon */}
      {LeftIcon && (
        <div className="shrink-0 w-[20px] h-[20px] flex items-center justify-center text-content-caption">
          <LeftIcon size={20} />
        </div>
      )}

      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        name={name}
        id={id}
        aria-label={ariaLabel}
        autoComplete={autoComplete}
        required={required}
        maxLength={maxLength}
        disabled={disabled}
        onFocus={() => {
          setIsFocused(true);
          onFocus?.();
        }}
        onBlur={() => {
          setIsFocused(false);
          onBlur?.();
        }}
        className={`
          flex-1 bg-transparent text-[16px] leading-[20px]
          placeholder:text-content-subtle
          focus:outline-none
          text-content-body font-semibold
        `}
      />

      {/* Right Icon */}
      {RightIcon && (
        <div className="shrink-0 w-[20px] h-[20px] flex items-center justify-center text-content-caption">
          <RightIcon size={20} />
        </div>
      )}
    </div>
  );
}

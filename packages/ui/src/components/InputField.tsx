"use client";

import { LucideIcon } from "lucide-react";
import { Label } from "./Label";
import { TextField, TextFieldProps } from "./TextField";

/**
 * InputField - Champ de formulaire complet
 *
 * Composant composite : Label + TextField + Hint text (optionnel).
 *
 * Structure Figma:
 * - Label (atome) : label + icône info + required
 * - Field (atome) : TextField
 * - Hint text (optionnel) : texte d'aide
 * - Gap vertical : 12px
 *
 * Usage:
 * <InputField
 *   label="First name"
 *   placeholder="First name"
 *   value={value}
 *   onChange={(value) => setValue(value)}
 *   required={true}
 *   icon={true}
 *   hintText="Enter your first name"
 *   leftIcon={User}
 *   rightIcon={Info}
 * />
 */

export interface InputFieldProps extends Omit<TextFieldProps, "ariaLabel"> {
  /**
   * Label du champ
   */
  label: string;
  /**
   * Afficher l'icône info dans le label
   */
  icon?: boolean;
  /**
   * Champ requis (affiche astérisque rouge)
   */
  required?: boolean;
  /**
   * Texte d'aide sous le champ
   */
  hintText?: string;
  /**
   * Icône gauche du TextField
   */
  leftIcon?: LucideIcon;
  /**
   * Icône droite du TextField
   */
  rightIcon?: LucideIcon;
}

export function InputField({
  label,
  icon = false,
  required = false,
  hintText,
  leftIcon,
  rightIcon,
  id,
  className = "",
  ...textFieldProps
}: InputFieldProps) {
  // Generate unique ID if not provided
  const fieldId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={`flex flex-col gap-[12px] items-start ${className}`.trim()}>
      {/* Label */}
      <Label
        label={label}
        icon={icon}
        required={required}
        htmlFor={fieldId}
      />

      {/* TextField */}
      <TextField
        id={fieldId}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        ariaLabel={label}
        {...textFieldProps}
      />

      {/* Hint text */}
      {hintText && (
        <div className="flex flex-col justify-center leading-[0] not-italic text-[14px] tracking-[0.14px] text-neutral-500 font-roboto">
          <p className="leading-[16px]">{hintText}</p>
        </div>
      )}
    </div>
  );
}

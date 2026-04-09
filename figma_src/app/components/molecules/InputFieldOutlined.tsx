import { LucideIcon } from "lucide-react";
import { Label } from "../atoms/Label";
import { TextFieldOutlined, TextFieldOutlinedProps } from "../atoms/TextFieldOutlined";

/**
 * InputFieldOutlined - Champ de formulaire complet avec border outlined
 * 
 * Composant composite : Label + TextFieldOutlined + Hint text (optionnel).
 * Version outlined du InputField standard.
 * 
 * Structure:
 * - Label (atome) : label + icône info + required
 * - TextFieldOutlined (atome) : champ avec border complet
 * - Hint text (optionnel) : texte d'aide
 * - Gap vertical : 12px
 * 
 * Usage:
 * <InputFieldOutlined
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

export interface InputFieldOutlinedProps extends Omit<TextFieldOutlinedProps, "ariaLabel"> {
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

export function InputFieldOutlined({
  label,
  icon = false,
  required = false,
  hintText,
  leftIcon,
  rightIcon,
  id,
  className = "",
  ...textFieldProps
}: InputFieldOutlinedProps) {
  // Generate unique ID if not provided
  const fieldId = id || `input-outlined-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={`flex flex-col gap-[12px] items-start ${className}`.trim()}>
      {/* Label */}
      <Label
        label={label}
        icon={icon}
        required={required}
        htmlFor={fieldId}
      />

      {/* TextFieldOutlined */}
      <TextFieldOutlined
        id={fieldId}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        ariaLabel={label}
        {...textFieldProps}
      />

      {/* Hint text */}
      {hintText && (
        <div
          className="flex flex-col justify-center leading-[0] not-italic text-[14px] tracking-[0.14px]"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            color: "var(--neutral-500)",
          }}
        >
          <p className="leading-[16px]">{hintText}</p>
        </div>
      )}
    </div>
  );
}

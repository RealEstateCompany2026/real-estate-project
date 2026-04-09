import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../atoms/Label";

export interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  error?: string;
}

/**
 * SelectField - Champ de sélection avec label
 * 
 * Composant molecule qui combine un Select shadcn/ui avec un Label
 * et suit notre design system.
 */
export function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder = "Sélectionner...",
  required = false,
  disabled = false,
  helperText,
  error,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-[12px]">
      {/* Label */}
      <Label
        label={label}
        required={required}
      />

      {/* Select */}
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger
          className="!h-[56px]"
          style={{
            backgroundColor: "var(--surface-container)",
            borderColor: error ? "var(--border-error)" : "var(--border-default)",
            color: "var(--text-body)",
            height: "56px",
          }}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          style={{
            backgroundColor: "var(--surface-container)",
            borderColor: "var(--border-default)",
          }}
        >
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              style={{
                color: "var(--text-body)",
              }}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Helper text or error */}
      {(helperText || error) && (
        <span
          className="text-xs"
          style={{
            color: error ? "var(--text-error)" : "var(--text-subtle)",
          }}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
}
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/**
 * MultiSelect - Liste déroulante à choix multiple
 * 
 * Dropdown permettant la sélection de plusieurs options avec checkboxes.
 * 
 * Specs:
 * - Trigger button: Height 44px, Border-radius 16px, Padding 12px 20px
 * - Dropdown: Border-radius 16px, Padding vertical 8px
 * - Items: Height 48px, Padding 12px 16px
 * - Font: Roboto SemiBold 16px/20px
 * - Checkbox: 20×20px avec checkmark icon
 * - Gap: 12px entre checkbox et label
 * - Max-height dropdown: 320px (scrollable)
 * - Shadow: 1px 1px 8px rgba(0,0,0,0.15)
 * 
 * Light mode:
 * - Trigger bg: white, text: #444955, border: #dadbdd
 * - Dropdown bg: white, border: #dadbdd
 * - Item hover: #ecedee
 * - Selected bg: #ecedee
 * - Checkbox border: #dadbdd
 * - Checkbox checked: #7b72f9 (branded)
 * 
 * Dark mode:
 * - Trigger bg: #333740, text: #d0d1d4, border: #333740
 * - Dropdown bg: #111215, border: #22252b
 * - Item hover: #22252b
 * - Selected bg: #22252b
 * - Checkbox border: #333740
 * - Checkbox checked: #7b72f9 (branded)
 * 
 * Usage:
 * <MultiSelect 
 *   label="Filtrer par type"
 *   options={["Appartement", "Maison", "Terrain", "Commercial"]}
 *   value={selectedValues}
 *   onChange={setSelectedValues}
 * />
 */

export interface MultiSelectProps {
  /**
   * Label affiché dans le bouton
   */
  label: string;
  /**
   * Liste des options disponibles
   */
  options: string[];
  /**
   * Valeurs sélectionnées
   */
  value: string[];
  /**
   * Callback lors du changement de sélection
   */
  onChange: (value: string[]) => void;
  /**
   * Placeholder affiché si aucune sélection
   */
  placeholder?: string;
  /**
   * Désactivé
   */
  disabled?: boolean;
  /**
   * Largeur personnalisée
   */
  width?: string;
  className?: string;
}

export function MultiSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Sélectionner",
  disabled = false,
  width = "280px",
  className = "",
}: MultiSelectProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);

  // Colors
  const triggerBg = isDark ? "var(--neutral-600)" : "white";
  const triggerText = isDark ? "var(--neutral-200)" : "var(--neutral-500)";
  const triggerBorder = isDark ? "var(--neutral-600)" : "var(--neutral-100)";
  const dropdownBg = isDark ? "var(--neutral-800)" : "white";
  const dropdownBorder = isDark ? "var(--neutral-700)" : "var(--neutral-100)";
  const itemHoverBg = isDark ? "var(--neutral-700)" : "var(--neutral-50)";
  const itemText = isDark ? "var(--neutral-200)" : "var(--neutral-500)";
  const checkboxBorder = isDark ? "var(--neutral-600)" : "var(--neutral-100)";
  const checkboxChecked = "#7b72f9"; // branded

  // Toggle option
  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  // Display text
  const displayText = value.length > 0 
    ? `${value.length} sélectionné${value.length > 1 ? "s" : ""}`
    : placeholder;

  return (
    <div className={`relative ${className}`.trim()} style={{ width }}>
      {/* Label */}
      <div className="mb-[8px]">
        <p
          className="text-[14px] leading-[18px] font-semibold"
          style={{
            fontFamily: "Roboto, sans-serif",
            color: isDark ? "var(--neutral-100)" : "var(--neutral-600)",
          }}
        >
          {label}
        </p>
      </div>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`h-[44px] w-full relative rounded-[16px] ${ 
          disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
        } transition-all`.trim()}
        style={{
          backgroundColor: triggerBg,
          border: `1px solid ${triggerBorder}`,
        }}
      >
        <div className="flex items-center justify-between px-[20px] py-[12px] size-full">
          {/* Display text */}
          <p
            className="text-[16px] leading-[20px] font-semibold tracking-[0.16px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: triggerText,
            }}
          >
            {displayText}
          </p>

          {/* Chevron */}
          <ChevronDown
            size={20}
            className="transition-transform duration-200"
            style={{
              color: triggerText,
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && !disabled && (
        <>
          {/* Backdrop to close dropdown */}
          <div
            className="fixed inset-0 z-[100]"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown content */}
          <div
            className="absolute top-[calc(100%+8px)] left-0 w-full z-[101] rounded-[16px] overflow-hidden"
            style={{
              backgroundColor: dropdownBg,
              border: `1px solid ${dropdownBorder}`,
              boxShadow: "1px 1px 8px 0px rgba(0, 0, 0, 0.15)",
              maxHeight: "320px",
              overflowY: "auto",
            }}
          >
            <div className="py-[8px]">
              {options.map((option, index) => {
                const isSelected = value.includes(option);
                
                return (
                  <div
                    key={index}
                    className="h-[48px] px-[16px] flex items-center gap-[12px] cursor-pointer transition-colors group"
                    style={{
                      backgroundColor: isSelected ? itemHoverBg : "transparent",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOption(option);
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = itemHoverBg;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {/* Checkbox */}
                    <div
                      className="size-[20px] rounded-[4px] flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: isSelected ? checkboxChecked : "transparent",
                        border: `1px solid ${isSelected ? checkboxChecked : checkboxBorder}`,
                      }}
                    >
                      {isSelected && (
                        <Check size={14} style={{ color: "white" }} strokeWidth={3} />
                      )}
                    </div>

                    {/* Label */}
                    <p
                      className="text-[16px] leading-[20px] font-semibold tracking-[0.16px] flex-1"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        color: itemText,
                      }}
                    >
                      {option}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/**
 * MultiSelectControlled - Version avec état interne
 * Pour prototypage rapide sans gérer l'état externement
 */
export interface MultiSelectControlledProps {
  label: string;
  options: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  width?: string;
  className?: string;
}

export function MultiSelectControlled({
  label,
  options,
  defaultValue = [],
  onChange,
  placeholder,
  disabled,
  width,
  className,
}: MultiSelectControlledProps) {
  const [value, setValue] = useState<string[]>(defaultValue);

  const handleChange = (newValue: string[]) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <MultiSelect
      label={label}
      options={options}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      width={width}
      className={className}
    />
  );
}

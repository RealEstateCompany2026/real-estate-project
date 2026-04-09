import { useState } from "react";

/**
 * ButtonMultiLabel (Segmented Control)
 * Based on Figma ButtonMultiLabel variants
 * 
 * Structure:
 * - Border-radius: 20px (external corners)
 * - Padding: 6px per button
 * - Font: Roboto 16px/20px
 * - Selected: Bold, background #dadbdd
 * - Unselected: SemiBold, background #ffffff
 * 
 * Usage:
 * <ButtonMultiLabel 
 *   options={["Option 1", "Option 2", "Option 3"]}
 *   value="Option 1"
 *   onChange={(value) => setValue(value)}
 * />
 */

export interface ButtonMultiLabelProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  fullWidth?: boolean;
}

export function ButtonMultiLabel({
  options,
  value,
  onChange,
  className = "",
  fullWidth = false,
}: ButtonMultiLabelProps) {
  const selectedIndex = options.indexOf(value);

  const getButtonStyles = (index: number, isSelected: boolean) => {
    const isFirst = index === 0;
    const isLast = index === options.length - 1;

    return {
      background: isSelected ? "var(--neutral-100)" : "var(--neutral-white)", // Selected: grey, Unselected: white
      color: isSelected ? "var(--neutral-600)" : "var(--neutral-500)", // Selected: dark, Unselected: medium grey
      fontWeight: isSelected ? 700 : 600, // Selected: Bold, Unselected: SemiBold
      borderRadius: isFirst
        ? "20px 0 0 20px" // Left rounded
        : isLast
        ? "0 20px 20px 0" // Right rounded
        : "0", // Middle: no radius
    };
  };

  return (
    <div
      className={`button-multi-label-component inline-flex ${fullWidth ? "w-full" : ""} ${className}`}
      role="group"
      aria-label="Segmented control"
    >
      {options.map((option, index) => {
        const isSelected = index === selectedIndex;
        const styles = getButtonStyles(index, isSelected);
        const isFirst = index === 0;
        const isLast = index === options.length - 1;

        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`
              relative flex items-center justify-center p-[6px] transition-all
              ${fullWidth ? "flex-1" : ""}
              ${isSelected ? "cursor-default" : "cursor-pointer hover:opacity-80"}
            `.trim()}
            style={{
              background: styles.background,
              borderRadius: styles.borderRadius,
              minWidth: "80px",
            }}
            aria-pressed={isSelected}
          >
            {/* Border overlay (Figma structure) */}
            <div
              aria-hidden="true"
              className="absolute border border-solid inset-[-0.5px] pointer-events-none"
              style={{
                borderColor: "var(--neutral-100)",
                borderRadius: isFirst
                  ? "20.5px 0 0 20.5px"
                  : isLast
                  ? "0 20.5px 20.5px 0"
                  : "0",
              }}
            />

            {/* Content wrapper */}
            <div className="flex items-center justify-center px-[10px] py-[8px] relative">
              <p
                className="leading-[20px] text-[16px] tracking-[0.16px] whitespace-nowrap"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: styles.fontWeight,
                  color: styles.color,
                }}
              >
                {option}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

/**
 * ButtonMultiLabelControlled - Version with internal state
 * For quick prototyping without managing state externally
 */
export interface ButtonMultiLabelControlledProps {
  options: string[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  fullWidth?: boolean;
}

export function ButtonMultiLabelControlled({
  options,
  defaultValue,
  onValueChange,
  className = "",
  fullWidth = false,
}: ButtonMultiLabelControlledProps) {
  const [value, setValue] = useState(defaultValue || options[0]);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <ButtonMultiLabel
      options={options}
      value={value}
      onChange={handleChange}
      className={className}
      fullWidth={fullWidth}
    />
  );
}

"use client";

/**
 * ButtonMultiLabel (Segmented Control)
 *
 * Structure:
 * - Border-radius: 20px (external corners)
 * - Padding: 6px per button
 * - Font: Roboto 16px/20px
 * - Selected: Bold, background neutral-100
 * - Unselected: SemiBold, background white
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
      background: isSelected
        ? "bg-neutral-100 dark:bg-neutral-700"
        : "bg-white dark:bg-neutral-800",
      textColor: isSelected
        ? "text-neutral-600 dark:text-neutral-200"
        : "text-neutral-500 dark:text-neutral-400",
      fontWeight: isSelected ? "font-bold" : "font-semibold",
      borderRadius: isFirst
        ? "rounded-l-[16px]"
        : isLast
          ? "rounded-r-[16px]"
          : "rounded-none",
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

        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`
              relative flex items-center justify-center p-[6px]
              transition-all border border-solid border-neutral-100 dark:border-neutral-700
              ${styles.borderRadius}
              ${fullWidth ? "flex-1" : ""}
              ${isSelected ? "cursor-default" : "cursor-pointer hover:opacity-80"}
              ${styles.textColor}
              ${styles.fontWeight}
              text-[16px] leading-[20px] tracking-[0.16px]
              min-w-[80px]
            `}
            style={{
              background: styles.background.split(" ")[1],
            }}
            aria-pressed={isSelected}
          >
            <div className="flex items-center justify-center px-[10px] py-[8px] relative">
              <p className="whitespace-nowrap">{option}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

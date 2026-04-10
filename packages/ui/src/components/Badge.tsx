import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

/**
 * Badge (Sticker) — Aligned with Figma DS (file 09EiMQjcDWgb7MzykS8zU0)
 *
 * Figma name: "atome . sticker"
 * Figma specs: height 20px, padding 4px 8px, border-radius 16px,
 * border 1px, font Roboto Bold 12px/14px, tracking 0.12px, uppercase
 *
 * Figma variants → code mapping:
 *   "Default light/dark"     → default   (border only, neutral text)
 *   "Disabled light/dark"    → disabled  (surface-disabled bg)
 *   "information light/dark" → information (blue/purple bg)
 *   "warning light/dark"     → warning   (orange bg)
 *   "success light/dark"     → success   (green bg)
 *   "error light/dark"       → error     (red bg)
 */
const badgeVariants = cva(
    "inline-flex items-center h-[20px] rounded-lg border px-[8px] py-[4px] text-[12px] leading-[14px] tracking-[0.12px] font-bold text-center whitespace-nowrap uppercase font-roboto transition-colors",
    {
        variants: {
            variant: {
                default:
                    "border-edge-neutral-default text-content-caption bg-transparent",
                disabled:
                    "bg-surface-disabled border-edge-disabled text-content-disabled",
                success:
                    "bg-surface-success border-edge-success text-content-success",
                warning:
                    "bg-surface-warning border-edge-warning text-content-warning",
                information:
                    "bg-surface-information border-edge-information text-content-information",
                error:
                    "bg-surface-error border-edge-error text-content-error",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>

export { Badge, badgeVariants }

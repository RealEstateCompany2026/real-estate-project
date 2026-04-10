import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

/**
 * Badge — Design System tokens mapping:
 *
 *   default:      surface/branded-action, text/branded-on-action
 *   secondary:    surface/neutral-action, text/body
 *   destructive:  red-500, white
 *   success:      green-500, white
 *   warning:      surface/warning, text/warning
 *   info:         surface/information, text/information
 *   outline:      border/default, text/body
 */
const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-surface-branded-action text-content-branded-on-action",
                secondary:
                    "border-transparent bg-surface-neutral-action text-content-body",
                destructive:
                    "border-transparent bg-red-500 text-white",
                success:
                    "border-transparent bg-green-500 text-white",
                warning:
                    "border-transparent bg-surface-warning text-content-warning",
                info:
                    "border-transparent bg-surface-information text-content-information",
                outline:
                    "text-content-body border-edge-default",
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

export { Badge, badgeVariants }

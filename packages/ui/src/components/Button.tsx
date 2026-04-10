import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

/**
 * Button — Design System tokens mapping:
 *
 *   default:      surface/branded-action → branded-action-hover
 *   destructive:  red-500 → red-600
 *   outline:      border/default, surface/neutral-default → neutral-action
 *   secondary:    surface/neutral-action → neutral-action-hover
 *   ghost:        transparent → surface/neutral-action
 *   link:         text/branded-action
 */
const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ring-offset-surface-page disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-surface-branded-action text-content-branded-on-action hover:bg-surface-branded-action-hover",
                destructive:
                    "bg-red-500 text-white hover:bg-red-600",
                outline:
                    "border border-edge-default bg-surface-neutral-default hover:bg-surface-neutral-action text-content-body",
                secondary:
                    "bg-surface-neutral-action text-content-body hover:bg-surface-neutral-action-hover",
                ghost:
                    "hover:bg-surface-neutral-action text-content-body",
                link:
                    "text-content-branded-action underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }

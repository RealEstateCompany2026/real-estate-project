import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

/**
 * Button — Design System Figma variants:
 *
 *   default:      neutral/white background, body text (standard action)
 *   primary:      surface/branded-action (purple) — prominent CTA
 *   destructive:  red-500 — danger actions
 *   outline:      border + transparent bg
 *   secondary:    neutral-action bg
 *   ghost:        transparent bg
 *   link:         branded text, no bg
 */
const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ring-offset-surface-page disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-surface-neutral-default text-content-body border border-edge-neutral-default hover:bg-surface-neutral-action",
                primary:
                    "bg-surface-branded-action text-content-branded-on-action hover:bg-surface-branded-action-hover",
                destructive:
                    "bg-red-500 text-white hover:bg-red-600",
                outline:
                    "border border-edge-neutral-default bg-transparent hover:bg-surface-neutral-action text-content-body",
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

/**
 * IconButton — Convenience wrapper for icon-only buttons.
 * Uses the Button with size="icon" and ghost variant by default.
 */
export interface IconButtonProps extends Omit<ButtonProps, "size"> {
    icon?: React.ReactNode
    size?: number
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, children, variant = "ghost", className, ...props }, ref) => {
        return (
            <Button
                variant={variant}
                size="icon"
                className={cn("shrink-0", className)}
                ref={ref}
                {...props}
            >
                {icon || children}
            </Button>
        )
    }
)
IconButton.displayName = "IconButton"

export { Button, buttonVariants, IconButton }

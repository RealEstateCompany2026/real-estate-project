import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

/**
 * Button — Aligned with Figma DS (file 09EiMQjcDWgb7MzykS8zU0)
 *
 * Figma types → code variants mapping:
 *   "neutral light"     → default   (white bg, neutral border)
 *   "brand light"       → primary   (purple bg, branded CTA)
 *   "outlined light"    → outline   (white bg, border visible)
 *   "transparent light" → ghost     (no bg, no border)
 *
 * Figma specs: border-radius 16px, padding 12px, gap 8px,
 * font Roboto SemiBold 16px/20px, icon 20px
 */
const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold tracking-[0.16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ring-offset-surface-page disabled:pointer-events-none disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-edge-disabled",
    {
        variants: {
            variant: {
                default:
                    "bg-surface-neutral-default text-content-body border border-edge-neutral-default hover:bg-surface-neutral-action-hover",
                primary:
                    "bg-surface-branded-action text-content-branded-on-action border border-edge-branded-action hover:bg-surface-branded-action-hover",
                outline:
                    "border border-edge-neutral-default bg-surface-neutral-default hover:bg-surface-neutral-default text-content-body hover:border-edge-neutral-action",
                ghost:
                    "text-content-body hover:bg-surface-neutral-action",
                // Extensions (not in Figma DS, but used in app)
                destructive:
                    "bg-red-500 text-white border border-red-500 hover:bg-red-600",
                secondary:
                    "bg-surface-neutral-action text-content-body hover:bg-surface-neutral-action-hover",
                link:
                    "text-content-branded-action underline-offset-4 hover:underline",
            },
            size: {
                default: "p-3",
                sm: "px-3 py-2 text-sm",
                lg: "px-6 py-4",
                icon: "p-3",
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

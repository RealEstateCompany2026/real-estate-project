import * as React from "react"
import { cn } from "../lib/utils"

/**
 * Input — Design System tokens mapping:
 *
 *   Border:       border/default (#DADBDD)
 *   Background:   surface/neutral-default (#FFFFFF)
 *   Text:         text/body (#444955)
 *   Placeholder:  text/placeholder (#737780)
 *   Focus ring:   purple-500 (#7B72F9)
 */
export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-edge-default bg-surface-neutral-default px-3 py-2 text-sm text-content-body ring-offset-surface-page file:border-0 file:bg-transparent file:text-sm file:font-semibold placeholder:text-content-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }

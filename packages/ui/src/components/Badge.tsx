import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground",
                secondary:
                    "border-transparent bg-neutral-grey-light text-neutral-anthracite",
                destructive:
                    "border-transparent bg-semantic-danger text-white",
                success:
                    "border-transparent bg-semantic-success text-white",
                warning:
                    "border-transparent bg-semantic-warning text-neutral-anthracite",
                info:
                    "border-transparent bg-semantic-info text-white",
                outline: "text-neutral-anthracite border-neutral-grey-light",
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

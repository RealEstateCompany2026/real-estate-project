"use client";

import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/**
 * IconButtonMega - Large icon-only button (70x70px)
 *
 * Tokens aligned with Button DS (same variant names & semantic tokens).
 * Only the dimensions / border-radius are specific to Mega.
 *
 * Structure:
 * - Size: 70x70px (fixed)
 * - Padding: 23px
 * - Border-radius: 28px
 * - Icon: 24x24px
 */

const iconButtonMegaVariants = cva(
  "inline-flex items-center justify-center rounded-[28px] w-[70px] h-[70px] p-[23px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ring-offset-surface-page disabled:pointer-events-none disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-edge-disabled",
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
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type IconButtonMegaVariant = "default" | "primary" | "outline" | "ghost";

export interface IconButtonMegaProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    VariantProps<typeof iconButtonMegaVariants> {
  icon: ReactNode;
}

export function IconButtonMega({
  icon,
  variant = "default",
  className,
  ...props
}: IconButtonMegaProps) {
  return (
    <button
      className={cn(iconButtonMegaVariants({ variant }), className)}
      {...props}
    >
      <div className="flex items-center justify-center size-full">
        <div className="shrink-0 w-[24px] h-[24px]">{icon}</div>
      </div>
    </button>
  );
}

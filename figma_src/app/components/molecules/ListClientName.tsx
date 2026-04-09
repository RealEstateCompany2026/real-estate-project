/**
 * ORGANISM: ListClientName
 *
 * Section nom du client avec badges et icône
 * Basé sur OrganismeListClientName.tsx du design system Figma
 */

import { User } from "lucide-react";
import { Badge } from "../atoms/Badge";
import { Chip } from "../atoms/Chip";

export interface ListClientNameProps {
  firstName: string;
  lastName: string;
  badges?: Array<{ label: string; variant?: "default" | "success" | "warning" | "error" | "information" }>;
  onClick?: () => void;
  theme?: "light" | "dark";
}

export function ListClientName({
  firstName,
  lastName,
  badges = [
    { label: "VENDEUR", variant: "default" },
    { label: "ACQUÉREUR", variant: "default" },
  ],
  onClick,
  theme = "light",
}: ListClientNameProps) {
  const iconColor = theme === "dark" ? "var(--neutral-200)" : "var(--neutral-500)";

  return (
    <div
      className="content-stretch flex flex-col items-start pl-[30px] pr-[138px] py-[34px] relative size-full cursor-pointer"
      onClick={onClick}
    >
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[259px]">
        {/* Badges */}
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          {badges.map((badge, index) => (
            <Badge key={index} label={badge.label} variant={badge.variant} theme={theme} />
          ))}
        </div>

        {/* Icon + Name */}
        <Chip size="medium" icon={<User size={20} style={{ color: iconColor }} />}>
          {firstName} {lastName}
        </Chip>
      </div>
    </div>
  );
}

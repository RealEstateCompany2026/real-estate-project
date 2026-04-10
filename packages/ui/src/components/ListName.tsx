"use client";

/**
 * ListName - Affiche un prénom et un nom avec le nom en gras
 *
 * Basé sur OrganismeListName.tsx du design system Figma
 */

export interface ListNameProps {
  firstName: string;
  lastName: string;
  onClick?: () => void;
  className?: string;
}

export function ListName({
  firstName,
  lastName,
  onClick,
  className = "",
}: ListNameProps) {
  const Component = onClick ? "button" : ("div" as const);

  return (
    <Component
      onClick={onClick}
      className={`flex flex-col gap-3 text-left text-content-body ${className}`}
    >
      <p className="relative shrink-0 w-full text-[16px] leading-[20px]">
        {firstName}
      </p>
      <p className="relative shrink-0 w-full text-[16px] leading-[20px] font-semibold text-content-headings">
        {lastName}
      </p>
    </Component>
  );
}

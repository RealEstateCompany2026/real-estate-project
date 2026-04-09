/**
 * ATOM: ListName
 * 
 * Affiche un prénom et un nom avec le nom en gras
 * Basé sur OrganismeListName.tsx du design system Figma
 */

export interface ListNameProps {
  firstName: string;
  lastName: string;
  onClick?: () => void;
  theme?: "light" | "dark";
}

export function ListName({ firstName, lastName, onClick, theme = "light" }: ListNameProps) {
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component
      onClick={onClick}
      className="flex flex-col gap-3"
      style={{
        color: "var(--text-body)",
        fontFamily: "var(--font-family)",
        fontSize: "var(--text-base)",
        lineHeight: "var(--lh-base)",
        textAlign: "left",
      }}
    >
      <p className="relative shrink-0 w-full">
        {firstName}
      </p>
      <p
        className="relative shrink-0 w-full"
        style={{
          color: "var(--text-headings)",
          fontWeight: "600",
        }}
      >
        {lastName}
      </p>
    </Component>
  );
}
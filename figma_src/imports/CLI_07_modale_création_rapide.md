# CLI-07 — Modale création rapide
> Parcours 6: Ajouter un client | Vague 1 | Préfixe: CLI

## Task
Create the 'Modale création rapide' screen for the Ajouter un client parcours.

## Context
This is screen CLI-07 in parcours 6: Ajouter un client (Vague 1). NavRail (90px) is present on the left. AppBar should show relevant context for this screen.

## Elements
- Screen size: 1920×1080 pixels (full HD)
- Background surface: use --surface-page token
- Font family: Roboto (for all text)
- NavRail: 90px wide on left side with all 10 navigation items (Dashboard, Base données, Clients, Biens, Affaires, Documents, Agenda, Automations, divider, Profile)
- AppBar: Use appropriate variant for this screen (Category, Fiche Client, Fiche Bien, etc.)
- All UI components from the design system
- Mock data: Use realistic French names, addresses, and context

## Behavior
Define user interactions and state transitions for this screen.

## Constraints
Follow these design constraints:
- Use design tokens only (--text-body, --surface-page, --icon-branded-default, etc.)
- Support both light and dark modes
- Typography: Use Roboto, follow typography scale from guidelines
- Spacing: Follow spacing scale (8px base unit)
- All components from the design system, never custom styling
- Accessibility: proper contrast, semantic HTML

---

**Screen Description**: Modale compacte avec les 5 champs essentiels + dédoublonnage. Utilisée dans les créations contextuelles.

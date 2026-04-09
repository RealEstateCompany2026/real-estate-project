# FIB-04 — Onglet Propriétaire
> Parcours 9: Fiche bien | Vague 2 | Préfixe: FIB

## Task
Create the 'Onglet Propriétaire' screen for the Fiche bien parcours.

## Context
This is screen FIB-04 in parcours 9: Fiche bien (Vague 2). NavRail (90px) is present on the left. AppBar should show relevant context for this screen.

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

**Screen Description**: Carte résumé du client propriétaire. Lien fiche client. Action : changer le propriétaire.

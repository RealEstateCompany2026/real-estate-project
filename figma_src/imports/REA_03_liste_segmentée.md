# REA-03 — Liste segmentée
> Parcours 19: Réactivation de base dormante | Vague 3 | Préfixe: REA

## Task
Create the 'Liste segmentée' screen for the Réactivation de base dormante parcours.

## Context
This is screen REA-03 in parcours 19: Réactivation de base dormante (Vague 3). NavRail (90px) is present on the left. AppBar should show relevant context for this screen.

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

**Screen Description**: Liste de contacts filtrée par segment avec actions rapides (lancer playbook, appeler, envoyer email)

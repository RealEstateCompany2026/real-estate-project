# SUP-05A — Profil agent (A/D)
> Parcours 1: Sign-up | Vague 1 | Préfixe: SUP

## Task
Create the 'Profil agent (A/D)' screen for the Sign-up parcours.

## Context
This is screen SUP-05A in parcours 1: Sign-up (Vague 1). This is an authentication screen with no NavRail or AppBar present.

## Elements
- Screen size: 1920×1080 pixels (full HD)
- Background surface: use --surface-page token
- Font family: Roboto (for all text)
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
- No NavRail on authentication screens
- No AppBar on authentication screens

---

**Screen Description**: Prénom, nom, téléphone. Champs pré-remplis si Google SSO.

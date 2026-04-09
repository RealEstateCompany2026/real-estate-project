# RealAgent — Design System Guidelines for Figma Make

> CRM immobilier pour agents — Design System "Real Estate"
> 230 tokens · 22 catégories de composants · Light + Dark mode

## Package structure

This design system is organized into:
- **Tokens**: Colors (alias + mapped), Typography, Spacing & Radius, Border widths
- **Atoms**: Buttons, Inputs, Badges, Chips, Stickers, Icons, Dividers, Switch/Checkbox/Radio
- **Organisms**: App Bars, Lists, Navigation, Menus, Sheets & Dialogs, Scoring, AI Components, Graphs
- **Patterns**: Date & Time pickers, Loading & Progress, Text Boxes & Messages, Search

## When generating screens, always follow this order:

1. Read `guidelines/design-tokens/colors.md` for color usage rules
2. Read `guidelines/design-tokens/typography.md` for text styles
3. Read `guidelines/design-tokens/spacing.md` for spacing and radius
4. Read `guidelines/components/navigation.md` for page layout structure
5. Read the specific component guideline for any component you use

## Global layout rules

- Every screen uses a **90px-wide vertical NavRail** on the left
- Main content area fills remaining width
- An **AppBar** sits at the top of the content area (varies by page type)
- Surface color is `--surface-page` (#FFFFFF light / #111215 dark)
- All text uses **Roboto** font family
- Always support both **light and dark** modes using mapped tokens

## Do's and Don'ts

- **Always** use semantic mapped tokens (`--text-body`, `--surface-neutral-default`), never raw hex values
- **Always** use the NavRail component for left navigation — never a horizontal navbar
- **Always** use AppBar variants appropriate to the page type (category, fiche client, fiche bien, fiche affaire, etc.)
- **Never** override component styles with custom CSS
- **Always** use Sticker components for status labels (VENDEUR, ACQUÉREUR, LOCATAIRE, ACTIF, etc.)
- **Always** use the Scoring organism for temperature/quality scores
- **Always** use AI Components (suggestion badge, suggestion card) for AI-generated content

## Navigation structure

The app has 8 main sections accessible from the NavRail:
1. **Dashboard** — Overview with KPIs, suggestions, recent activity
2. **Base données** — Import, audit, data management
3. **Clients** — Client list, fiches, messaging
4. **Biens** — Property list, fiches, announcements
5. **Affaires** — Deal pipeline, fiches, metrics
6. **Documents** — Document list, templates, e-signature
7. **Agenda** — Calendar, tasks, events
8. **Automations** — Triggers, playbooks, campaigns, integrations

## Personas

There are 4 agent personas that affect UI density and features:
- **A** (solo independent) — Simplified UI, single user
- **B** (agency manager) — Team views, assignment features
- **C** (agency agent) — Personal + team views
- **D** (property manager) — Rental-focused features, tenant management

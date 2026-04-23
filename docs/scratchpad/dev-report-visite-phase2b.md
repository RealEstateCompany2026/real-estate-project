# Dev Report — Phase 2B : SheetAgendaBien + SheetVisite

**Date** : 2026-04-23
**Agent** : dev-agent
**Task** : #121

## Fichiers crees

| Fichier | Description |
|---------|-------------|
| `packages/ui/src/components/SheetAgendaBien.tsx` | Sheet agenda disponibilite bien — grille creneaux 30min, bandeau alerte client, footer proposer |
| `packages/ui/src/components/SheetVisite.tsx` | Sheet fiche visite — 4 sections progressives (Bien, Invitations, ODJ, Guide) |

## Fichier modifie

| Fichier | Modification |
|---------|-------------|
| `packages/ui/package.json` | Ajout exports `./sheet-agenda-bien` et `./sheet-visite` |

## Architecture

### SheetAgendaBien
- Props : `SheetAgendaBienProps` avec types `TimeSlot`, `AgendaDay`, `ClientSlotRequest`
- Imports DS : Sheet, Button, CollapsibleSection, IconDpe
- Header : "Agenda du bien"
- Body : bloc info bien + DPE, bandeau alerte client (si clientRequest), liste jours en CollapsibleSection avec grille creneaux
- Footer : Button "Proposer ce creneau" (disabled si pas de selectedSlot), masque si clientRequest present
- Creneaux : 3 etats visuels (available/occupied/selected) avec tokens Layer 3

### SheetVisite
- Props : `SheetVisiteProps` avec type `VisiteInvite`
- Imports DS : Sheet, Badge, Button, CollapsibleSection, Plus, ArrowRight
- Header : "Visite" + Badge variant selon visitStatus (PROGRAMME/CONFIRME/TERMINE/ANNULE)
- 4 sections CollapsibleSection :
  1. Bien visite (expanded) — label ou recherche, chip creneau, lien agenda
  2. Invitations (expanded) — liste invites avec Badge CAL, bouton ajouter
  3. Ordre du Jour (collapsed) — badge statut ODJ, lien voir
  4. Guide de visite (collapsed) — badge statut guide, lien voir
- Pas de footer

## Verification TypeScript

```
npx tsc --noEmit --project packages/ui/tsconfig.json 2>&1 | grep -E "SheetAgenda|SheetVisite"
```
Resultat : **0 erreur** sur les 2 nouveaux composants.

## Conformite

- [x] "use client" en premiere ligne
- [x] Tokens Layer 3 uniquement (aucun hardcoding couleur)
- [x] Focus states : `focus:ring-[var(--border-branded-default)]`
- [x] font-roboto sur tous les textes
- [x] Composants DS purs : props in, callbacks out, zero logique metier
- [x] Types autonomes dans packages/ui (aucun import app)
- [x] Exports ajoutes dans package.json

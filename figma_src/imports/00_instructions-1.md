# Instructions — Utilisation des prompts Figma Make

## Nomenclature des fichiers

Chaque écran a un fichier de prompt dédié avec la nomenclature suivante:

```
{PREFIXE}-{NUM}_{nom_snake_case}.md
```

### Exemples:
- `SUP-00_landing_page.md` — Screen SUP-00 (Landing page)
- `SIN-01_connexion.md` — Screen SIN-01 (Sign-in connexion)
- `FIC-01_header_fiche_client.md` — Screen FIC-01 (Client file header)

### Préfixes par parcours:
- **SUP** — Sign-up (screens SUP-00 à SUP-07)
- **SIN** — Sign-in (screens SIN-01 à SIN-08)
- **OBT** — Onboarding Product Tour (screens OBT-00 à OBT-06)
- **OBS** — Onboarding Setup (screens OBS-00 à OBS-05)
- **IMP** — Import Base de Données (screens IMP-01 à IMP-07)
- **CLI** — Ajouter un client (screens CLI-01 à CLI-07)
- **BIE** — Ajouter un bien (screens BIE-01 à BIE-09)
- **FIC** — Fiche client (screens FIC-01 à FIC-10)
- **FIB** — Fiche bien (screens FIB-01 à FIB-11)
- **AFF** — Affaires (screens AFF-01 à AFF-12)
- **EVT** — Événements (screens EVT-01 à EVT-09)
- **DOC** — Documents (screens DOC-01 à DOC-08)
- **AUD** — Audit Base de Données (screens AUD-01 à AUD-08)
- **ANN** — Annonce immobilière (screens ANN-01 à ANN-09)
- **AIA** — Automatisations IA (screens AIA-01 à AIA-09)
- **DET** — Détection mandat (screens DET-01 à DET-08)
- **CAM** — Campagne carnet (screens CAM-01 à CAM-09)
- **CRM** — Connexion CRM & intégrations (screens CRM-01 à CRM-10)
- **REA** — Réactivation base dormante (screens REA-01 à REA-10)

## Format TC-EBC

Chaque prompt suit le format **TC-EBC**:

1. **Task** — Qu'est-ce que Figma Make doit produire? Soyez spécifique sur le type d'écran.
2. **Context** — Quel est le contexte utilisateur? Quel parcours? Quelle vague? Qui sont les personas?
3. **Elements** — Liste détaillée des éléments UI avec tokens de design, dimensions, composants.
4. **Behavior** — Interactions, états, transitions, affichage conditionnel par persona.
5. **Constraints** — Tokens à utiliser, dimensions, ce qu'il NE faut PAS faire, notes d'accessibilité.

## Points importants

### NavRail et AppBar
- **NavRail (90px)** est présent sur TOUS les écrans SAUF:
  - SUP-00 à SUP-07 (screens d'authentification sign-up)
  - SIN-01 à SIN-08 (screens d'authentification sign-in)
- **AppBar** est présent sur tous les écrans qui ont un NavRail
- Choisir le variant d'AppBar approprié (Category, Fiche Client, Fiche Bien, Fiche Affaire, etc.)

### Design Tokens
- **TOUJOURS** utiliser les tokens mappés (light/dark aware):
  - Couleurs: `--text-body`, `--surface-page`, `--icon-branded-default`, etc.
  - Jamais de valeurs hex brutes
- **JAMAIS** de CSS custom — utiliser les composants du design system

### Mock Data
- Utiliser des noms français réalistes: Sophie Martin, Jean-Philippe Bertoglio, etc.
- Adresses réalistes: "12 rue de la Paix, 75002 Paris", etc.
- Agences réelles: ORPI, Century 21, Agence Nouvelle Soleil, etc.

### Personas
- **A** — Agent indépendant (solo)
- **B** — Directeur d'agence (admin)
- **C** — Agent en agence (collaborateur)
- **D** — Gestionnaire locatif (rental-focused)

Certains écrans ont des variants pour différents personas (ex: SUP-05A pour A/D, SUP-05B pour B/C).

## Comment utiliser ces prompts

1. Ouvrez Figma Make
2. Copiez le contenu du fichier de prompt correspondant
3. Collez-le dans l'input Figma Make
4. Figma Make générera l'écran automatiquement
5. Affinez manuellement si nécessaire

## Index

Consultez `00_index.md` pour la liste complète de tous les 168 écrans.

---

**Dernière mise à jour**: 24 mars 2026
**Total d'écrans**: 168
**Total de parcours**: 19
**Vagues couvertes**: 1, 2, 3

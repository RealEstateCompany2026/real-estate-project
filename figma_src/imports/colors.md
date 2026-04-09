# Colors — Design Token Guidelines

## Architecture: 3 layers

### 1. Brand palette (raw values — never use directly)
Six color families, each with 50→800 scale:
- **grey** (neutral): #FFFFFF → #000000
- **purple** (branded): #F2F1FE → #312E64
- **green** (success): #E6F6E5 → #074302
- **red** (error): #FFE5E5 → #400000
- **blue** (information): #E5E6FF → #000340
- **orange** (warning): #FFF0E5 → #401B00

### 2. Alias tokens (semantic names → brand values)
Use these CSS variables:
- `--neutral-{50-800}`, `--neutral-white`, `--neutral-black`
- `--branded-{50-800}`
- `--success-{50-800}`
- `--error-{50-800}`
- `--information-{50-800}`
- `--warning-{50-800}`

### 3. Mapped tokens (light/dark aware — ALWAYS USE THESE)

#### Icon tokens
| Token | CSS var | Light | Dark |
|-------|---------|-------|------|
| icon/neutral-default | --icon-neutral-default | #444955 | #D0D1D4 |
| icon/neutral-action | --icon-neutral-action | #444955 | #D0D1D4 |
| icon/neutral-action-hover | --icon-neutral-action-hover | #333740 | #DADBDD |
| icon/neutral-on-action | --icon-neutral-on-action | #FFFFFF | #111215 |
| icon/branded-default | --icon-branded-default | #7B72F9 | #CAC7FD |
| icon/branded-action | --icon-branded-action | #7B72F9 | #CAC7FD |
| icon/branded-action-hover | --icon-branded-action-hover | #635CC7 | #E5E3FE |
| icon/branded-on-action | --icon-branded-on-action | #FFFFFF | #111215 |
| icon/placeholder | --icon-placeholder | #737780 | #737780 |
| icon/disabled | --icon-disabled | #A1A4AA | #444955 |
| icon/success | --icon-success | #0DA500 | #C3E9BF |
| icon/error | --icon-error | #FF0000 | #FFBFBF |
| icon/information | --icon-information | #000AFF | #BFC2FF |
| icon/warning | --icon-warning | #FF6B00 | #FFDABF |

#### Text tokens
| Token | CSS var | Light | Dark |
|-------|---------|-------|------|
| text/hero | --text-hero | #333740 | #DADBDD |
| text/headings | --text-headings | #333740 | #DADBDD |
| text/body | --text-body | #444955 | #D0D1D4 |
| text/caption | --text-caption | #444955 | #D0D1D4 |
| text/placeholder | --text-placeholder | #737780 | #737780 |
| text/neutral-action | --text-neutral-action | #444955 | #D0D1D4 |
| text/neutral-on-action | --text-neutral-on-action | #FFFFFF | #111215 |
| text/branded-action | --text-branded-action | #7B72F9 | #CAC7FD |
| text/branded-on-action | --text-branded-on-action | #FFFFFF | #111215 |
| text/disabled | --text-disabled | #A1A4AA | #444955 |
| text/success | --text-success | #0DA500 | #86D280 |
| text/error | --text-error | #FF0000 | #FF8080 |
| text/information | --text-information | #000AFF | #8085FF |
| text/warning | --text-warning | #FF6B00 | #FFB580 |

#### Border tokens
| Token | CSS var | Light | Dark |
|-------|---------|-------|------|
| border/neutral-default | --border-neutral-default | #444955 | #D0D1D4 |
| border/neutral-action | --border-neutral-action | #444955 | #D0D1D4 |
| border/branded-default | --border-branded-default | #7B72F9 | #CAC7FD |
| border/branded-action | --border-branded-action | #7B72F9 | #CAC7FD |
| border/disabled | --border-disabled | #A1A4AA | #444955 |
| border/success | --border-success | #C3E9BF | #109204 |
| border/error | --border-error | #FFBFBF | #BF0000 |
| border/information | --border-information | #BFC2FF | #0008BF |
| border/warning | --border-warning | #FFDABF | #BF5000 |

#### Surface tokens
| Token | CSS var | Light | Dark |
|-------|---------|-------|------|
| surface/page | --surface-page | #FFFFFF | #111215 |
| surface/neutral-default | --surface-neutral-default | #FFFFFF | #111215 |
| surface/neutral-action | --surface-neutral-action | #ECEDEE | #22252B |
| surface/neutral-action-hover | --surface-neutral-action-hover | #DADBDD | #333740 |
| surface/branded-default | --surface-branded-default | #7B72F9 | #635CC7 |
| surface/branded-action | --surface-branded-action | #7B72F9 | #635CC7 |
| surface/branded-action-hover | --surface-branded-action-hover | #635CC7 | #7B72F9 |
| surface/disabled | --surface-disabled | #ECEDEE | #22252B |
| surface/success | --surface-success | #E6F6E5 | #0C6304 |
| surface/error | --surface-error | #FFE5E5 | #800000 |
| surface/information | --surface-information | #E5E6FF | #000580 |
| surface/warning | --surface-warning | #FFF0E5 | #803600 |

## Color usage rules

- For status stickers: use the semantic surface + text pairs (success for active/signed, error for urgent, warning for pending, info for informational)
- Client type stickers: VENDEUR = branded, ACQUÉREUR = information, LOCATAIRE = warning
- Temperature segments: CHAUD = error, TIÈDE = warning, FROID = information, DORMANT = neutral/400, INCONNU = neutral/300
- AI-generated content always uses branded/50 surface + branded/500 border + branded icon

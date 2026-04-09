# Components to Create

These components do not yet exist in the design system and must be created by Figma Make when needed. They should follow the same token system, radius, border-width, and typography rules as existing components.

## Atoms (to create)

### Segment Temperature Indicator
- Colored dot (8px, rounded) + segment label (12px/600)
- Colors: CHAUD=#FF0000, TIÈDE=#FF6B00, FROID=#000AFF, DORMANT=#737780, INCONNU=#A1A4AA
- Used in: client lists, segment dashboards, playbook targeting

### Score Bar (progress)
- Horizontal bar: height 4px, radius 2px, background neutral/50
- Fill color: success/500 (≥70), warning/500 (40-69), error/500 (<40)
- Score number: 12px/600, neutral/500, right of bar

### Pipeline Stage Indicator
- 7-step horizontal stepper for deal pipeline
- Steps: Prospection → Qualification → Estimation → Mandat → Commercialisation → Négociation → Closing
- Active step: branded/500 filled circle + bold label
- Completed steps: success/500 filled circle + checkmark
- Future steps: neutral/200 outlined circle + light label

### Signal Strength Indicator
- Score 0-100 displayed as filled arc or gauge
- Used for mandate detection signals (P16)
- Colors follow temperature scale

### Campaign Metrics Mini Card
- Small card showing: sent / delivered / opened / clicked counts
- With percentage and small progress bar per metric
- Used in campaign list and campaign detail

### Import Progress Stepper
- 4-step vertical or horizontal flow: Upload → Mapping → Validation → Import
- Shows current step with progress percentage
- Error count badge in red

## Organisms (to create)

### Client Fiche — Summary Card
- Top section of client detail page
- Contains: avatar placeholder, name (H4), type stickers, segment badge, temperature score, contact info (email, phone), last interaction date
- Actions: call, email, message buttons

### Client Fiche — Engagement Timeline
- Vertical timeline showing client interactions
- Each entry: date, type icon, description, score impact (+5, +15, etc.)
- Grouped by month
- Used in P19 réactivation tracking

### Property Fiche — Completeness Gauge
- Circular or semi-circular gauge showing completion_score (0-100%)
- List of missing fields below
- "Compléter la fiche" branded action button

### Deal Fiche — Kanban Board
- 7-column horizontal Kanban for pipeline stages
- Each card: deal summary (type, client, property, price)
- Drag and drop implied (show as static for Figma)

### Audit Dashboard — Quality Radar
- Radar/spider chart with 4 axes: Complétude, Cohérence, Fraîcheur, Doublons
- Global score in center
- Uses Graphs component style

### Playbook Flow Diagram
- Visual representation of playbook steps
- Each step: icon + action type + delay + condition
- Connected by arrows/lines
- Active step highlighted in branded/500

### Campaign Email Preview
- Email template preview card
- Shows: header with logo, content blocks (prix_m², DVF data, conseils), footer
- 3 template variants: élégant, moderne, classique

### Integration Connector Card
- Card showing CRM/portal connector
- Logo + name + status sticker (CONNECTÉ=success, ERREUR=error, PAUSE=warning, DÉCONNECTÉ=neutral)
- Last sync date, error count
- Action: "Configurer" / "Reconnecter"

### Segment Distribution Chart
- Donut or bar chart showing client distribution across 5 segments
- With counts and percentages
- Used in dashboard and P19 réactivation overview

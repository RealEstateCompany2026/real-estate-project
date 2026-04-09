# Scoring Components

## Organisme: Scoring Section List
- **Usage**: Display scoring metrics with trend indicators (used in client fiches, audit scores, segment details)
- **Variants**:
  - **Up light**: surface success/50, border success/500, icon success/500 (positive trend)
  - **Down light**: surface error/50, border error/500, icon error/500 (negative trend)
- **Border**: scale25, radius scale400
- **Text**: neutral/500 (label)
- **Content**: score value + label (e.g., "78 · Warm Up", "62 · Engagement", "91 · Réactivité")

## Usage rules
- Temperature scores (0-100): display with color coding
  - 70-100: success (green) — segment CHAUD
  - 40-69: warning (orange) — segment TIÈDE
  - 15-39: information (blue) — segment FROID
  - 0-14: neutral/400 (grey) — segment DORMANT
- Quality scores (audit BDD): always show 4 dimensions (complétude, cohérence, fraîcheur, doublons)
- Always show trend arrow (up/down) when historical data is available

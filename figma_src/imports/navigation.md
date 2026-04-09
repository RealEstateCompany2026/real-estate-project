# Navigation Components

## NavRail (agent navigation rail)

Vertical navigation rail, always on the left side of every screen.

### Dimensions
- Rail width: 90px
- Padding: py=10px
- Logo area: 75px (px=11px py=22px)
- Button: 68×50px, radius=16px (scale400)
- Icon: 24px
- Gap between buttons: 10px
- Divider: 10px wide, 1px
- Profile avatar: 54×54px, radius=28px (scale700), border=4px (scale100)

### States
| State | Surface | Icon |
|-------|---------|------|
| Default | transparent | neutral/400 |
| Hover | neutral/50 | neutral/500 |
| Selected | branded/50 | branded/500 |

### Dark mode states
| State | Surface | Icon |
|-------|---------|------|
| Default | transparent | neutral/400 |
| Hover | neutral/600 | branded/500 |
| Selected | branded/800 | branded/500 |

### Items (in order)
1. Logo (ORPI or agency name)
2. Dashboard
3. Database (base de données)
4. Clients
5. Biens
6. Affaires
7. Documents
8. Events (agenda)
9. Automations
10. --- divider ---
11. Profile avatar (bottom)

## Breadcrumb

Simple breadcrumb for deep navigation. Uses neutral/400 text and chevron separator.
- Format: `Category > Entity name > Sub-section`
- Examples: `Clients > LEMARCHAND Jean-Christophe`, `Biens > Paris 75008 > Détail bien`

## Profile button

Circular avatar with border.
- Size: 54×54px
- Radius: 28px (scale700)
- Border: 4px (scale100)
- Default border: neutral/white (light) / neutral/800 (dark)
- Selected border: branded/500

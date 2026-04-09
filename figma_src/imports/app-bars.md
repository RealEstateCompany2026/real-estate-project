# App Bar Components

All app bars share: surface neutral/white (light) / neutral/800 (dark), border-bottom neutral/50 (light) / neutral/700 (dark), border-width scale25.

## Variants

### 1. AppBar Category
- **Usage**: Top of list pages (Clients, Biens, Affaires, Documents, etc.)
- **Content**: H4 title + filter chips + action buttons (search, add)
- **Gap**: 8px between elements
- **Example**: `Clients [tous] [vendeurs] [acquéreurs] [locataires] 🔍 [+ Ajouter]`

### 2. AppBar Ajout BDD
- **Usage**: Database import page
- **Content**: H4 "Base de données" + upload button (+) + search button
- **Example**: `Base de données [+] [🔍]`

### 3. AppBar Import BDD
- **Usage**: During import flow
- **Content**: ← back arrow + H4 "Importation" + filename chip + brand button "Valider"
- **Example**: `← Importation · contacts_export_2026.csv [Valider]`

### 4. AppBar Fiche Client
- **Usage**: Client detail page
- **Content**: ← back + H4 client name + type stickers (VENDEUR/ACQUÉREUR/LOCATAIRE) + days since last contact
- **Sticker variants**: VENDEUR=branded, ACQUÉREUR=info, LOCATAIRE=warning
- **Gap**: 24px
- **Example**: `← Jean-Philippe Bertoglio [VENDEUR] [ACQUÉREUR] · 280 j`

### 5. AppBar Fiche Client Messagerie
- **Usage**: Client messaging sub-page
- **Content**: ← back + icon "Messagerie" + client name (UPPERCASE, Prénom) + days
- **Example**: `← 💬 Messagerie · BERTOGLIO, Jean-Philippe · 280 j`

### 6. AppBar Fiche Bien
- **Usage**: Property detail page
- **Content**: ← back + property ID + deal type sticker (À VENDRE/À LOUER) + owner name + action icons + listing status sticker (PUBLIÉE)
- **Gap**: 24px
- **Example**: `← 58298302 [À VENDRE] CAPELLO, Jean-François [📷][📄][🔗] [PUBLIÉE]`

### 7. AppBar Fiche Bien Annonce
- **Usage**: Property listing sub-bar (below AppBar Fiche Bien)
- **Content**: Icon-text pairs: property type, surface, year, city, price, price/m²
- **Gap**: 24px between pairs
- **Example**: `🏠 Appartement · 📐 65 m² · 📅 1985 · 📍 Paris 8e · 💰 450 000 € · 6 923 €/M²`

### 8. AppBar Fiche Affaire
- **Usage**: Deal detail page
- **Content**: ← back + deal ID + deal type sticker (VENTE/ACQUISITION/LOCATION/GESTION) + surface + city + price
- **Gap**: 24px
- **Example**: `← 87302983 [VENTE] · 84 m² · Charleville-Mézières · 360 000 €`

### 9. AppBar Fiche Affaire Metrics
- **Usage**: Deal metrics sub-bar
- **Content**: Pipeline indicators with semantic stickers (messages count, SIGNÉ mandat, PUBLIÉE annonce, demandes, visites, promesses, EN COURS promesse, EN ATTENTE financement, ÉDITÉ acte)
- **Gap**: 40px between indicators
- **Sticker colors**: success for completed steps, warning for in progress, neutral for pending

### 10. AppBar Fiche Automatisation
- **Usage**: Automation detail page
- **Content**: ← back + automation name + status sticker (ACTIF=success / INACTIF=disabled)
- **Example**: `← Relance prospects inactifs [ACTIF]`

### 11. AppBar Fiche Document
- **Usage**: Document detail page
- **Content**: ← back + H4 document name + client name + deal ID + status sticker + date
- **Example**: `← Mandat de vente · CAPELLO, Jean-François · 87302983 [VÉRIFIÉ] · 03 jan. 2026`

# Review Report — FIC Section Carnet (ListCarnet)

**Date** : 14 avril 2026  
**Reviewer** : reviewer-agent  
**Ticket** : Brief dev-agent — FIC Section Carnet (ListCarnet)

---

## VERDICT

**✅ PASS**

L'intégration du composant `ListCarnet` dans la Section Carnet est complète, correcte et conforme au brief. Aucun correctif critique requis. La modification est prête pour le déploiement.

---

## Checklist de Review

- [x] **Import `ListCarnet` présent et correct**  
  ✅ Ligne 19 : `import { ListCarnet } from '@real-estate/ui/list-carnet';` — import correct, après `ListBien`, et l'export est défini dans `packages/ui/package.json` ligne 65.

- [x] **Badge count = `properties.filter(p => p.hasCarnet).length`**  
  ✅ Ligne 905 : `<Badge variant="default">{properties.filter(p => p.hasCarnet).length}</Badge>` — dynamique, compte seulement les biens avec carnet actif, pas le total.

- [x] **Props mappées correctement vers l'interface `ListCarnetProps` réelle**  
  ✅ Lignes 909-918 : tous les props du composant DS sont passés correctement :
  - `city={p.city}` ✅
  - `propertyType={p.propertyType}` ✅
  - `surface={p.surface}` ✅
  - `dpeGrade={p.dpeGrade}` ✅ (optionnel)
  - `ownerName={...}` ✅
  - `status={...}` ✅
  - `aiSuggestions={0}` ✅

- [x] **`ownerName` construit depuis `client.lastName` + `client.firstName`**  
  ✅ Ligne 915 : `ownerName={`${client.lastName ?? ''}, ${client.firstName ?? ''}`.trim()}` — format "NOM, Prénom" avec nullish coalescing et trim() pour éviter les espaces inutiles.

- [x] **`status` mappé : `hasCarnet ? 'active' : 'dormant'`**  
  ✅ Ligne 916 : `status={p.hasCarnet ? 'active' : 'dormant'}` — mapping correct vers les deux statuts utilisés (les autres statuts pending/transferred/archived ne sont pas appliqués actuellement).

- [x] **Pas de prop `date` (pas de données dispo)**  
  ✅ Prop `date` non passée — correct, la BDD n'a pas `maintenanceLogActivatedAt` pour l'instant. Le composant gère gracieusement l'absence de cette prop.

- [x] **`aiSuggestions` = 0**  
  ✅ Ligne 917 : `aiSuggestions={0}` — hardcodé à 0 en attente d'une source de données IA.

- [x] **Key unique sur chaque `ListCarnet`**  
  ✅ Ligne 910 : `key={`carnet-${p.id}`}` — clé composée unique et stable (basée sur l'ID du bien).

- [x] **Aucune régression sur les autres sections**  
  ✅ Vérification complète :
  - Section Biens (lignes 873-897) : intacte ✅
  - Section Documents (lignes 922-943) : intacte ✅
  - Section Messages (lignes 945+) : intacte ✅
  - Aucune ligne supprimée/modifiée en dehors de la Section Carnet.

- [x] **Build passe (ou erreur environnement uniquement)**  
  ⚠️ Turbo build échoue sur pnpm non disponible (problème d'environnement déjà identifié dans le dev-report), mais vérification TypeScript locale confirme :
  - Import `ListCarnet` résoluble ✅
  - Types props compatibles avec l'interface `ListCarnetProps` ✅
  - Pas d'erreur de syntaxe TSX ✅

- [x] **Pas de hardcoding de types (CarnetStatus vient du composant DS)**  
  ✅ Les littéraux `'active'` et `'dormant'` sont corrects (définis dans le type `CarnetStatus` du composant DS, ligne 21 dans `ListCarnet.tsx`).

---

## Points Vérifiés en Détail

### 1. Cohérence de pattern avec Section Biens
Reproduction exacte du pattern demandé :
```
Section Header
├── Titre + Badge count (dynamique)
└── Conteneur flex col gap-16
    └── map(composant DS)
```
Les deux sections (Biens et Carnet) suivent ce pattern identiquement. ✅

### 2. Sources de données
- `client` : destructuré ligne 670 ✅
- `properties: PropertyItem[]` : destructuré ligne 670 ✅
- `PropertyItem.hasCarnet` : existe (mappé depuis `PropertyRow.hasMaintenanceLog` ligne 483) ✅
- Tous les champs PropertyItem nécessaires (city, propertyType, surface, dpeGrade) : disponibles ✅

### 3. Exports du Design System
- Composant `ListCarnet` : `packages/ui/src/components/ListCarnet.tsx` ✅
- Export dans `package.json` : `"./list-carnet": "./src/components/ListCarnet.tsx"` ✅
- Interface `ListCarnetProps` : complète et utilisée correctement ✅
- Type `CarnetStatus` : `"active" | "dormant" | "pending" | "transferred" | "archived"` ✅

---

## Observations Non-Bloquantes

1. **Données futures à ajouter** : La BDD ne contient pas actuellement `maintenanceLogActivatedAt`. Quand ce champ sera ajouté, ajouter `date={p.maintenanceLogActivatedAt}` au composant.

2. **Navigation future** : Pas de `onClick` défini pour l'instant (pas de fiche détail carnet). Quand la navigation sera implémentée, ajouter un callback `onClick={() => navigateToCarnetDetail(p.id)}`.

3. **Suggestions IA futures** : `aiSuggestions` est hardcodé à 0. Quand une source de données IA sera disponible, remplacer par une valeur dynamique.

4. **Clarification sur le format ownerName** : Le format "NOM, Prénom" suit la convention du composant DS (voir interface `ListCarnetProps`). C'est cohérent avec le brief ligne 121.

---

## Résumé

Intégration réussie et minimaliste du composant `ListCarnet` :
- Modification localisée à la Section Carnet seulement
- Zéro régression sur le reste de la vue
- Respect strict du brief et du Design System
- Code élégant, lisible, maintenable
- Prêt pour la suite du cycle de production (déploiement par ops-agent)

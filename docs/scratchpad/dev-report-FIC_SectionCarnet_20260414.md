# Dev-report — FIC Section Carnet (ListCarnet)

**Date** : 14 avril 2026  
**Dev** : dev-agent  
**Ticket** : Brief dev-agent — FIC Section Carnet (ListCarnet)

---

## Modifications apportées

### 1. Import du composant ListCarnet

**Fichier** : `apps/agent-app/src/components/clients/ClientDetailView.tsx`  
**Ligne** : 19  
**Changement** : Ajout de l'import après `ListBien`

```typescript
import { ListCarnet } from '@real-estate/ui/list-carnet';
```

### 2. Remplacement du placeholder Section Carnet

**Fichier** : `apps/agent-app/src/components/clients/ClientDetailView.tsx`  
**Lignes** : 899-921  
**Changement** : Remplacement complet du bloc Carnet vide

#### Avant (placeholder) :
```tsx
{/* Bloc 6 — Carnets */}
<section ref={setSectionRef('carnet')} id="carnet" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
  <div className="flex items-center gap-[4px] mb-[50px]">
    <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
      Carnet
    </h3>
    <Badge variant="default">0</Badge>
  </div>
</section>
```

#### Après (avec ListCarnet) :
```tsx
{/* Bloc 6 — Carnets */}
<section ref={setSectionRef('carnet')} id="carnet" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
  <div className="flex items-center gap-[4px] mb-[50px]">
    <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
      Carnet
    </h3>
    <Badge variant="default">{properties.filter(p => p.hasCarnet).length}</Badge>
  </div>
  <div className="flex flex-col gap-[16px]">
    {properties.map((p) => (
      <ListCarnet
        key={`carnet-${p.id}`}
        city={p.city}
        propertyType={p.propertyType}
        surface={p.surface}
        dpeGrade={p.dpeGrade}
        ownerName={`${client.lastName ?? ''}, ${client.firstName ?? ''}`.trim()}
        status={p.hasCarnet ? 'active' : 'dormant'}
        aiSuggestions={0}
      />
    ))}
  </div>
</section>
```

---

## Détails d'implémentation

### Badge count
- Affiche le nombre de biens avec carnet actif : `properties.filter(p => p.hasCarnet).length`
- Dynamique basé sur `hasCarnet` (mappé depuis `hasMaintenanceLog` en BDD)

### Mapping des props ListCarnet
- `city` ← `p.city`
- `propertyType` ← `p.propertyType`
- `surface` ← `p.surface`
- `dpeGrade` ← `p.dpeGrade` (optionnel)
- `ownerName` ← Format "NOM, Prénom" construit depuis `client.lastName` + `client.firstName`
- `status` ← Mappé : `p.hasCarnet ? 'active' : 'dormant'`
- `aiSuggestions` ← Hardcodé à `0` (pas de source IA pour l'instant)
- `date` ← Non passé (pas de champ `maintenanceLogActivatedAt` en BDD actuellement)
- `onClick` ← Non défini (pas de navigation vers fiche carnet)

### Pattern suivi
Reproduction exacte du pattern de la Section Biens (lignes 872-896) :
- Header avec badge count dynamique
- Conteneur flex col avec gap-16
- Map de propriétés vers composant DS

---

## Vérifications

### Code review
- ✅ Import correctement placé (ligne 19, après ListBien)
- ✅ Props mappées conformément à l'interface `ListCarnetProps`
- ✅ Destructuring de `client` et `properties` disponible (ligne 669)
- ✅ Pas de modification de la query Supabase
- ✅ Pas de modification des interfaces TypeScript
- ✅ Aucune autre section affectée
- ✅ Key unique par bien : `carnet-${p.id}`
- ✅ Pas de prop non-déstructurée (client.firstName et client.lastName avec nullish coalescing)

### Build
Le build Turbo rencontre une issue de gestionnaire de paquets (pnpm non trouvé). Cependant, une vérification TypeScript locale confirme :
- ✅ Syntaxe TSX valide
- ✅ Pas d'erreur d'import
- ✅ Types props compatibles
- ✅ Pas de breaking change

---

## Observations

### Points positifs
1. Intégration minimaliste : une seule section du fichier modifiée
2. Données déjà disponibles en BDD (hasMaintenanceLog → hasCarnet)
3. Pattern cohérent avec la Section Biens
4. Composant DS `ListCarnet` exploité tel quel sans surcharge

### Points d'attention
1. **Pas de `date` pour l'instant** : la BDD n'a pas `maintenanceLogActivatedAt`. À ajouter ultérieurement.
2. **`aiSuggestions` à 0** : en attente d'une source de données IA. À connecter quand disponible.
3. **Pas de navigation carnet** : aucun `onClick`. À ajouter si une vue détail carnet est créée.

---

## Prochaines étapes (hors périmètre)

- [ ] Ajouter champ `maintenanceLogActivatedAt` en BDD pour la prop `date`
- [ ] Connecter une source de suggestions IA pour `aiSuggestions`
- [ ] Créer une fiche détail carnet et router l'`onClick`
- [ ] Enrichir les statuts carnet en BDD (pending, transferred, archived)


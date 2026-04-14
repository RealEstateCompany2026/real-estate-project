# Dev Report — Brief C: Sheet Wide "Voir tout" Messages
**Date:** 2026-04-14  
**Component:** `apps/agent-app/src/components/clients/ClientDetailView.tsx`  
**Status:** ✅ COMPLETE

---

## Résumé des modifications

Implémentation d'une Sheet wide (1024px) pour l'historique complet des messages du client, en lecture seule. Le Button "Voir tout" de la section Messages ouvre désormais cette Sheet.

---

## Étapes implémentées

### 1. ✅ State `isMessageSheetOpen` ajouté
**Ligne 370** (après `isActivitySheetOpen`)
```tsx
const [isMessageSheetOpen, setIsMessageSheetOpen] = useState(false);
```

### 2. ✅ Interface `ClientDetailData` étendue
**Ligne 135** (après `messages: MessageItem[];`)
```tsx
allMessages: MessageItem[];
```

### 3. ✅ Query Supabase Message adaptée
**Ligne 426** : `.limit(100)` (au lieu de `.limit(4)`)

### 4. ✅ Dérivation `allMessages` et `messages` (preview)
**Lignes 447-456**
```tsx
const allMessages: MessageItem[] = ((messagesRes.data ?? []) as MessageRow[]).map((m) => ({
  id: m.id,
  direction: senderToDirection(m.senderType),
  body: m.body,
  date: new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(m.messageDate)),
  time: new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' }).format(new Date(m.messageDate)),
  status: dbStatusToDsStatus(m.status),
  attachments: (m.attachmentsUrls ?? []).map((url) => ({ label: attachmentLabel(url) })),
}));
const messages: MessageItem[] = allMessages.slice(0, 4);
```

**Inclusion dans `setData()`** : `allMessages` ajouté aux dépendances.

### 5. ✅ Destructuration dans le render
**Ligne 495**
```tsx
const { client, kpis, aiSuggestions, graphData, activities, allActivities, dealsCount, properties, documents, messages, allMessages } = data;
```

### 6. ✅ onClick du Button "Voir tout" Messages modifié
**Ligne 765**
```tsx
<Button variant="default" onClick={() => setIsMessageSheetOpen(true)}>
  Voir tout <ArrowRight size={16} />
</Button>
```

### 7. ✅ JSX Sheet Messages ajouté
**Après la Sheet Activités (ligne 827)**
```tsx
<Sheet
  isOpen={isMessageSheetOpen}
  onClose={() => setIsMessageSheetOpen(false)}
  title="Messages"
  width="wide"
>
  <div className="flex flex-col gap-[24px] px-[40px] py-[20px]">
    {allMessages.map((m) =>
      m.direction === 'received' ? (
        <MessageReceived
          key={m.id}
          date={m.date}
          time={m.time}
          status={m.status}
          attachments={m.attachments}
        >
          {m.body}
        </MessageReceived>
      ) : (
        <MessageSent
          key={m.id}
          date={m.date}
          time={m.time}
          status={m.status}
          attachments={m.attachments}
        >
          {m.body}
        </MessageSent>
      )
    )}
  </div>
</Sheet>
```

---

## Confirmations obligatoires

### Padding horizontal
✅ **Confirmé:** `px-[40px]` utilisé dans la Sheet wide (cohérent avec le header wide dans Sheet.tsx).

### Preview vs Full
✅ **Confirmé:** 
- `messages` (preview en section) = `allMessages.slice(0, 4)` (4 premiers messages)
- `allMessages` (complète dans Sheet) = 100 messages max via query Supabase

### Scroll vertical
✅ **Confirmé:** Géré nativement par `Sheet.tsx` avec `overflow-y-auto`.

### Read-only
✅ **Confirmé:** Aucun champ de saisie, aucune logique d'envoi — affichage uniquement.

---

## Vérifications techniques

### TypeScript
```bash
$ cd /sessions/magical-amazing-noether/real-estate-project/apps/agent-app
$ /sessions/magical-amazing-noether/real-estate-project/node_modules/.bin/tsc --noEmit
✅ TypeScript check passed
```
**Résultat:** 0 erreur ✅

### Build
- **Status:** TypeScript compile sans erreur.
- **Note:** Next.js non installé dans l'environnement, mais la vérification TypeScript stricte (qui inclut les vérifications de types) passe.

---

## Contraintes respectées

- ✅ NE PAS ajouter de champ de saisie ni de logique d'envoi (lecture seule)
- ✅ NE PAS créer de composant custom
- ✅ NE PAS modifier la BDD
- ✅ NE PAS introduire de `any`, `@ts-ignore`
- ✅ NE PAS créer de fichier orphelin
- ✅ Travail sur `main`, pas de commit

---

## Changements résumés (diff conceptuel)

| Élément | Avant | Après |
|---------|-------|-------|
| State | `isActivitySheetOpen` | `isActivitySheetOpen`, `isMessageSheetOpen` |
| ClientDetailData | 11 props | 12 props (`allMessages` ajouté) |
| Query Messages | `.limit(4)` | `.limit(100)` |
| Messages preview | N/A | `allMessages.slice(0, 4)` |
| Button "Voir tout" | `onClick={() => {}}` | `onClick={() => setIsMessageSheetOpen(true)}` |
| Sheets | 1 (Activités) | 2 (Activités + Messages) |

---

## Livrables

1. ✅ `ClientDetailView.tsx` modifié
2. ✅ Ce dev-report

---

**Implémentation complète et prête à review.**

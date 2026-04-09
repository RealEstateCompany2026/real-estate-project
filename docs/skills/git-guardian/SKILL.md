---
name: git-guardian
description: |
  Garde-fou anti-perte de code. Se déclenche AUTOMATIQUEMENT dès que Claude crée, modifie ou supprime des fichiers de code dans un projet. Ce skill impose un workflow git rigoureux : vérifier le repo au début, commit après chaque bloc de travail, push en fin de session.
  MANDATORY TRIGGERS: développer, coder, implémenter, refactorer, créer un fichier, modifier un fichier, écrire du code, fix, bug, feature, sprint, parcours, composant, hook, page, migration, Next.js, React, TypeScript, Supabase, tout travail impliquant l'écriture ou modification de fichiers source (.ts, .tsx, .js, .jsx, .css, .sql, .py, .md dans un repo).
  Se déclenche aussi quand l'utilisateur dit "on enchaine", "continue", "next", ou demande de commencer un nouveau bloc de travail.
  En cas de doute, déclencher — mieux vaut un commit inutile qu'un code perdu.
---

# Git Guardian — Protocole anti-perte de code

## Pourquoi ce skill existe

Le code développé dans les sessions Claude est éphémère. Si les fichiers ne sont pas commités et pushés vers un remote Git avant la fin de la session, **ils sont perdus définitivement**. Ce skill existe parce que du code fonctionnel (Sprint 1, 17 écrans, 6 bugs corrigés) a déjà été perdu de cette façon. Ça ne doit plus jamais arriver.

## Règle d'or

> **Tout code créé ou modifié doit être commité et pushé vers le remote avant de passer à la tâche suivante.**

Ce n'est pas optionnel. Ce n'est pas "à la fin de la session". C'est après chaque bloc de travail significatif.

---

## Protocole en 4 phases

### Phase 1 — Pré-vol (au début de chaque session de dev)

Avant d'écrire la première ligne de code, vérifier :

1. **Identifier le repo Git** — chercher un `.git/` dans le workspace. S'il n'y en a pas, en créer un ou alerter l'utilisateur.
2. **Vérifier le remote** — `git remote -v`. S'il n'y a pas de remote, STOP. Configurer un remote avant de continuer.
3. **Vérifier l'identité git** — `git config user.email` et `git config user.name`. Configurer si manquant.
4. **Vérifier le push** — faire un `git push --dry-run` pour s'assurer que l'authentification fonctionne. Si ça échoue, résoudre AVANT de coder.
5. **Créer une branche feature** — ne jamais travailler directement sur main. Pattern : `feat/<parcours-ou-feature>`.

Si une de ces vérifications échoue, ne pas commencer à coder. Résoudre d'abord.

### Phase 2 — Commits incrémentaux (pendant le travail)

Commiter après chaque bloc de travail significatif :

- Un nouveau composant créé → commit
- Un fichier refactoré → commit
- Un bug fixé → commit
- Un hook data écrit → commit
- Une migration appliquée → commit
- Un groupe de fichiers liés modifiés (ex: barrel + imports) → commit

**Format de commit :**
```
<type>(<scope>): <description courte>

<détail si nécessaire>

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

Types : `feat`, `fix`, `refactor`, `docs`, `chore`, `test`

**Ne PAS attendre la fin de la session pour tout commiter en un seul gros commit.** Des commits petits et fréquents sont infiniment préférables.

### Phase 3 — Push régulier

Pusher vers le remote :

- Après chaque commit (idéal)
- Au minimum toutes les 3-4 tâches
- OBLIGATOIREMENT avant de dire "c'est terminé" ou "on passe à la suite"
- OBLIGATOIREMENT si la session semble longue ou si le contexte se remplit

Le push est ce qui rend le code persistent. Un commit sans push ne protège de rien.

### Phase 4 — Vérification finale

Avant de considérer un bloc de travail comme terminé :

1. `git status` — vérifier qu'il n'y a pas de fichiers non commités
2. `git log --oneline -5` — vérifier que les commits sont là
3. `git push` — vérifier que tout est pushé
4. Informer l'utilisateur : "Code commité et pushé sur `<branche>` — X commits, Y fichiers."

---

## Signaux d'alerte

Situations où le risque de perte est élevé — redoubler de vigilance :

- **Longue session** — plus la session est longue, plus le risque est élevé. Commit + push fréquents.
- **Travail dans un dossier hors repo** — si les fichiers modifiés ne sont pas dans un repo git, les copier dans le repo et commiter.
- **Contexte qui se remplit** — quand le résumé de conversation apparaît, c'est un signal. S'assurer que tout est pushé avant.
- **Fin de tâche** — l'utilisateur dit "ok", "merci", "on verra plus tard". Push immédiat.
- **Changement de sujet** — l'utilisateur passe à un autre sujet. Push ce qui est en cours.

---

## Ce qui n'a PAS besoin d'être commité

- Fichiers dans `/sessions/*/mnt/outputs/` (dossier persistant Cowork, pas un repo)
- Documentation de travail temporaire
- Fichiers de test jetables

Mais en cas de doute : commiter. Un commit inutile ne coûte rien. Du code perdu coûte des jours.

---

## Rappel technique

```bash
# Vérifier l'état
git status
git remote -v

# Créer une branche
git checkout -b feat/nom-feature

# Commit
git add <fichiers spécifiques>
git commit -m "feat(scope): description"

# Push
git push -u origin feat/nom-feature  # premier push
git push                              # pushes suivants

# Vérifier que tout est pushé
git status  # doit afficher "nothing to commit, working tree clean"
git log --oneline origin/feat/nom-feature..HEAD  # doit être vide
```

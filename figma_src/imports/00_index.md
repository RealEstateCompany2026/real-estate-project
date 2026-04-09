# Index complet — 168 écrans RealAgent

Ce fichier indexe les 168 écrans de RealAgent organisés par parcours et vague.

---

## Structure

- **19 parcours** (P1-P19)
- **3 vagues** de développement (Vague 1, 2, 3)
- **168 écrans** au total

Chaque écran a son propre fichier de prompt au format: `{ID}_{nom_snake_case}.md`

---


## Vague 1

### P1 — Sign-up
**Préfixe**: SUP | **Écrans**: 9

- **SUP-00** — Landing page (CTA)  
  Fichier: `SUP_00_landing_page_cta.md`  
  Desc: Page marketing avec bouton « Essai gratuit 14 jours »

- **SUP-01** — Sign-up : choix de méthode  
  Fichier: `SUP_01_sign-up__choix_de_méthode.md`  
  Desc: Google SSO (bouton principal) + Email/password (secondaire)

- **SUP-02** — Formulaire email/password  
  Fichier: `SUP_02_formulaire_email_password.md`  
  Desc: Email, mot de passe, confirmation. Indicateur de force du mdp.

- **SUP-03** — Vérification email  
  Fichier: `SUP_03_vérification_email.md`  
  Desc: « Vérifiez votre boîte mail » + bouton Renvoyer + lien support

- **SUP-04** — Routage persona  
  Fichier: `SUP_04_routage_persona.md`  
  Desc: 2 questions (seul/équipe + réseau) + champ conditionnel nom du réseau

- **SUP-05A** — Profil agent (A/D)  
  Fichier: `SUP_05A_profil_agent_a_d.md`  
  Desc: Prénom, nom, téléphone. Champs pré-remplis si Google SSO.

- **SUP-05B** — Profil admin + Organisation (B/C)  
  Fichier: `SUP_05B_profil_admin_plus_organisation_b_c.md`  
  Desc: Profil admin + nom agence, email agence, réseau (si C)

- **SUP-06** — Invitation équipe (B/C uniquement)  
  Fichier: `SUP_06_invitation_équipe_b_c_uniquement.md`  
  Desc: Saisie emails d’équipiers + bouton Inviter + option Passer

- **SUP-07** — Confirmation & redirection  
  Fichier: `SUP_07_confirmation_&_redirection.md`  
  Desc: Message de succès + redirection auto vers Onboarding Product Tour

### P2 — Sign-in
**Préfixe**: SIN | **Écrans**: 8

- **SIN-01** — Sign-in : connexion  
  Fichier: `SIN_01_sign-in__connexion.md`  
  Desc: Google SSO (principal) + formulaire email/password + liens vers sign-up et mot de passe oublié

- **SIN-02** — Mot de passe oublié : saisie email  
  Fichier: `SIN_02_mot_de_passe_oublié__saisie_email.md`  
  Desc: Champ email + bouton « Envoyer le lien » + lien retour sign-in

- **SIN-03** — Mot de passe oublié : confirmation envoi  
  Fichier: `SIN_03_mot_de_passe_oublié__confirmation_envoi.md`  
  Desc: « Vérifiez votre boîte mail » + bouton Renvoyer (cooldown 60s) + détection fournisseur

- **SIN-04** — Nouveau mot de passe  
  Fichier: `SIN_04_nouveau_mot_de_passe.md`  
  Desc: Nouveau mdp + confirmation + indicateur de force + bouton valider

- **SIN-05** — Confirmation reset  
  Fichier: `SIN_05_confirmation_reset.md`  
  Desc: « Mot de passe mis à jour » + redirection auto sign-in (3s)

- **SIN-06** — Lien expiré / invalide  
  Fichier: `SIN_06_lien_expiré___invalide.md`  
  Desc: Message d’erreur + bouton « Renvoyer un lien »

- **SIN-07** — Compte verrouillé (rate limit)  
  Fichier: `SIN_07_compte_verrouillé_rate_limit.md`  
  Desc: « Trop de tentatives » + countdown 5 min + lien mot de passe oublié

- **SIN-08** — Invitation : créer son accès  
  Fichier: `SIN_08_invitation__créer_son_accès.md`  
  Desc: Email pré-rempli + organisation affichée + choix Google/password + mini-profil

### P3 — Onboarding — Product Tour
**Préfixe**: OBT | **Écrans**: 9

- **OBT-00** — Modale bienvenue  
  Fichier: `OBT_00_modale_bienvenue.md`  
  Desc: Message de bienvenue personnalisé + CTA « C’est parti » + lien « Passer »

- **OBT-01** — Spotlight : Dashboard  
  Fichier: `OBT_01_spotlight__dashboard.md`  
  Desc: Highlight zone dashboard + tooltip explicatif

- **OBT-01B** — Spotlight : Dashboard + Nav  
  Fichier: `OBT_01B_spotlight__dashboard_plus_nav.md`  
  Desc: Spotlight combiné (version condensée)

- **OBT-02** — Spotlight : Navigation  
  Fichier: `OBT_02_spotlight__navigation.md`  
  Desc: Highlight menu latéral + tooltip

- **OBT-02B** — Spotlight : Clients & biens  
  Fichier: `OBT_02B_spotlight__clients_&_biens.md`  
  Desc: Highlight section clients + tooltip

- **OBT-03** — Spotlight : IA & triggers  
  Fichier: `OBT_03_spotlight__ia_&_triggers.md`  
  Desc: Highlight widget IA + tooltip

- **OBT-04** — Spotlight : Import  
  Fichier: `OBT_04_spotlight__import.md`  
  Desc: Highlight bouton import + tooltip

- **OBT-05** — Spotlight : Aide  
  Fichier: `OBT_05_spotlight__aide.md`  
  Desc: Highlight menu Aide + tooltip

- **OBT-06** — Modale de transition  
  Fichier: `OBT_06_modale_de_transition.md`  
  Desc: « Prochaine étape : configurons votre espace » + CTA

### P4 — Onboarding — Setup
**Préfixe**: OBS | **Écrans**: 6

- **OBS-00** — Stepper Setup  
  Fichier: `OBS_00_stepper_setup.md`  
  Desc: Barre de progression horizontale persistante, indique l’étape en cours

- **OBS-01** — Profil professionnel  
  Fichier: `OBS_01_profil_professionnel.md`  
  Desc: Formulaire en sections dépliables : identité, contact, métier, réseau. Jauge de complétion.

- **OBS-02** — Organisation  
  Fichier: `OBS_02_organisation.md`  
  Desc: Identité agence, infos légales (SIRET, carte T/G), logo. Champs réseau pré-remplis si C.

- **OBS-03** — Documents réglementaires  
  Fichier: `OBS_03_documents_réglementaires.md`  
  Desc: Zone d’upload par type de document. Statut par document. Alertes d’expiration.

- **OBS-04** — Paramètres app  
  Fichier: `OBS_04_paramètres_app.md`  
  Desc: Langue, fuseau, notifications, connexion calendrier.

- **OBS-05** — Confirmation Setup  
  Fichier: `OBS_05_confirmation_setup.md`  
  Desc: Message de succès + résumé de la complétion + CTA vers dashboard ou import BDD.

### P5 — Import Base de Données
**Préfixe**: IMP | **Écrans**: 7

- **IMP-01** — Choix du type d’import  
  Fichier: `IMP_01_choix_du_type_d’import.md`  
  Desc: Sélection : Clients, Biens, Affaires. Option « Pas de fichier ».

- **IMP-02** — Upload fichier  
  Fichier: `IMP_02_upload_fichier.md`  
  Desc: Zone drag & drop, formats acceptés, barre de progression, aperçu 5 lignes.

- **IMP-03** — Mapping des colonnes  
  Fichier: `IMP_03_mapping_des_colonnes.md`  
  Desc: Tableau colonne source ↔ champ cible avec auto-mapping + dropdowns.

- **IMP-04** — Prévisualisation  
  Fichier: `IMP_04_prévisualisation.md`  
  Desc: Résumé : lignes valides / avertissements / erreurs. Détail par ligne. Gestion doublons.

- **IMP-05** — Import en cours  
  Fichier: `IMP_05_import_en_cours.md`  
  Desc: Barre de progression. Option de navigation (import en arrière-plan).

- **IMP-06** — Résultat & actions  
  Fichier: `IMP_06_résultat_&_actions.md`  
  Desc: Récapitulatif chiffré + CTA (voir, reimporter, corriger, dashboard).

- **IMP-07** — Erreur de parsing  
  Fichier: `IMP_07_erreur_de_parsing.md`  
  Desc: Message d’erreur + suggestion FAQ + bouton réessayer.

### P6 — Ajouter un client
**Préfixe**: CLI | **Écrans**: 7

- **CLI-01** — Page création client  
  Fichier: `CLI_01_page_création_client.md`  
  Desc: Formulaire complet en sections repliables. Header avec titre « Nouveau client » et bouton retour.

- **CLI-02** — Section Identité  
  Fichier: `CLI_02_section_identité.md`  
  Desc: Type de client (select : Propriétaire, Acquéreur, Locataire, Vendeur, Autre), Civilité (M./Mme), Nom, Prénom. Tous obligatoires.

- **CLI-03** — Section Coordonnées  
  Fichier: `CLI_03_section_coordonnées.md`  
  Desc: Téléphone (format international auto-détecté), Email (validation format), Adresse (auto-complétion via API adresse.data.gouv.fr). Au moins 1 contact requis.

- **CLI-04** — Alerte doublon inline  
  Fichier: `CLI_04_alerte_doublon_inline.md`  
  Desc: Banner contextuel sous le champ déclencheur. Affiche nom + type + agent référent du doublon potentiel. Actions : « Voir la fiche » / « Créer quand même ».

- **CLI-05** — Section Projet immobilier  
  Fichier: `CLI_05_section_projet_immobilier.md`  
  Desc: Nature du projet, Budget (fourchette min/max), Secteur géographique (communes, auto-complétion), Critères (surface, nb pièces, etc.).

- **CLI-06** — Section Notes & tags  
  Fichier: `CLI_06_section_notes_&_tags.md`  
  Desc: Champ texte libre (note), Tags (multi-select créables), Source d’acquisition (select : bouche-à-oreille, portail, vitrine, etc.).

- **CLI-07** — Modale création rapide  
  Fichier: `CLI_07_modale_création_rapide.md`  
  Desc: Modale compacte avec les 5 champs essentiels + dédoublonnage. Utilisée dans les créations contextuelles.

### P7 — Ajouter un bien
**Préfixe**: BIE | **Écrans**: 9

- **BIE-01** — Page création bien  
  Fichier: `BIE_01_page_création_bien.md`  
  Desc: Formulaire multi-sections repliables. Header avec titre, breadcrumb, jauge de complétude.

- **BIE-02** — Section Informations clés  
  Fichier: `BIE_02_section_informations_clés.md`  
  Desc: Type de bien (2 niveaux), type d’opération, adresse, surface, pièces, prix, propriétaire. Tous obligatoires.

- **BIE-03** — Section Description  
  Fichier: `BIE_03_section_description.md`  
  Desc: Titre annonce (auto-généré), description longue, étage, année construction, état général.

- **BIE-04** — Section Caractéristiques  
  Fichier: `BIE_04_section_caractéristiques.md`  
  Desc: Surface terrain, chambres, SDB, chauffage, exposition, annexes (checkboxes), DPE, charges, taxe foncière.

- **BIE-05** — Section Médias  
  Fichier: `BIE_05_section_médias.md`  
  Desc: Upload photos (grid + drag & drop), upload documents (diagnostics, plans).

- **BIE-06** — Section Notes & statut  
  Fichier: `BIE_06_section_notes_&_statut.md`  
  Desc: Statut du bien, référence interne, mandat, note interne, tags.

- **BIE-07** — Alerte doublon adresse  
  Fichier: `BIE_07_alerte_doublon_adresse.md`  
  Desc: Banner contextuel sous le champ adresse. Affiche adresse + type + statut du doublon. Actions : Voir la fiche / Créer quand même.

- **BIE-08** — Jauge de complétude  
  Fichier: `BIE_08_jauge_de_complétude.md`  
  Desc: Barre de progression dans le header. Calculée dynamiquement selon les champs renseignés (pondérés par criticité).

- **BIE-09** — Sélecteur DPE visuel  
  Fichier: `BIE_09_sélecteur_dpe_visuel.md`  
  Desc: Composant custom affichant les classes AàG en vignettes colorées. Clic pour sélectionner.


## Vague 2

### P8 — Fiche client
**Préfixe**: FIC | **Écrans**: 10

- **FIC-01** — Header fiche client  
  Fichier: `FIC_01_header_fiche_client.md`  
  Desc: Nom, prénom, badge type, avatar (initiales), agent référent, jauge de complétude, barre d’actions rapides.

- **FIC-02** — Onglet Résumé  
  Fichier: `FIC_02_onglet_résumé.md`  
  Desc: Carte identité + coordonnées (éditable inline), tags, note, source d’acquisition, 3 derniers événements.

- **FIC-03** — Onglet Projet  
  Fichier: `FIC_03_onglet_projet.md`  
  Desc: Critères de recherche (éditables inline) : nature, budget, secteur, surface, pièces, types de biens.

- **FIC-04** — Onglet Biens  
  Fichier: `FIC_04_onglet_biens.md`  
  Desc: Liste des biens du client (propriétaire). Cards avec photo, adresse, prix, statut. Bouton « + Ajouter un bien ».

- **FIC-05** — Onglet Affaires  
  Fichier: `FIC_05_onglet_affaires.md`  
  Desc: Liste des affaires liées. Cards avec type, statut pipeline, montant, dates. Bouton « + Nouvelle affaire ».

- **FIC-06** — Onglet Événements  
  Fichier: `FIC_06_onglet_événements.md`  
  Desc: Timeline chronologique. Filtres par type. Chaque entrée : icône + titre + date + détail. Bouton « + Nouvel événement ».

- **FIC-07** — Onglet Documents  
  Fichier: `FIC_07_onglet_documents.md`  
  Desc: Liste des documents. Upload drag & drop. Colonnes : nom, type, date, taille. Preview PDF inline.

- **FIC-08** — Mode édition inline  
  Fichier: `FIC_08_mode_édition_inline.md`  
  Desc: Transformation des champs texte en inputs. Auto-save + indicateur. Bouton « Annuler » pour revenir au mode lecture.

- **FIC-09** — Modale fusion doublons  
  Fichier: `FIC_09_modale_fusion_doublons.md`  
  Desc: Comparaison côte-à-côte de 2 fiches. Sélection champ par champ de la valeur à conserver. Preview du résultat.

- **FIC-10** — Export PDF  
  Fichier: `FIC_10_export_pdf.md`  
  Desc: Génération d’un PDF récapitulatif de la fiche client (identité, projet, historique récent). Téléchargement direct.

### P9 — Fiche bien
**Préfixe**: FIB | **Écrans**: 11

- **FIB-01** — Header fiche bien  
  Fichier: `FIB_01_header_fiche_bien.md`  
  Desc: Titre, badge statut, référence, ligne métriques clés, jauge complétude, barre actions.

- **FIB-02** — Galerie photos  
  Fichier: `FIB_02_galerie_photos.md`  
  Desc: Carousel pleine largeur. Lightbox fullscreen. Ajout/réordonnancement/suppression en mode édition.

- **FIB-03** — Onglet Détails  
  Fichier: `FIB_03_onglet_détails.md`  
  Desc: Description, caractéristiques, DPE visuel, chauffage, annexes, charges, mandat, notes, tags. Édition inline.

- **FIB-04** — Onglet Propriétaire  
  Fichier: `FIB_04_onglet_propriétaire.md`  
  Desc: Carte résumé du client propriétaire. Lien fiche client. Action : changer le propriétaire.

- **FIB-05** — Onglet Affaires  
  Fichier: `FIB_05_onglet_affaires.md`  
  Desc: Liste des affaires liées. Cards avec statut pipeline. Bouton + Nouvelle affaire.

- **FIB-06** — Onglet Événements  
  Fichier: `FIB_06_onglet_événements.md`  
  Desc: Timeline chronologique des interactions liées au bien. Même composant FIC-06.

- **FIB-07** — Onglet Documents  
  Fichier: `FIB_07_onglet_documents.md`  
  Desc: Liste des documents liés au bien (diagnostics, plans, mandats). Upload drag & drop.

- **FIB-08** — Onglet Annonce  
  Fichier: `FIB_08_onglet_annonce.md`  
  Desc: Preview de l’annonce. Statut de diffusion (non publié, actif, en pause). Bouton publier.

- **FIB-09** — Carte de localisation  
  Fichier: `FIB_09_carte_de_localisation.md`  
  Desc: Mini-carte (Leaflet) dans l’onglet Détails. Marker sur l’adresse. Non éditable (dérivée des coordonnées GPS).

- **FIB-10** — Modale partage  
  Fichier: `FIB_10_modale_partage.md`  
  Desc: Génération de lien public. Choix de la durée d’expiration. Copie du lien + QR code.

- **FIB-11** — PDF export bien  
  Fichier: `FIB_11_pdf_export_bien.md`  
  Desc: Génération d’une fiche bien formatée (vitrine). Photos, description, caractéristiques, DPE, plan.

### P10 — Affaires
**Préfixe**: AFF | **Écrans**: 12

- **AFF-01** — Vue kanban  
  Fichier: `AFF_01_vue_kanban.md`  
  Desc: Pipeline en colonnes drag & drop. Filtres. Toggle kanban/liste.

- **AFF-02** — Vue liste  
  Fichier: `AFF_02_vue_liste.md`  
  Desc: Tableau trié/filtrable. Colonnes : type, bien, client, montant, statut, agent, date. Export CSV.

- **AFF-03** — Formulaire création  
  Fichier: `AFF_03_formulaire_création.md`  
  Desc: Création en 5 étapes (type, bien, clients, détails, mandat).

- **AFF-04** — Header fiche affaire  
  Fichier: `AFF_04_header_fiche_affaire.md`  
  Desc: Badge type, stepper pipeline interactif, bien (lien), clients, montant, agent.

- **AFF-05** — Onglet Détails  
  Fichier: `AFF_05_onglet_détails.md`  
  Desc: Montant, honoraires, dates, mandat. Éditable inline.

- **AFF-06** — Onglet Offres  
  Fichier: `AFF_06_onglet_offres.md`  
  Desc: Liste des offres. Ajout via modale. Statut, montant, date, commentaire.

- **AFF-07** — Onglet Événements  
  Fichier: `AFF_07_onglet_événements.md`  
  Desc: Timeline des interactions. Même composant FIC-06.

- **AFF-08** — Onglet Documents  
  Fichier: `AFF_08_onglet_documents.md`  
  Desc: Documents liés à l’affaire. Upload.

- **AFF-09** — Onglet Notes  
  Fichier: `AFF_09_onglet_notes.md`  
  Desc: Notes internes multi-contributeurs. Ajout rapide.

- **AFF-10** — Modale transition  
  Fichier: `AFF_10_modale_transition.md`  
  Desc: Formulaire contextuel lors d’un changement d’étape (ex : saisie montant offre).

- **AFF-11** — Modale offre  
  Fichier: `AFF_11_modale_offre.md`  
  Desc: Création/édition d’une offre : montant, client, date validité, commentaire.

- **AFF-12** — Card affaire (kanban)  
  Fichier: `AFF_12_card_affaire_kanban.md`  
  Desc: Composant card dans le kanban : badge type, adresse bien, client, montant, avatar agent.

### P11 — Événements
**Préfixe**: EVT | **Écrans**: 9

- **EVT-01** — Vue calendrier  
  Fichier: `EVT_01_vue_calendrier.md`  
  Desc: Calendrier semaine/jour/mois. Code couleur par type. Drag & drop. Filtre agent et type.

- **EVT-02** — Modale création événement  
  Fichier: `EVT_02_modale_création_événement.md`  
  Desc: Formulaire : type, titre, date/heure, clients, bien, affaire, lieu, rappel, note.

- **EVT-03** — Popover détail  
  Fichier: `EVT_03_popover_détail.md`  
  Desc: Détail d’un événement au clic. Titre, type, heure, participants. Actions : éditer, supprimer, fait.

- **EVT-04** — Widget tâches (dashboard)  
  Fichier: `EVT_04_widget_tâches_dashboard.md`  
  Desc: Liste des tâches triées par échéance. Checkboxes. Tâches en retard highlightées.

- **EVT-05** — Centre de notifications  
  Fichier: `EVT_05_centre_de_notifications.md`  
  Desc: Dropdown depuis la cloche header. Liste des notifications. Marquer comme lu.

- **EVT-06** — Modale édition  
  Fichier: `EVT_06_modale_édition.md`  
  Desc: Même formulaire que la création, pré-rempli. + bouton Supprimer.

- **EVT-07** — Vue jour détaillée  
  Fichier: `EVT_07_vue_jour_détaillée.md`  
  Desc: Planning heure par heure. Affichage dense avec blocs colorés.

- **EVT-08** — Overlay multi-agent  
  Fichier: `EVT_08_overlay_multi-agent.md`  
  Desc: Superposition des calendriers de plusieurs agents. Couleurs différentes par agent.

- **EVT-09** — Notification push  
  Fichier: `EVT_09_notification_push.md`  
  Desc: Notification navigateur (Web Push API). Titre + détail court.

### P12 — Documents
**Préfixe**: DOC | **Écrans**: 8

- **DOC-01** — Bibliothèque documentaire  
  Fichier: `DOC_01_bibliothèque_documentaire.md`  
  Desc: Vue liste/grille. Filtres, recherche, upload. Toutes les catégories.

- **DOC-02** — Zone d’upload  
  Fichier: `DOC_02_zone_d’upload.md`  
  Desc: Drag & drop + clic. Multi-fichiers. Barre de progression.

- **DOC-03** — Modale métadonnées  
  Fichier: `DOC_03_modale_métadonnées.md`  
  Desc: Nom, catégorie, entité liée, dates. Affichée pour chaque fichier uploadé.

- **DOC-04** — Prévisualisation  
  Fichier: `DOC_04_prévisualisation.md`  
  Desc: Viewer PDF inline (iframe). Lightbox pour images. Téléchargement pour les autres formats.

- **DOC-05** — Checklist obligatoires  
  Fichier: `DOC_05_checklist_obligatoires.md`  
  Desc: Liste des documents requis par type d’opération. Statut présent/manquant/expiré.

- **DOC-06** — Section Modèles  
  Fichier: `DOC_06_section_modèles.md`  
  Desc: Liste des modèles disponibles. Aperçu. Bouton Générer.

- **DOC-07** — Modale génération modèle  
  Fichier: `DOC_07_modale_génération_modèle.md`  
  Desc: Sélection du contexte (client/bien/affaire). Preview du document rempli. Téléchargement.

- **DOC-08** — Alerte expiration  
  Fichier: `DOC_08_alerte_expiration.md`  
  Desc: Banner dans la fiche bien si un diagnostic expire dans < 30 jours.

### P13 — Audit Base de Données
**Préfixe**: AUD | **Écrans**: 8

- **AUD-01** — Dashboard Audit BDD  
  Fichier: `AUD_01_dashboard_audit_bdd.md`  
  Desc: Score global, 4 dimensions, graphique évolution, top 5 recommandations.

- **AUD-02** — Section Complétude  
  Fichier: `AUD_02_section_complétude.md`  
  Desc: Répartition par tranche, liste fiches à enrichir, champs manquants.

- **AUD-03** — Section Doublons  
  Fichier: `AUD_03_section_doublons.md`  
  Desc: Paires de doublons, score similarité, actions fusionner/ignorer.

- **AUD-04** — Section Fraîcheur  
  Fichier: `AUD_04_section_fraîcheur.md`  
  Desc: Distribution par date MAJ, fiches dormantes, statuts incohérents.

- **AUD-05** — Section Conformité  
  Fichier: `AUD_05_section_conformité.md`  
  Desc: Score conformité doc, documents manquants, expirations.

- **AUD-06** — Carte fiche à enrichir  
  Fichier: `AUD_06_carte_fiche_à_enrichir.md`  
  Desc: Card résumé d’une fiche : nom, score, champs manquants (chips), lien vers la fiche.

- **AUD-07** — Card doublon  
  Fichier: `AUD_07_card_doublon.md`  
  Desc: Comparaison Fiche A / Fiche B. Score. Actions. Critères highlightés.

- **AUD-08** — Widget dashboard  
  Fichier: `AUD_08_widget_dashboard.md`  
  Desc: Mini-widget « Qualité BDD » sur le dashboard principal. Score + tendance.

### P14 — Annonce immobilière
**Préfixe**: ANN | **Écrans**: 9

- **ANN-01** — Éditeur d’annonce  
  Fichier: `ANN_01_éditeur_d’annonce.md`  
  Desc: Formulaire pré-rempli : titre, description, sélection photos, mentions. Split view avec preview.

- **ANN-02** — Checklist pré-publication  
  Fichier: `ANN_02_checklist_pré-publication.md`  
  Desc: Vérification des champs requis. Items vert/rouge. Liens « Compléter ».

- **ANN-03** — Preview annonce  
  Fichier: `ANN_03_preview_annonce.md`  
  Desc: Simulation du rendu final : carousel, caractéristiques, DPE, description, carte.

- **ANN-04** — Page publique annonce  
  Fichier: `ANN_04_page_publique_annonce.md`  
  Desc: Page accessible sans auth. Photos, description, DPE, caractéristiques, formulaire contact.

- **ANN-05** — Modale publication  
  Fichier: `ANN_05_modale_publication.md`  
  Desc: Confirmation + choix des canaux. Bouton Publier.

- **ANN-06** — Panneau gestion annonce  
  Fichier: `ANN_06_panneau_gestion_annonce.md`  
  Desc: Statut, date publication, lien, actions (pause, retrait, modification).

- **ANN-07** — Dashboard stats annonce  
  Fichier: `ANN_07_dashboard_stats_annonce.md`  
  Desc: Vues, contacts, conversion, graphique courbe. Dans l’onglet Annonce de la fiche bien.

- **ANN-08** — Formulaire contact public  
  Fichier: `ANN_08_formulaire_contact_public.md`  
  Desc: Sur la page publique : nom, email, téléphone, message. Crée un lead dans l’app.

- **ANN-09** — Site web agence  
  Fichier: `ANN_09_site_web_agence.md`  
  Desc: Vitrine avec toutes les annonces actives. Template personnalisable (post-MVP).


## Vague 3

### P15 — Automatisations IA
**Préfixe**: AIA | **Écrans**: 9

- **AIA-01** — Onglet Matching (fiche bien)  
  Fichier: `AIA_01_onglet_matching_fiche_bien.md`  
  Desc: Liste des clients acquéreurs potentiels classés par score. Actions : appeler, email, visite.

- **AIA-02** — Biens correspondants (fiche client)  
  Fichier: `AIA_02_biens_correspondants_fiche_client.md`  
  Desc: Liste des biens matchant les critères du client. Actions : partager, planifier visite.

- **AIA-03** — Générateur de descriptions  
  Fichier: `AIA_03_générateur_de_descriptions.md`  
  Desc: 3 variantes proposées. Sélection + édition. Historique des générations.

- **AIA-04** — Badge scoring lead  
  Fichier: `AIA_04_badge_scoring_lead.md`  
  Desc: Badge Hot/Warm/Cold sur chaque lead dans la liste et la fiche.

- **AIA-05** — Widget Suggestions du jour  
  Fichier: `AIA_05_widget_suggestions_du_jour.md`  
  Desc: Dashboard : 10 suggestions priorisées avec actions directes et dismiss.

- **AIA-06** — Section Estimation (fiche bien)  
  Fichier: `AIA_06_section_estimation_fiche_bien.md`  
  Desc: Fourchette de prix, prix/m², nb comparables, carte. Bouton générer rapport.

- **AIA-07** — Carte des comparables  
  Fichier: `AIA_07_carte_des_comparables.md`  
  Desc: Mini-carte Leaflet avec markers des transactions DVF récentes.

- **AIA-08** — Rapport d’estimation PDF  
  Fichier: `AIA_08_rapport_d’estimation_pdf.md`  
  Desc: Document PDF formatifé : bien, comparables, fourchette, disclaimer.

- **AIA-09** — Settings IA  
  Fichier: `AIA_09_settings_ia.md`  
  Desc: Page settings admin : activation/désactivation de chaque module. Quotas API.

### P16 — Détection mandat vente / gestion
**Préfixe**: DET | **Écrans**: 8

- **DET-01** — Tableau de bord prospection  
  Fichier: `DET_01_tableau_de_bord_prospection.md`  
  Desc: Vue liste de tous les signaux détectés, filtrable par type/score/zone/statut, avec compteurs synthétiques

- **DET-02** — Carte thermique  
  Fichier: `DET_02_carte_thermique.md`  
  Desc: Carte Leaflet avec heatmap des zones à forte opportunité de mandats

- **DET-03** — Fiche signal  
  Fichier: `DET_03_fiche_signal.md`  
  Desc: Détail d'un signal : propriétaire, bien, contexte, historique, comparables marché, score

- **DET-04** — Générateur d'action  
  Fichier: `DET_04_générateur_d'action.md`  
  Desc: Choix du type d'action (appel/email/visite), génération IA du contenu, prévisualisation, envoi

- **DET-05** — Script d'appel  
  Fichier: `DET_05_script_d'appel.md`  
  Desc: Script généré par Claude API avec arguments personnalisés selon le signal

- **DET-06** — Email de prospection  
  Fichier: `DET_06_email_de_prospection.md`  
  Desc: Email pré-rédigé avec objet, corps HTML, lien estimation gratuite, CTA

- **DET-07** — Stats conversion  
  Fichier: `DET_07_stats_conversion.md`  
  Desc: KPIs de prospection : taux de contact, taux de conversion, mandats signés, CA prévisionnel

- **DET-08** — Vue équipe  
  Fichier: `DET_08_vue_équipe.md`  
  Desc: Admin B/C : signaux de tous les agents, assignation, stats par collaborateur

### P17 — Campagne carnet d'entretien
**Préfixe**: CAM | **Écrans**: 9

- **CAM-01** — Liste campagnes  
  Fichier: `CAM_01_liste_campagnes.md`  
  Desc: Vue liste de toutes les campagnes (actives, planifiées, terminées) avec stats rapides

- **CAM-02** — Création campagne  
  Fichier: `CAM_02_création_campagne.md`  
  Desc: Wizard en 4 étapes : Audience → Contenu → Template → Planification

- **CAM-03** — Sélecteur d'audience  
  Fichier: `CAM_03_sélecteur_d'audience.md`  
  Desc: Filtres propriétaires (ville, type bien, ancienneté) + compteur en temps réel

- **CAM-04** — Configuration modules  
  Fichier: `CAM_04_configuration_modules.md`  
  Desc: Toggle ON/OFF pour chaque module de contenu + paramètres spécifiques

- **CAM-05** — Éditeur de template  
  Fichier: `CAM_05_éditeur_de_template.md`  
  Desc: Personnalisation visuelle : logo, couleurs, photo, signature, mentions légales

- **CAM-06** — Prévisualisation  
  Fichier: `CAM_06_prévisualisation.md`  
  Desc: Rendu email desktop + mobile avec données réelles d'un propriétaire exemple

- **CAM-07** — Dashboard campagne  
  Fichier: `CAM_07_dashboard_campagne.md`  
  Desc: Analytics détaillées : courbe envois/ouvertures/clics, liste destinataires avec statut

- **CAM-08** — Page désabonnement  
  Fichier: `CAM_08_page_désabonnement.md`  
  Desc: Formulaire de gestion des préférences email (réduire fréquence ou se désabonner)

- **CAM-09** — Page estimation CTA  
  Fichier: `CAM_09_page_estimation_cta.md`  
  Desc: Landing page personnalisée avec estimation du bien + formulaire de contact

### P18 — Connexion CRM & intégrations
**Préfixe**: CRM | **Écrans**: 10

- **CRM-01** — Marketplace connecteurs  
  Fichier: `CRM_01_marketplace_connecteurs.md`  
  Desc: Grille de tous les connecteurs disponibles avec statut, icône, catégorie

- **CRM-02** — Fiche connecteur  
  Fichier: `CRM_02_fiche_connecteur.md`  
  Desc: Détail du connecteur : description, pré-requis, bouton connexion, configuration

- **CRM-03** — Assistant d'import  
  Fichier: `CRM_03_assistant_d'import.md`  
  Desc: 4 étapes : Connexion → Mapping → Prévisualisation → Import avec progression

- **CRM-04** — Mapping des champs  
  Fichier: `CRM_04_mapping_des_champs.md`  
  Desc: Table de correspondance champ source → champ app, avec auto-détection

- **CRM-05** — Multi-diffusion portails  
  Fichier: `CRM_05_multi-diffusion_portails.md`  
  Desc: Sélection portails, mapping spécifique, alertes, publication

- **CRM-06** — Journal de synchronisation  
  Fichier: `CRM_06_journal_de_synchronisation.md`  
  Desc: Logs détaillés de chaque sync : date, direction, entité, statut, diff

- **CRM-07** — Dashboard intégrations  
  Fichier: `CRM_07_dashboard_intégrations.md`  
  Desc: Vue d'ensemble : santé des connexions, dernière sync, erreurs, volume de données

- **CRM-08** — Signature électronique  
  Fichier: `CRM_08_signature_électronique.md`  
  Desc: Envoi en signature : sélection document, signataires, ordre, suivi

- **CRM-09** — Gestion agence (B/C)  
  Fichier: `CRM_09_gestion_agence_b_c.md`  
  Desc: Admin : connecteurs agence, permissions, quotas, dashboard global

- **CRM-10** — Résolution de conflits  
  Fichier: `CRM_10_résolution_de_conflits.md`  
  Desc: Comparaison côte à côte des versions en conflit, choix de la version à garder

### P19 — Réactivation de base dormante
**Préfixe**: REA | **Écrans**: 10

- **REA-01** — Dashboard Réactivation  
  Fichier: `REA_01_dashboard_réactivation.md`  
  Desc: Vue principale : répartition base par segment, courbe évolution, funnel, score santé base, comparatif coûts

- **REA-02** — Carte thermique base  
  Fichier: `REA_02_carte_thermique_base.md`  
  Desc: Carte Leaflet avec heatmap des contacts par segment et par zone géographique

- **REA-03** — Liste segmentée  
  Fichier: `REA_03_liste_segmentée.md`  
  Desc: Liste de contacts filtrée par segment avec actions rapides (lancer playbook, appeler, envoyer email)

- **REA-04** — Bibliothèque de playbooks  
  Fichier: `REA_04_bibliothèque_de_playbooks.md`  
  Desc: Catalogue des playbooks disponibles (préconfigurés + personnalisés), avec preview des étapes

- **REA-05** — Éditeur de playbook  
  Fichier: `REA_05_éditeur_de_playbook.md`  
  Desc: Création / modification d'un playbook : drag & drop des étapes, délais, conditions, contenu

- **REA-06** — Suivi playbook actif  
  Fichier: `REA_06_suivi_playbook_actif.md`  
  Desc: Vue d'un playbook en cours : contacts engagés, étape courante de chaque contact, taux de progression

- **REA-07** — Fiche contact enrichie  
  Fichier: `REA_07_fiche_contact_enrichie.md`  
  Desc: Ajout sur la fiche client (P8) : badge segment, timeline engagement, signaux collectés, playbook actif

- **REA-08** — Catalogue services gratuits  
  Fichier: `REA_08_catalogue_services_gratuits.md`  
  Desc: Liste des services déployables avec configuration (audience, fréquence, personnalisation)

- **REA-09** — Analytics réactivation  
  Fichier: `REA_09_analytics_réactivation.md`  
  Desc: KPIs détaillés : taux par segment, coût réactivation vs acquisition, ROI, prédictions

- **REA-10** — Vue agence (B/C)  
  Fichier: `REA_10_vue_agence_b_c.md`  
  Desc: Pilotage multi-agents : répartition, classement, playbooks agence, budget comparatif


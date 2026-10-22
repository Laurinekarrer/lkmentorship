# Becoming Sessions — Pause + Waitlist (22 octobre 2026)

## Ce que change ce correctif
- Page `/community/becoming-sessions/` maintenue : identité graphique, 3 dimensions, 5 thèmes, contenu de l'atelier 01 et présentation de Laurine CONSERVÉS.
- Toutes les incitations à payer 10 € remplacées par **Join the waitlist**.
- Aucune date du 26 octobre ni tarif payant affichés pour les prochaines Sessions.
- Petit formulaire prénom + e-mail + consentement pour les prochaines dates. Pas de paiement.
- La page `/community/` annonce la pause et pointe vers la waitlist.
- **CoCo 02 et son lien Stripe à partir de 2 € ne sont pas modifiés.**

## Installation GitHub
Dans le dépôt `Laurinekarrer/lkmentorship`, branche `main`, uploader les fichiers du ZIP à la racine en conservant EXACTEMENT les sous-dossiers `app/`, `content/` et `public/`. Remplacer les fichiers existants demandés et ajouter le nouveau `WaitlistForm.tsx`. Ne pas uploader le ZIP entier comme une pièce jointe du dépôt.

Fichiers inclus :
- `app/community/becoming-sessions/page.tsx` (remplacement)
- `app/community/becoming-sessions/WaitlistForm.tsx` (nouveau)
- `app/community/page.tsx` (remplacement)
- `content/becomingClub.ts` (remplacement; correction précédente du `does not` conservée)
- `public/__forms.html` (remplacement pour permettre la détection de la nouvelle waitlist par Netlify)

## Vérifications après déploiement
1. Netlify → Deploys : dernier déploiement **Published**. En cas de `Failed`, ouvrir **Deploy log** et relever les lignes d'erreur, avant de modifier encore les fichiers.
2. Site : `https://laurinekarrer.com/community/becoming-sessions/` ; vérifier « Join the waitlist » à tous les endroits et aucune incitation à payer 10 €.
3. Netlify → Forms : vérifier que le formulaire **becoming-sessions-waitlist** est détecté et que la détection Netlify Forms est activée.
4. Faire une soumission **avec ta propre adresse e-mail**, puis vérifier qu'elle apparaît dans **Forms → becoming-sessions-waitlist → Submissions**. Ne pas considérer la waitlist comme opérationnelle tant que ce test n'est pas concluant.
5. Si le formulaire ne transmet pas la demande, le site affiche un lien mailto prérempli pour joindre la waitlist par e-mail.
6. Vérifier que CoCo 02 et son paiement Stripe fonctionnent toujours.

**Attention hors site :** le lien Stripe 10 € de la session 01 existe encore dans le compte Stripe (non modifié par ce ZIP). Si tu souhaites suspendre intégralement la vente, désactive/archives aussi son lien dans Stripe, et actualise l'ancien événement Meetup du 26 octobre.

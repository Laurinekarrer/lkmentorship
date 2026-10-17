# Becoming Sessions — Réservation directe + conditions séparées

Cette archive contient UNIQUEMENT les fichiers nécessaires à la modification de la page Becoming Sessions. Ne touche pas au design des autres pages.

## Résultat attendu
- Fin du formulaire « Join priority list » et des messages « form submission ».
- Boutons « Book my place · €10 » ouvrant le Stripe Payment Link officiel.
- Précision claire : les 10 € couvrent la place dans le cercle, PAS les boissons ni la nourriture.
- Petite mention sous le bouton « Please review our cancellation & refund policy » avec ouverture d'une page dédiée, sur le même domaine.
- La page de conditions reprend remboursement jusqu'à 24h, annulation organisatrice, contact `info.laurinekarrerstudio@gmail.com`, lieu annoncé par email.
- Les 3 dimensions et 5 sessions restent inchangées.

## Où mettre chaque fichier

Décompresse le ZIP, puis dans ton dépôt GitHub `Laurinekarrer/lkmentorship` sur `main` :

1. Remplace `app/community/becoming-sessions/page.tsx` (c'est indispensable : actuellement, GitHub contient encore le formulaire !).
2. Remplace `content/becomingSessions.ts` (Stripe 10 €, six places, lieu à confirmer).
3. Crée `app/community/becoming-sessions/cancellation-policy/page.tsx`.
4. Crée `app/community/becoming-sessions/cancellation-policy/page.module.css`.

Pour un remplacement sur GitHub, va dans le chemin du fichier, clique sur Edit (crayon), colle le contenu du fichier téléchargé, clique sur Commit changes. Pour les 2 nouveaux fichiers, navigue dans le dossier `app/community/becoming-sessions` puis Add file > Create new file, saisis `cancellation-policy/page.tsx` (puis idem pour `page.module.css`) et colle le contenu correspondant. Tu peux aussi faire ces opérations depuis un clone Git local. Ne charge pas le ZIP directement comme si c'était un fichier du site.

Après modification : Netlify > Deploys doit indiquer Published sur le dernier commit. Ne partage pas le lien avant d'avoir confirmé que le nouveau bouton s'ouvre et que la page policy s'affiche.

## Tester

- https://laurinekarrer.com/community/becoming-sessions/ doit afficher « Book my place · €10 » à la place du formulaire.
- https://laurinekarrer.com/community/becoming-sessions/cancellation-policy/ doit afficher la mini-page dédiée.
- Le bouton doit ouvrir https://buy.stripe.com/6oU4gBb8yge1gxOdRM0kE00 sans payer pendant le test.
- Dans Stripe, vérifie quantité fixée 1, limite à six paiements, collecte d'email et nom, politique consultable avant paiement.
- Si Stripe checkout est inaccessible, n'annonce pas la réservation comme active.

**Attention :** ces modifications ne sont PAS automatiquement publiées sur GitHub ni sur Netlify depuis cette conversation.

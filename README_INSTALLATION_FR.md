# CoCo 02 — lien Stripe intégré (22 octobre 2026)

## Mise à jour prête à importer

Le paiement Stripe officiel transmis a été intégré :
`https://buy.stripe.com/3cI00l6SiaTH2GY8xs0kE02`

La page `/community/coco-02/` contient désormais un bouton actif **Book my spot · from €2**, qui ouvre directement ce lien dans un nouvel onglet. Le formulaire Meetup ne confirme pas la réservation ; le paiement Stripe est requis. Le lien vers la politique d'annulation apparaît sous le bouton. Le prix affiché est un minimum de 2 € ; les boissons et la nourriture sont à régler à part.

## Installation GitHub (branche main)

1. Extraire ce ZIP sur l'ordinateur.
2. Déposer les dossiers `app/` et `content/` à la RACINE du dépôt `Laurinekarrer/lkmentorship`, en conservant l'arborescence exacte. Si GitHub propose de remplacer des fichiers existants, vérifier et valider les fichiers listés ci-dessous.
3. Ne pas déposer le ZIP comme un seul fichier dans le dépôt.
4. Laisser Netlify redéployer. Vérifier que le dernier déploiement est indiqué **Published**.
5. Tester la page `https://laurinekarrer.com/community/coco-02/` : cliquer **Book my spot · from €2** et vérifier que la page de paiement affiche « CoCo 02 — Coffee & Connection » et permet une contribution minimale de 2 €. Ne pas effectuer un vrai paiement uniquement pour tester.
6. Tester `https://laurinekarrer.com/community/coco-02/cancellation-policy/`.

## Fichiers concernés

- `content/coco02.ts`: lien Stripe activé, date et lieu EN ATTENTE DE CONFIRMATION.
- `app/community/coco-02/page.tsx`: page de présentation/réservation, utilise la donnée de `content/coco02.ts`.
- `app/community/coco-02/page.module.css`: mise en page identité The Becoming Club.
- `app/community/coco-02/cancellation-policy/page.tsx`: conditions d'annulation.
- `app/community/page.tsx`: accès à CoCo 02 depuis la page Community.
- `content/becomingClub.ts`: détails CoCo 02 et FAQ sur les réservations par paiement.

## IMPORTANT AVANT DE PARTAGER LE LIEN

- La date **mercredi 4 novembre 2026, 14 h–15 h 30** est encore marquée « proposed » dans `content/coco02.ts` (`dateIsConfirmed: false`).
- La table de **7 personnes à Café Belcampo** (six participantes plus Laurine) n'est pas confirmée : `locationIsConfirmed: false`. Ne passer ces flags à `true` qu'après confirmation réelle.
- Vérifier dans Stripe que le lien est **actif**, que le minimum est **2 €**, que le paiement correspond à une seule place, et si possible que le nombre de paiements réussis est limité à **six**. Ces paramètres Stripe ne sont pas modifiés par le ZIP.
- La page utilise le visuel déjà présent dans votre site : `public/the-becoming-club/coffee-connection.webp`.
- La connexion GitHub permet la lecture mais pas l'écriture depuis ChatGPT : ce ZIP n'est pas encore publié.

## Lien à partager immédiatement

Pour les participantes, tant que le site n'est pas redéployé : `https://buy.stripe.com/3cI00l6SiaTH2GY8xs0kE02`

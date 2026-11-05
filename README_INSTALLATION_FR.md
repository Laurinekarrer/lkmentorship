# CoCo 03 — mise à jour complète pour le site existant

## Contenu
- `content/coco03.ts` : événement du 11 novembre et NOUVEAU lien Stripe fourni.
- `app/community/coco-03/page.tsx` : page automnale CoCo 03, bouton de paiement actif.
- `app/community/coco-03/cancellation-policy/page.tsx` : conditions de réservation.
- `app/community/page.tsx` et `content/becomingClub.ts` : liens et indications CoCo 03 actualisés sur la page Community.

Ce ZIP est une **mise à jour complète de CoCo 03 pour ton dépôt existant**, pas une copie de tout le site. Il préserve CoCo 02, Becoming Sessions et les styles existants.

## Installer dans GitHub
1. Décompresse ce ZIP.
2. Ajoute ses dossiers `app` et `content` **à la racine du dépôt** `Laurinekarrer/lkmentorship`, en conservant les mêmes sous-dossiers.
3. Accepte le remplacement des deux fichiers existants `app/community/page.tsx` et `content/becomingClub.ts`; les trois fichiers CoCo 03 sont nouveaux.
4. Fais un commit. Attends le déploiement automatique Netlify, puis teste `https://laurinekarrer.com/community/coco-03/` et le bouton Stripe.

## Avant d'accueillir des paiements
- IMPORTANT : dans Stripe, vérifier que le lien `https://buy.stripe.com/cNi3cx5Oe2nb2GYeVQ0kE03` **cesse après sept paiements réussis** et ne permet pas de réserver plusieurs places sur un seul paiement. Le site ne peut pas imposer cette limite.
- La table de groupe chez Groot Melkhuis n'est **pas encore confirmée** dans les informations dont je dispose : vérifie auprès du café, ou ajuste `content/coco03.ts` si tu changes de lieu.
- Vérifie aussi la page de confirmation Stripe, le montant minimum de 2 €, et les règles de remboursement.

Le ZIP utilise les ressources déjà présentes sur le site (image `public/the-becoming-club/coffee-connection.webp` et styles `app/community/coco-02/page.module.css`). Ne supprime pas ces fichiers.

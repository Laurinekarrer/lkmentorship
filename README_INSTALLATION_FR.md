# The Becoming Club — Becoming Sessions 01

## Ce que contient ce ZIP

Ces fichiers sont conçus pour ton dépôt GitHub `Laurinekarrer/lkmentorship` (Next.js 14 avec `output: 'export'` et Netlify). Ils créent une vraie page de réservation et conservent le design de Community.

- `app/community/becoming-sessions/page.tsx` : page publique du programme des cinq séances, prix 10 €, séance du 26 octobre.
- `app/community/becoming-sessions/RegistrationForm.tsx` : formulaire Netlify (version liste prioritaire tant que Stripe / lieu / conditions ne sont pas configurés).
- `app/community/becoming-sessions/page.module.css` : design ivoire / bordeaux dans l'esprit de Community.
- `content/becomingSessions.ts` : dates, prix, lieu, URL de paiement Stripe et conditions d'annulation à renseigner.
- `public/__forms.html` : formulaire statique de détection Netlify. Obligatoire dans certaines configurations Next.js.
- `app/community/page.tsx` : copie intégrale adaptée de la page Community, avec CTA `View programme & register` vers `/community/becoming-sessions`.
- `content/becomingClub.ts` : €15 corrigé en €10, date du 26 octobre et nouveau texte de réservation.
- `MEETUP_DESCRIPTION_EN.txt`, `SPEECH_HOST_EN.txt`, `RUN_OF_SHOW_01.md` : textes prêts à copier.

## Installation via GitHub (NE PAS téléverser le ZIP tel quel)

1. Décompresse le ZIP.
2. Dans `https://github.com/Laurinekarrer/lkmentorship` branche `main`, téléverse les fichiers aux mêmes chemins, **sans dossier supplémentaire**.
3. Lorsque GitHub te demande si tu veux écraser les 2 fichiers existants `app/community/page.tsx` et `content/becomingClub.ts`, accepte SEULEMENT si ton site n'a pas subi d'autres modifications entre-temps. Sinon, sauvegarde ces fichiers et compare avant de remplacer.
4. `Commit changes`. Ton projet Netlify (`laurinekarrermentorship`) devrait lancer un build automatique.
5. Va sur `https://laurinekarrer.com/community/becoming-sessions/` après déploiement et vérifie sur mobile et ordinateur.
6. Dans Netlify, ouvre `Forms` → active la détection des formulaires si besoin → redéploie. Un formulaire `becoming-session-01` doit apparaître. Envoie UN test avec une adresse email de test et retrouve sa soumission dans `Forms`. Vérifie aussi les éventuelles soumissions classées comme spam.

## État initial IMPORTANT

Par défaut, **seule la liste prioritaire** est ouverte. Il n'y a AUCUN paiement et aucune réservation confirmée : le lieu, le lien Stripe et les conditions d'annulation sont inconnus. C'est volontaire pour ne pas vendre une prestation dont les modalités ne sont pas encore fixées.

**URL publique prévue :** `https://laurinekarrer.com/community/becoming-sessions/` (ce lien ne fonctionnera qu'après déploiement réussi).

## Activer le paiement (après confirmation du lieu)

Dans `content/becomingSessions.ts`, modifier les champs de `workshop` :

```
venueLabel: 'Nom exact du café / de la salle, adresse, Amsterdam',
venueConfirmed: true,
stripePaymentUrl: 'https://buy.stripe.com/TON_LIEN_REEL',
cancellationPolicy: 'TES CONDITIONS CONFIRMÉES : ...',
```

- Prépare dans ton Dashboard Stripe un produit non récurrent "Becoming Session 01 — Who Am I Becoming? — 26 Oct 2026", prix fixe **€10**, quantité 1. Crée un **Payment Link** officiel.
- Vérifie que ce paiement est bien celui de la session 01. Utilise un lien distinct pour toute autre séance payante.
- Active la collecte d'email et conserve le montant de 10 € visible. Définis le traitement des remboursements/annulations et les taxes applicables selon ton activité.
- Configure si disponible la limite globale de 6 paiements complétés pour CE LIEN; sinon surveille les paiements et désactive le lien lorsque le nombre de places est atteint. Les Payment Links peuvent être réutilisés : un formulaire Netlify seul ne garantit pas de blocage automatique des ventes au sixième paiement.
- Vérifie régulièrement `Netlify > Forms > becoming-session-01` ET `Stripe > Payments` en rapprochant les adresses email. Le formulaire seul n'est pas un paiement ; un paiement ne doit pas être présumé depuis le seul clic du bouton.
- Envoie toi-même une confirmation d'inscription et les détails du lieu aux six personnes retenues, après vérification du paiement et des places. Pour automatiser l'inventaire et les emails, il faudra un backend avec webhooks Stripe / Checkout Sessions (non inclus dans cette version statique).
- Sur Meetup, si des RSVP sont possibles, écris clairement dans la description qu'un RSVP Meetup ne réserve pas une place payée. Ne facture pas deux fois via Meetup et Stripe.

## Exemple de texte à afficher avant l'ouverture de la billetterie

"Secure €10 registration opens once the venue is confirmed. The form is currently a priority list and does not reserve a seat."

## Sécurité et données

- Aucune clé secrète Stripe n'est dans le code : le lien de paiement est public, la transaction est gérée par Stripe.
- Ne demande PAS d'informations de santé ou données particulièrement sensibles dans le formulaire.
- Le consentement à être contactée pour cet événement est distinct de l'abonnement volontaire aux informations sur les prochains ateliers.
- Pense à vérifier la notice confidentialité de ton site et les obligations d'information lors du paiement avant l'ouverture. Les conditions d'annulation doivent être affichées explicitement.

## Quand sera-t-il prêt ?

La page est prête à publier comme page d'information / priorité. Le paiement nécessitera ton propre lien Stripe, la confirmation du lieu et les conditions d'annulation. Aucune vente n'a été lancée ni simulée.

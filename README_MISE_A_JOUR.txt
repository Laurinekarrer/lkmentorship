BECOMING SESSIONS — MISE A JOUR STRIPE ET ANNULATION 24 H

Ce ZIP ne contient qu un fichier a remplacer : content/becomingSessions.ts

1. Decompresser le ZIP.
2. Ouvrir GitHub > Laurinekarrer/lkmentorship > main > content > becomingSessions.ts.
3. Remplacer le fichier a cet emplacement EXACT (ne pas ajouter un sous-dossier).
4. Commit changes, puis verifier dans Netlify > Deploys que le deploiement est publie.

Le lien Stripe 10 EUR, la limite de 6 femmes et les conditions 24 heures sont enregistres dans le fichier. L'adresse info.laurinekarrerstudio@gmail.com figure dans les conditions.

SECURITE: venueConfirmed reste false et venueLabel reste Venue to be confirmed. Le site continue donc a proposer la liste prioritaire jusqu a ce que le lieu soit confirme. Des que le lieu est definitif, modifier les deux champs :
venueLabel: 'Nom du lieu, adresse, Amsterdam',
venueConfirmed: true,

Le formulaire affichera alors les conditions et, apres soumission, le bouton de paiement Stripe. Verifier Netlify Forms avec une inscription test. Stripe doit rester configure en produit ponctuel, quantite non modifiable = 1, maximum 6 paiements.

IMPORTANT: la limitation de 6 paiements protege contre plus de 6 ACHATS, mais les paiements et les formulaires ne sont pas rapproches automatiquement. Controler les adresses email Stripe et Netlify manuellement. Conditions de remboursement sous reserve des droits legaux applicables.

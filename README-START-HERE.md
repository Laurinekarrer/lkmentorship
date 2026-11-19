# CoCo 04 — correction de la carte sur Community

La capture affichait toujours CoCo 03 parce que la carte dépend aussi de `content/becomingClub.ts` et de `app/community/page.tsx`.

## Installation
1. Décompresser ce ZIP dans le dossier racine de ton projet Next.js (celui qui contient `package.json`), en conservant l'arborescence `app/` et `content/`.
2. Lancer `python apply_coco04.py` à la racine du projet. Cela actualise la carte Coffee & Connection, le lien interne vers CoCo 04 et ajoute le lien du **groupe Meetup** dans la description.
3. Redéployer sur Netlify.

Le bouton « Discover CoCo 04 & book » mène à `/community/coco-04`, où le bouton « Book my place » mène à Stripe : https://buy.stripe.com/00w9AVfoO4vj0yQcNI0kE05

Le lien du groupe Meetup utilisé est : https://www.meetup.com/the-becoming-club-women-in-amsterdam/ . Le lien direct vers l'événement Meetup spécifique n'a pas été fourni et ne peut pas être inventé.

Les autres parties du site sont conservées.

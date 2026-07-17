# Laurine Karrer Mentorship

Site vitrine Next.js en anglais, responsive et prêt à personnaliser.

## Lancer le site

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Modifier le contenu

- Offres, partenaires, e-mail et lien de réservation : `content/site.ts`
- Couleurs et styles : `app/globals.css`, variables dans `:root`
- Textes des pages : fichiers `page.tsx` dans `app/`
- Remplacer chaque bloc `YOUR PHOTO` par une image optimisée Next.js lorsque les photos définitives sont disponibles.

## Mise en ligne

Importer le dossier dans GitHub puis connecter le dépôt à Vercel. Configurer le domaine définitif et remplacer `https://laurinekarrer.com` dans `app/sitemap.ts` et `app/robots.ts` si nécessaire.

## À compléter avant publication

Photos, e-mail, URL de réservation, tarifs, durées, lieux, workshop actuel, partenaires, liens sociaux, mentions légales, confidentialité et cookies.

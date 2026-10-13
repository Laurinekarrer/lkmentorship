# Intégrer Community au menu de Laurine Karrer Studio

**À faire dans le composant MENU existant, pas dans `app/community/page.tsx`.** Ne copiez pas un faux menu complet sur votre site.

Si le menu est une liste de données, ajoutez un élément :

```tsx
{ label: 'Community', href: '/community' },
```

Si le menu écrit directement les liens :

```tsx
import Link from 'next/link';

// À l'intérieur de votre composant <nav> existant :
<Link href="/community">Community</Link>
```

Gardez les styles, sous-menus, versions mobile et tous les liens existants. Selon votre choix antérieur, vous pouvez **remplacer Workshops par Community** ou garder les deux : ne faites pas la substitution à l'aveugle.

## Depuis « Choose your doorway »

Pour une tuile Classes ou Workshops, ou un CTA de workshop :

```tsx
<Link href="/community#gatherings">Explore the community gatherings</Link>
```

Si la page d'accueil utilise un tableau de données, modifiez le champ `href` de la tuile existante — pas la mise en page.

## URLs

- Page attendue après intégration et déploiement : `https://laurinekarrer.com/community`
- Groupe Meetup : `https://www.meetup.com/the-becoming-club-women-in-amsterdam/`
- Instagram : `https://www.instagram.com/laurine.karrer/`

## Besoin du code existant

Envoyez le lien GitHub du dépôt, ou exportez les fichiers suivants : `package.json`, le composant du menu et la page d'accueil. Je pourrai alors fabriquer un patch exact et vérifier que l'onglet « Community » apparaît réellement.

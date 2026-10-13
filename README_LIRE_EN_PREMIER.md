# The Becoming Club — à ajouter au VRAI site Laurine Karrer Studio

**Ce ZIP contient du code pour GitHub + Netlify, pas un site autonome à déployer en remplacement du site existant.**

Il reprend le **Preview Number Two** choisi (fond blanc cassé + bordeaux, mise en page et affiches), sans emoji abeille ; des symboles typographiques `✧` le remplacent. Les abeilles dessinées sur les affiches restent présentes. Un lien Instagram a été ajouté au pied de la page.

## Compatibilité

Ces fichiers sont faits pour un site **Next.js (App Router) + TypeScript**. C'était la technologie du cahier des charges initial. Nous n'avons **pas pu accéder au code du dépôt GitHub actuel** : vérifiez qu'il s'agit bien du framework de votre site avant de coller les fichiers. Si la racine du projet contient `app/` (ou `src/app/`) et `package.json` avec `next`, c'est le bon format.

### Étapes exactes pour GitHub

1. **Sur GitHub, ouvrez le dépôt qui est déjà relié à votre site laurinekarrer.com sur Netlify.** N'ouvrez PAS un nouveau repo pour ce pack, et ne remplacez pas la racine de votre site.
2. Dézippez ce dossier sur votre ordinateur. Copiez/ajoutez les fichiers suivants **à la racine de votre dépôt existant** :
   - `app/community/page.tsx`
   - `app/community/page.module.css`
   - `app/community/InterestForm.tsx`
   - `content/becomingClub.ts`
   - `public/the-becoming-club/` (5 images `.webp`)
   - `public/netlify-becoming-form.html`
3. Si votre site utilise `src/app` plutôt que `app`, copiez `app/community/*` vers **`src/app/community/`**, et `content/becomingClub.ts` vers **`src/content/becomingClub.ts`**. L'import `../../content/becomingClub` restera correct dans ces deux variantes. Le répertoire `public/` reste à la racine du projet.
4. **IMPORTANT POUR LE MENU :** repérez le composant de navigation existant (`Header.tsx`, `Navbar.tsx`, ou `layout.tsx`, ou fichier des menus). Ajoutez le lien `Community → /community` dans le menu existant. Voyez `MENU_ET_LIENS.md`. La page ne peut pas changer le menu global à elle seule.
5. Dans la partie « Choose your doorway / Classes / Workshops » de votre site, reliez un bouton à `/community#gatherings`. Cela dépend de votre code actuel, voir `MENU_ET_LIENS.md`.
6. Dans `content/becomingClub.ts` : mettez **l'URL directe** de l'événement Coffee & Connection dans `coffee.eventUrl` si vous l'avez. En l'absence du lien, le bouton pointe vers le groupe Meetup public. L'URL du groupe est déjà renseignée.
7. Faites un **commit** sur la branche que Netlify déploie. Laissez **Netlify construire automatiquement le site depuis GitHub**, au lieu de glisser-déposer ce ZIP dans Netlify.
8. Dans Netlify, ouvrez « Deploys », vérifiez que le déploiement a réussi et allez sur `https://laurinekarrer.com/community`.

### Précautions

- Ne remplacez **jamais** `app/layout.tsx`, `app/page.tsx`, `package.json`, `netlify.toml` ni la page `partners` avec ce ZIP. Cela risquerait de supprimer des parties de votre site.
- **Ce paquet ne peut pas ajouter automatiquement l'onglet Community à votre navigation**, car ce composant n'a pas été fourni. Pour effectuer aussi cette modification à l'identique, envoyez-moi **le lien de votre dépôt GitHub**, ou le fichier de votre `Header`/`Navbar`.
- Le `PREVIEW.html` est uniquement une démonstration visuelle ; **ne le déployez pas seul** et ne le copiez pas dans `app/community`.
- Les réservations gratuites sont gérées via RSVP Meetup. Le formulaire d'intérêt ne réserve pas de place ; il nécessite la détection de formulaire Netlify activée et un test de soumission après déploiement. Ne promettez pas d'envoi d'e-mails automatiques avant configuration.
- La date du premier atelier, son lieu et le tarif de €15 sont encore **proposés**, pas confirmés. Aucun checkout Stripe n'est activé.

## Vérification des images

Toutes les affiches utilisées par la page sont incluses : `becoming-her.webp`, `coffee-connection.webp`, `becoming-sessions.webp`, `new-era.webp`, et `club-logo.webp` pour les aperçus sociaux.

## Pourquoi le précédent ZIP ne fonctionnait pas

Le précédent ZIP que vous aviez choisi ne contenait qu'une prévisualisation HTML. La version actuelle contient **les vrais fichiers source Next.js** à ajouter dans le projet de votre site, qui doivent être compilés par Netlify.

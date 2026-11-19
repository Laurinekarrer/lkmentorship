# CoCo 04 — FINAL website update (no script needed)

## What this ZIP does
- Replaces the old CoCo 03 card on `/community#gatherings` with **CoCo 04 — Wednesday 25 November, 14:00–15:30, De Roos**.
- Changes the card button to **Discover CoCo 04 & book** → `/community/coco-04`.
- Adds the dedicated CoCo 04 Stripe payment link on the event page: https://buy.stripe.com/00w9AVfoO4vj0yQcNI0kE05
- Leaves other Community sections and old event pages unchanged.

## Install in GitHub
1. Unzip this file on your computer.
2. Open the `Laurinekarrer/lkmentorship` repository on GitHub, on the branch Netlify deploys.
3. Replace/upload the 5 files below **at exactly these paths** (merge folders, do not delete anything):
   - `content/becomingClub.ts` **IMPORTANT: corrects date, venue and FAQs**
   - `app/community/page.tsx` **IMPORTANT: changes the card and button**
   - `content/coco04.ts` (new event configuration)
   - `app/community/coco-04/page.tsx` (event and Stripe booking)
   - `app/community/coco-04/cancellation-policy/page.tsx` (booking policy)
4. Click **Commit changes** in GitHub. Do not upload the ZIP itself into the repository; upload the actual files inside it.
5. Open Netlify > Deploys, wait for the latest commit to show **Published**, then refresh `https://laurinekarrer.com/community#gatherings` (Ctrl+Shift+R).

**Important:** The Meetup link currently leads to the group's page, because no CoCo 04-specific Meetup URL was provided. The booking button leads to the CoCo 04 page with the supplied Stripe link. The website does not control Stripe inventory: set a limit of 7 paid reservations in Stripe. Group seating at De Roos remains to be confirmed.

# The Becoming Club — CoCo #4 website update

**Wednesday 25 November 2026 · 14:00–15:30 · De Roos, Amsterdam**

This is a targeted **Next.js source-code patch**, not a stand-alone site or a Netlify drag-and-drop deployment. It uses your existing `app/community/coco-02/page.module.css` and `/public/the-becoming-club/coffee-connection.webp`, retaining the site's editorial burgundy/cream design. The ZIP does NOT contain the entire website or the image files.

## Install

1. Unzip and **copy** the included `app` and `content` folders into the root of your EXISTING `Laurinekarrer/lkmentorship` project, merging folders without deleting existing files.
2. From the existing project root, run `python apply_coco04.py` to update the Community homepage card and FAQ. If you cannot run Python, manually change the corresponding CoCo 03 link and date in `app/community/page.tsx`, and the copy in `content/becomingClub.ts`.
3. Edit `content/coco04.ts`:
   - The dedicated CoCo 04 payment link is already inserted: https://buy.stripe.com/00w9AVfoO4vj0yQcNI0kE05.
   - Configure maximum **7 successful bookings** in Stripe (the website cannot independently enforce capacity).
   - After arranging suitable seating with De Roos, set `venueConfirmed: true`.
4. Optional: replace `public/the-becoming-club/coffee-connection.webp` with updated artwork, or change the image source in `app/community/coco-04/page.tsx` to a new uploaded image.
5. Test `npm run build` in your existing Next.js project and check `/community` and `/community/coco-04` before publishing via your existing GitHub/Netlify workflow.

## Booking caveats

- **The new Stripe link is configured** to avoid directing participants to CoCo 03 payments. The CoCo 04 page now displays the Stripe booking button.
- **De Roos does not take ordinary table reservations**; its website requests advance contact for groups of 10 or more. For eight people, seating must still be checked to avoid promising a reserved table.
- Suggested 7 guests + Laurine. Minimum €2 booking contribution; more is optional; food and drink extra.
- This is a source patch, not a live publication. The supplied Stripe link is embedded; no Meetup event was created in this ZIP.

## Event blurb

**CoCo #4 — A Little Pause, A New Connection**

Come for the coffee. Stay for the connection. A cosy afternoon at De Roos beside Vondelpark for women who want to meet new faces, discover a lovely spot and enjoy genuine conversations without networking or pressure.

Wednesday 25 November · 14:00–15:30 · 7 guests + Laurine · from €2 to reserve · drinks purchased separately. Booking: https://buy.stripe.com/00w9AVfoO4vj0yQcNI0kE05

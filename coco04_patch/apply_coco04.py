#!/usr/bin/env python3
"""Run from the ROOT of the existing lkmentorship Next.js project after copying this ZIP's app/ and content/ folders."""
from pathlib import Path

root = Path.cwd()
content = root / 'content/becomingClub.ts'
page = root / 'app/community/page.tsx'
if not content.exists() or not page.exists():
    raise SystemExit('Run this from the existing lkmentorship project root (content/becomingClub.ts and app/community/page.tsx must exist).')

changes = {
    content: [
        ('CoCo 03 is the current event', 'CoCo 04 is the current event'),
        ("'CoCo 03 · Wed 11 November · 14:00–15:30'", "'CoCo 04 · Wed 25 November · 14:00–15:30'"),
        ("'Groot Melkhuis · Vondelpark, Amsterdam (group table pending confirmation)'", "'De Roos · beside Vondelpark, Amsterdam (group seating pending confirmation)'"),
        ("'For CoCo 03, reserve your place through the Stripe checkout linked on /community/coco-03; a Meetup RSVP alone does not secure a seat. There are seven paying guest places, and the café table is pending confirmation. For guided Becoming Sessions, join the waitlist; bookings are paused.'", "'For CoCo 04, reserve your place through the separate Stripe checkout linked on /community/coco-04 once booking opens. A Meetup RSVP alone does not secure a seat. There are seven guest places, and café group seating is pending confirmation. Becoming Sessions are currently on pause.'"),
    ],
    page: [
        ('/community/coco-03', '/community/coco-04'),
        ('Discover CoCo 03 &amp; book ↗', 'Discover CoCo 04 &amp; book ↗'),
        ('See CoCo 03 &amp; booking ↗', 'See CoCo 04 &amp; booking ↗'),
        ('For CoCo 03, a contribution of at least €2 reserves your seat once Stripe payment is completed, subject to available places. Seven guest places. The Groot Melkhuis group table is pending confirmation. Food and drinks are purchased separately. Becoming Sessions are currently on pause.',
         'CoCo 04 · Wednesday 25 November at De Roos, 14:00–15:30. Seven guest places plus Laurine; contribution from €2. A successful payment confirms your place once the new checkout opens. Group seating is pending confirmation; food and drinks are purchased separately. Becoming Sessions are currently on pause.'),
    ]
}
for path, replacements in changes.items():
    original = path.read_text(encoding='utf-8')
    updated = original
    for old, new in replacements:
        if old not in updated:
            raise SystemExit(f'STOP: expected text missing from {path}: {old[:85]!r} — nothing changed in this file')
        updated = updated.replace(old,new)
    path.write_text(updated,encoding='utf-8')
    print('Updated',path)
print('Next: set coco04.stripePaymentUrl to your NEW Stripe Payment Link; confirm the group seating; then test and deploy.')

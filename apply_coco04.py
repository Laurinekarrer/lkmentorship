#!/usr/bin/env python3
"""From the root of the existing Next.js project: python apply_coco04.py"""
from pathlib import Path
root = Path(__file__).resolve().parent
club = root / 'content/becomingClub.ts'
page = root / 'app/community/page.tsx'
if not (club.exists() and page.exists()):
    raise SystemExit('Place the contents of this ZIP in the ROOT of your existing Next.js website project first.')

def replace_if_present(s, old, new):
    return s.replace(old, new)

s=club.read_text(encoding='utf-8')
s=replace_if_present(s, 'CoCo 03 is the current event', 'CoCo 04 is the current event')
s=replace_if_present(s, 'CoCo 03 · Wed 11 November · 14:00–15:30', 'CoCo 04 · Wed 25 November · 14:00–15:30')
s=replace_if_present(s, 'Groot Melkhuis · Vondelpark, Amsterdam (group table pending confirmation)', 'De Roos · Pieter Cornelisz Hooftstraat 183, Amsterdam (group seating pending confirmation)')
s=replace_if_present(s, 'For CoCo 03, reserve your place through the Stripe checkout linked on /community/coco-03', 'For CoCo 04, reserve your place through the Stripe checkout linked on /community/coco-04')
s=replace_if_present(s, 'There are seven paying guest places, and the café table is pending confirmation.', 'There are seven guest places, and group seating at De Roos is pending confirmation.')
club.write_text(s,encoding='utf-8')

s=page.read_text(encoding='utf-8')
s=replace_if_present(s, '/community/coco-03', '/community/coco-04')
s=replace_if_present(s, 'CoCo 03', 'CoCo 04')
s=replace_if_present(s, 'For CoCo 04, a contribution of at least €2 reserves your seat once Stripe payment is completed, subject to available places. Seven guest places. The Groot Melkhuis group table is pending confirmation.', 'For CoCo 04, a contribution of at least €2 reserves your seat once Stripe payment is completed, subject to available places. Seven guest places. Group seating at De Roos is pending confirmation.')
# Include Meetup group link in the event description; the exact individual event URL has not been supplied.
anchor='<p>{c.coffee.text}</p>'
extra='<p>{c.coffee.text}</p><p><a href={c.meetupGroupUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "#791625"}}>Find The Becoming Club on Meetup ↗</a></p>'
if anchor in s and 'Find The Becoming Club on Meetup' not in s:
    s=s.replace(anchor,extra,1)
page.write_text(s,encoding='utf-8')
print('CoCo 04 is now selected on the Community page. Build and redeploy your website.')

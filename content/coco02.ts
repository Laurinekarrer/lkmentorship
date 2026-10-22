/** CoCo 02: update these settings before publishing the next Meetup event. */
export const coco02 = {
  name: 'CoCo 02 — Coffee & Connection',
  dateLabel: 'Wednesday 4 November 2026', // PROPOSED DATE — confirm before publishing
  timeLabel: '14:00–15:30',
  dateIsConfirmed: false,
  location: 'Café Belcampo',
  address: 'Hannie Dankbaarpassage 10, 1053 RT Amsterdam',
  locationIsConfirmed: false, // confirm a table for six guests + host
  capacity: 6, // guest seats, excluding Laurine
  minimumEuros: 2,
  /** Create a NEW Stripe Payment Link with customer-chosen amount, minimum €2, and max 6 completed payments. */
  stripePaymentUrl: 'https://buy.stripe.com/3cI00l6SiaTH2GY8xs0kE02', // Official CoCo 02 Stripe payment link, provided 22 Oct 2026
  contactEmail: 'info.laurinekarrerstudio@gmail.com',
  meetupGroupUrl: 'https://www.meetup.com/the-becoming-club-women-in-amsterdam/',
} as const;

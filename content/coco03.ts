/** CoCo 03, Vondelpark. Check group table and limit Stripe checkout to seven paid reservations. */
export const coco03 = {
  title: 'CoCo 03 — An Autumn Pause in Vondelpark',
  dateLabel: 'Wednesday 11 November 2026',
  timeLabel: '14:00–15:30',
  location: 'Groot Melkhuis',
  address: 'Vondelpark 2, 1071 AA Amsterdam',
  venueConfirmed: false,
  guestCapacity: 7, // Plus Laurine as the eighth person.
  minimumContributionEuros: 2,
  stripePaymentUrl: 'https://buy.stripe.com/cNi3cx5Oe2nb2GYeVQ0kE03',
  meetupGroupUrl: 'https://www.meetup.com/the-becoming-club-women-in-amsterdam/',
  contactEmail: 'info.laurinekarrerstudio@gmail.com',
} as const;

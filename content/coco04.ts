/** Coffee & Connection #4 — update only after checking venue and configuring the unique Stripe link. */
export const coco04 = {
  title: 'CoCo 04 — A Little Pause, A New Connection',
  dateLabel: 'Wednesday 25 November 2026',
  timeLabel: '14:00–15:30',
  location: 'De Roos',
  address: 'Pieter Cornelisz Hooftstraat 183, 1071 BW Amsterdam, Netherlands',
  venueConfirmed: false,
  guestCapacity: 7, // Laurine hosts as the eighth person.
  minimumContributionEuros: 2,
  // Dedicated Stripe Payment Link supplied for CoCo 04.
  // Configure limited inventory (7 reservations) in the payment product/link settings.
  stripePaymentUrl: 'https://buy.stripe.com/00w9AVfoO4vj0yQcNI0kE05',
  meetupGroupUrl: 'https://www.meetup.com/the-becoming-club-women-in-amsterdam/',
  contactEmail: 'info.laurinekarrerstudio@gmail.com',
} as const;

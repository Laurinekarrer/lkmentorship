/** Becoming Sessions: public information; add confirmed venue and checkout when ready. */
export const becomingSessions = {
  priceEuros: 10,
  meetupGroupUrl: 'https://www.meetup.com/the-becoming-club-women-in-amsterdam/',
  workshop: {
    title: 'Who Am I Becoming?',
    edition: 'Session 01',
    dateLabel: 'Monday 26 October 2026',
    timeLabel: '14:00–15:30',
    city: 'Amsterdam',
    venueLabel: 'Venue to be confirmed',
    venueConfirmed: false,
    capacity: 6, // Six participants maximum, excluding the host.
    /** Official public Stripe Payment Link for THIS session only, e.g. https://buy.stripe.com/... */
    stripePaymentUrl: '',
    /** Required before opening paid bookings. */
    cancellationPolicy: '',
  },
  themes: [
    { number: '01', verb: 'DISCOVER', title: 'Who Am I Becoming?', description: 'Explore who I am beyond roles and expectations.' },
    { number: '02', verb: 'ALIGN', title: 'Finding My Balance', description: 'Explore my needs, relationships and inner harmony.' },
    { number: '03', verb: 'EXPRESS', title: 'Finding My Voice', description: 'Give more space to my feelings and express myself freely.' },
    { number: '04', verb: 'CLARIFY', title: 'From Confusion to Clarity', description: 'Recognise what matters to me and choose a clear direction.' },
    { number: '05', verb: 'MOVE', title: 'Move with Self-Trust', description: 'Take my next step with self-trust and confidence.' },
  ],
} as const;

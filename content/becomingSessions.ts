/** Becoming Sessions: public booking settings. No secret API keys belong here. */
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
    capacity: 6,
    /** Public Stripe Payment Link for THIS ONE session, starting with https://buy.stripe.com/ . */
    stripePaymentUrl: '',
    /** Fill in your approved refund/cancellation terms before opening paid registration. */
    cancellationPolicy: '',
  },
  themes: [
    { number: '01', title: 'Who Am I Becoming?', subtitle: 'Identity beyond roles and expectations.', description: 'Explore the roles you carry, the version of yourself you present, and what feels true today.' },
    { number: '02', title: 'Finding Your Place', subtitle: 'Belonging and feeling at home.', description: 'Reflect on where, with whom and in which environments you genuinely feel at ease.' },
    { number: '03', title: 'The Patterns We Carry', subtitle: 'The choices and reactions we repeat.', description: 'Notice recurring habits and responses with curiosity, not judgement.' },
    { number: '04', title: 'From Confusion to Clarity', subtitle: 'What matters and what feels out of sync.', description: 'Untangle priorities and understand where your energy wants to go next.' },
    { number: '05', title: 'Move From Self-Trust', subtitle: 'One honest next step.', description: 'Leave with a small, realistic decision rooted in your own needs and values.' },
  ],
} as const;

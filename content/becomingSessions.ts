/** Becoming Sessions: public information and official Stripe checkout settings. */
export const becomingSessions = {
  priceEuros: 10,
  meetupGroupUrl: 'https://www.meetup.com/the-becoming-club-women-in-amsterdam/',
  workshop: {
    title: 'Who Am I Becoming?',
    edition: 'Session 01',
    dateLabel: 'Monday 26 October 2026',
    timeLabel: '14:00–15:30',
    city: 'Amsterdam',
    venueLabel: 'Amsterdam · Exact venue shared by email before the session',
    venueConfirmed: false,
    capacity: 6, // Six participants maximum, excluding the host.
    /** Official public Stripe Payment Link for THIS session only, e.g. https://buy.stripe.com/... */
    stripePaymentUrl: 'https://buy.stripe.com/6oU4gBb8yge1gxOdRM0kE00',
    /** Show refund/cancellation terms before sending customers to secure payment. */
    cancellationPolicy: 'Full refund for cancellations at least 24 hours before the session. Cancellations less than 24 hours before the session or no-shows are non-refundable. If the organiser cancels, a full refund is offered. If rescheduled, you may request a full refund if the new date does not suit you. To cancel, email info.laurinekarrerstudio@gmail.com using the email address provided at registration. Refunds are sent to the original payment method. Statutory consumer rights remain unaffected.',
  },
  themes: [
    { number: '01', verb: 'DISCOVER', title: 'Who Am I Becoming?', description: 'Explore who I am beyond roles and expectations.' },
    { number: '02', verb: 'ALIGN', title: 'Finding My Balance', description: 'Explore my needs, relationships and inner harmony.' },
    { number: '03', verb: 'EXPRESS', title: 'Finding My Voice', description: 'Give more space to my feelings and express myself freely.' },
    { number: '04', verb: 'CLARIFY', title: 'From Confusion to Clarity', description: 'Recognise what matters to me and choose a clear direction.' },
    { number: '05', verb: 'MOVE', title: 'Move with Self-Trust', description: 'Take my next step with self-trust and confidence.' },
  ],
} as const;

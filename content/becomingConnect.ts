/** The Becoming Club: one permanent destination behind the reusable table QR code.
 * Change ONLY the links below as events progress; never regenerate the printed QR.
 */
export const becomingConnect = {
  scanUrl: 'https://laurinekarrer.com/community/connect',
  meetupGroupUrl: 'https://www.meetup.com/the-becoming-club-women-in-amsterdam/',
  /** Latest completed CoCo. RSVP attendees can give event feedback after it ends. */
  lastCoCoEventUrl: 'https://www.meetup.com/the-becoming-club-women-in-amsterdam/events/317091097/',
  lastCoCoLabel: 'CoCo 02',
  /** Current published booking page. Replace with the next CoCo URL after each edition. */
  nextCoCoUrl: '/community/coco-03',
  nextCoCoLabel: 'Discover CoCo 03',
  hostUrl: '/',
  servicesUrl: '/services',
  bookingUrl: '/booking',
  /** Leave blank until you make a SEPARATE, uncapped Stripe support link.
   * Never reuse a CoCo seat-booking link for voluntary support. */
  supportPaymentUrl: '',
  contactEmail: 'info.laurinekarrerstudio@gmail.com',
} as const;

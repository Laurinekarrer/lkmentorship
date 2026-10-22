/** The Becoming Club: details, images and existing page copy preserved. */
export const becomingClub = {
  meetupGroupUrl: 'https://www.meetup.com/the-becoming-club-women-in-amsterdam/',
  instagramUrl: 'https://www.instagram.com/laurine.karrer/',
  contactEmail: 'info.laurinekarrerstudio@gmail.com',
  heroEyebrow: 'THE BECOMING CLUB · A WOMEN’S COMMUNITY IN AMSTERDAM',
  heroTitle: 'Come as you are. Become together.',
  heroCopy: 'A little space for genuine friendships, meaningful conversations and self-discovery. From cosy coffee and tea gatherings to guided Becoming Sessions — your place at the table starts here.',
  manifesto: 'Making a life in a new city can be exciting and a little lonely. The Becoming Club was created for women who want more than small talk: beautiful places to discover, genuine people to meet, and space to reconnect with the person they are becoming.',
  coffee: {
    title: 'Coffee & Connection', subtitle: 'Come for the coffee. Stay for the connection.',
    text: 'An intimate afternoon to meet new women, explore beautiful cafés around Amsterdam and enjoy honest conversations in a relaxed setting. Come alone — you will not be the only one.',
    meta: ['6 women + host', '90 minutes', 'Reservation contribution · from €2', 'Drinks purchased separately'],
    nextLabel: 'CoCo 02 · Wed 4 November · 14:00–15:30 (proposed)',
    venueLabel: 'Café Belcampo · De Hallen, Amsterdam (pending table confirmation)',
    /** Paste the individual published event link here. Until then, RSVP opens the Meetup group. */
    eventUrl: '',
  },
  sessions: {
    title: 'Becoming Sessions', subtitle: 'A little clarity. A little more of yourself.',
    text: 'Intimate guided circles with journaling, shared reflections and gentle body awareness. Inspired by Laurine’s Identity Alignment Workbook, each session offers a space to explore your identity, emotions, belonging and next steps.',
    meta: ['Small circle · 4–6 women', '90 minutes', 'Waitlist open · no payment'],
    nextLabel: 'New dates to be announced',
    venueLabel: 'Becoming Sessions · currently on pause',
    /** Booking is handled on /community/becoming-sessions, not directly in this object. */
    stripePaymentUrl: '',
  },
  themes: [
    { no: '01', title: 'Who Am I Becoming?', description: 'Identity beyond roles and expectations.' },
    { no: '02', title: 'Finding Your Place', description: 'Belonging and feeling at home.' },
    { no: '03', title: 'The Patterns We Carry', description: 'The choices and reactions we repeat.' },
    { no: '04', title: 'From Confusion to Clarity', description: 'What matters, and what feels out of sync.' },
    { no: '05', title: 'Move From Self-Trust', description: 'One honest next step.' },
  ],
  host: 'I’m Laurine, a French certified sophrologist and founder of Laurine Karrer Studio. After years of travelling and living abroad, I made Amsterdam my new chapter. I created The Becoming Club to bring women together through genuine connections, shared experiences and thoughtful moments of self-discovery.',
  faqs: [
    { question: 'Can I come alone?', answer: 'Of course. That’s exactly what this community is for. You’ll be welcomed into a small circle.' },
    { question: 'Who is the club for?', answer: 'Women in Amsterdam, especially those in their mid-twenties to early forties, including expats, travellers and locals. English is our shared language.' },
    { question: 'Is it a therapy group?', answer: 'No. Coffee gatherings are social, and Becoming Sessions are guided self-reflection workshops, not group psychotherapy. Personal sharing is always optional.' },
    { question: 'How do I book?', answer: 'For CoCo 02, reserve your place through the Stripe checkout linked on /community/coco-02; a Meetup RSVP alone does not secure a seat. For guided Becoming Sessions, join the waitlist on /community/becoming-sessions; bookings are paused.' },
  ],
} as const;

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../coco-02/page.module.css';
import { coco04 as c } from '../../../content/coco04';

export const metadata: Metadata = {
  title: 'CoCo 04 | A Little Pause, A New Connection | The Becoming Club',
  description: 'Coffee & Connection for women in Amsterdam. Wednesday 25 November, 14:00–15:30 at De Roos beside Vondelpark. Seven guest places; contribution from €2.',
  alternates: { canonical: '/community/coco-04' },
};
const bookingReady = /^https:\/\/buy\.stripe\.com\//.test(c.stripePaymentUrl as string);

export default function Coco04Page() {
  return <main className={styles.page}>
    <div className={styles.ribbon}><span>THE BECOMING CLUB</span><span aria-hidden="true">✦</span><span>COFFEE &amp; CONNECTION</span></div>
    <nav className={styles.nav}><Link href="/community">← Back to the Club</Link><a href="#book">Book your place ↓</a></nav>
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.kicker}>COCO 04 · NOVEMBER EDITION · 25.11</p>
        <h1>A little pause. <em>A new connection.</em></h1>
        <p className={styles.lead}>Come for the coffee. Stay for the connection.</p>
        <p className={styles.heroDesc}>A cosy Wednesday afternoon at De Roos, beside Vondelpark. Meet a small circle of women over coffee, matcha or tea, with honest conversations and no pressure to impress. Come alone — you won't be the only one.</p>
        <div className={styles.meta}>
          <span>Wed 25 Nov · 14:00–15:30</span><span>7 guests + Laurine</span><span>English speaking</span><span>From €2 to book</span>
        </div><a className={styles.cta} href="#book">Discover CoCo 04 ↓</a>
      </div>
      <div className={styles.poster}><Image src="/the-becoming-club/coffee-connection.webp" alt="The Becoming Club — Coffee & Connection artwork" fill priority sizes="(max-width:720px) 100vw, 43vw"/></div>
    </section>
    <section className={styles.section}>
      <p className={styles.kicker}>YOUR PLACE AT THE TABLE</p>
      <h2>Warm drinks. <em>Real conversations.</em></h2>
      <p>As November draws to a close, pause from the usual routine, discover a lovely corner of Amsterdam and make room for new connections. You're welcome whether you're new to the city or have lived here for years.</p>
      <div className={styles.principles}>
        <div className={styles.principle}><span>♡</span><h3>Come as you are</h3><p>A welcoming space for friendships and honest conversations.</p></div>
        <div className={styles.principle}><span>✧</span><h3>A small circle</h3><p>Seven guest places, so everybody has space to connect.</p></div>
        <div className={styles.principle}><span>☕</span><h3>A thoughtful café</h3><p>De Roos, a cosy mindful space beside Vondelpark.</p></div>
      </div>
    </section>
    <section className={styles.booking} id="book"><div className={styles.bookingInner}>
      <div className={styles.bookingInfo}><p className={styles.kicker}>BOOKING · COCO 04</p>
        <h2>One small contribution. <em>One place at the table.</em></h2>
        <p>There are <strong>7 guest places</strong>. The minimum €2 booking contribution helps organise our gatherings, and you're welcome to support the club with more. Reserve through our secure Stripe link: https://buy.stripe.com/00w9AVfoO4vj0yQcNI0kE05. A Meetup RSVP is not a paid booking.</p>
        <p>Food and drinks are purchased separately. The café does not accept ordinary table reservations, so the group seating is still pending confirmation.</p>
      </div>
      <div className={styles.bookingCard}>
        <h3>Book your CoCo moment.</h3><p className={styles.rate}>€2+</p><p className={styles.rateLabel}>Minimum contribution per person · Optional additional support</p>
        <div className={styles.detail}><strong>When</strong><span>{c.dateLabel} · {c.timeLabel}</span></div>
        <div className={styles.detail}><strong>Where</strong><span>{c.location} · {c.address}{!c.venueConfirmed ? ' (group seating pending confirmation)' : ''}</span></div>
        <div className={styles.detail}><strong>Circle</strong><span>{c.guestCapacity} guests + Laurine</span></div>
        <div className={styles.detail}><strong>Included</strong><span>Your place at CoCo 04 · Food and drinks extra</span></div>
        {bookingReady ? <a className={styles.cta} href={c.stripePaymentUrl} target="_blank" rel="noopener noreferrer">Book my place · from €2 ↗</a> : <div className={styles.unavailable}>Bookings opening soon · Join us on Meetup</div>}
        <p className={styles.small}>Places are confirmed after successful payment, up to seven guests. Please ensure Stripe is configured to stop accepting payments after seven bookings. <Link href="/community/coco-04/cancellation-policy">Booking &amp; cancellation terms ↗</Link></p>
        <p className={styles.small}><a href={c.meetupGroupUrl} target="_blank" rel="noopener noreferrer">See The Becoming Club on Meetup ↗</a></p>
      </div>
    </div></section>
    <section className={styles.remark}><p>“Come as you are. Become together.”</p></section>
    <footer className={styles.footer}><span>The Becoming Club · by Laurine Karrer Studio</span><Link href="/community">Back to the Club ↗</Link><a href={`mailto:${c.contactEmail}`}>Contact Laurine ↗</a></footer>
  </main>;
}

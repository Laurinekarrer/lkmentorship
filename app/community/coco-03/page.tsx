import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../coco-02/page.module.css';
import { coco03 as c } from '../../../content/coco03';

export const metadata: Metadata = {
  title: 'CoCo 03 | An Autumn Pause in Vondelpark | The Becoming Club',
  description: 'A cosy Coffee & Connection gathering for women in Amsterdam, Wednesday 11 November at 14:00. Seven guest places, from €2 to book.',
  alternates: { canonical: '/community/coco-03' },
};

const bookingReady = /^https:\/\/buy\.stripe\.com\//.test(c.stripePaymentUrl);

export default function Coco03Page() {
  return (
    <main className={styles.page}>
      <div className={styles.ribbon}><span>THE BECOMING CLUB</span><span aria-hidden="true">✦</span><span>COFFEE &amp; CONNECTION</span></div>
      <nav className={styles.nav}>
        <Link href="/community">← Back to the Club</Link>
        <a href="#book">Book your place ↓</a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>COCO 03 · AUTUMN EDITION · 11.11</p>
          <h1>An autumn <em>pause.</em></h1>
          <p className={styles.lead}>Come for the coffee. Stay for the connection.</p>
          <p className={styles.heroDesc}>An afternoon away from the city's rush, in the heart of Vondelpark. Join a small circle of women for warm drinks and genuine conversations at the historic Groot Melkhuis café. No networking, no labels, no pressure to impress.</p>
          <div className={styles.meta}>
            <span>Wed 11 Nov · 14:00–15:30</span>
            <span>7 guests + Laurine</span>
            <span>English speaking</span>
            <span>From €2 to book</span>
          </div>
          <a className={styles.cta} href="#book">Secure your CoCo spot ↓</a>
        </div>
        <div className={styles.poster}>
          <Image src="/the-becoming-club/coffee-connection.webp" alt="Coffee & Connection — original cream and burgundy Becoming Club artwork with a bee" fill priority sizes="(max-width:720px) 100vw, 43vw" />
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.kicker}>A LITTLE AUTUMN RESET</p>
        <h2>A warm coffee. <em>A genuine connection.</em></h2>
        <p>Take a mindful pause, meet new faces and discover a lovely corner of Amsterdam. If the weather allows, you're welcome to join an optional little walk through Vondelpark afterwards. 🍂</p>
        <div className={styles.principles}>
          <div className={styles.principle}><span>♡</span><h3>Real conversations</h3><p>Friendships, travel, dating, expat life and everything in between.</p></div>
          <div className={styles.principle}><span>✧</span><h3>An intimate circle</h3><p>Seven guest places. Enough space to really get to know one another.</p></div>
          <div className={styles.principle}><span>☕</span><h3>Thoughtful places</h3><p>Discover a historic café nestled inside Vondelpark.</p></div>
        </div>
      </section>

      <section className={styles.booking} id="book">
        <div className={styles.bookingInner}>
          <div className={styles.bookingInfo}>
            <p className={styles.kicker}>BOOKING · COCO 03</p>
            <h2>One small contribution. <em>One place at the table.</em></h2>
            <p>Only <strong>7 guest places</strong> are available. Your Meetup RSVP shows interest, but <strong>the first seven successful payments secure the places</strong>. If you're on the Meetup waiting list, you can still book here while paid places remain.</p>
            <p>The booking contribution starts at €2 and supports the organisation of our gatherings. You can contribute more if you like. Food and drinks are purchased separately at the café.</p>
          </div>
          <div className={styles.bookingCard}>
            <h3>Book your CoCo moment.</h3>
            <p className={styles.rate}>€2+</p>
            <p className={styles.rateLabel}>Minimum per person · Optional extra support</p>
            <div className={styles.detail}><strong>When</strong><span>{c.dateLabel} · {c.timeLabel}</span></div>
            <div className={styles.detail}><strong>Where</strong><span>{c.location} · {c.address}{!c.venueConfirmed ? ' (group table pending confirmation)' : ''}</span></div>
            <div className={styles.detail}><strong>Circle</strong><span>{c.guestCapacity} paying guests + Laurine</span></div>
            <div className={styles.detail}><strong>Included</strong><span>Your place at the CoCo gathering · Drinks &amp; food extra</span></div>
            {bookingReady ? (
              <a className={styles.cta} href={c.stripePaymentUrl} target="_blank" rel="noopener noreferrer">Book my place · from €2 ↗</a>
            ) : (
              <div className={styles.unavailable}>Booking will open soon</div>
            )}
            <p className={styles.small}>Secure checkout by Stripe. Reservation is subject to available places. Please check that this payment link stops after seven successful payments; the website cannot enforce Stripe limits. <Link href="/community/coco-03/cancellation-policy">Booking and cancellation terms ↗</Link></p>
            <p className={styles.small}>Stay in touch or ask questions: <a href={c.meetupGroupUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration:'underline' }}>The Becoming Club on Meetup ↗</a></p>
          </div>
        </div>
      </section>
      <section className={styles.remark}><p>“A little pause. A warm coffee. A genuine connection.”</p></section>
      <footer className={styles.footer}>
        <span>The Becoming Club · by Laurine Karrer Studio</span>
        <Link href="/community">Back to the Club ↗</Link>
        <a href={`mailto:${c.contactEmail}`}>Contact Laurine ↗</a>
      </footer>
    </main>
  );
}

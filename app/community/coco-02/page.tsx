import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { coco02 as c } from '../../../content/coco02';

export const metadata: Metadata = {
  title: 'CoCo 02 | Coffee & Connection at Café Belcampo | The Becoming Club',
  description: 'The next Coffee & Connection gathering for women in Amsterdam. Six spots, a cosy café and genuine conversations. Book with a minimum €2 contribution.',
  alternates: { canonical: '/community/coco-02' },
};

const bookingReady = /^https:\/\/buy\.stripe\.com\//.test(c.stripePaymentUrl);
export default function Coco02Page(){
  return <main className={styles.page}>
    <div className={styles.ribbon}><span>THE BECOMING CLUB</span><span aria-hidden="true">✦</span><span>COFFEE & CONNECTION</span></div>
    <nav className={styles.nav}><Link href="/community">← Back to the Club</Link><a href="#book">Book your place ↓</a></nav>
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.kicker}>YOUR NEXT COCO · 02</p>
        <h1>Coffee & <em>Connection.</em></h1>
        <p className={styles.lead}>Come for the coffee. Stay for the connection.</p>
        <p className={styles.heroDesc}>A small, cosy gathering for women in Amsterdam. Meet new faces, share real conversations and discover another little corner of the city together. No networking, no pressure — just good company.</p>
        <div className={styles.meta}><span>6 women + host</span><span>90 minutes</span><span>English-speaking</span><span>From €2 to reserve</span></div>
        <a className={styles.cta} href="#book">Find your spot ↗</a>
      </div>
      <div className={styles.poster}><Image src="/the-becoming-club/coffee-connection.webp" alt="Coffee & Connection, original Becoming Club burgundy and ivory bee illustration" fill priority sizes="(max-width:720px) 100vw, 43vw"/></div>
    </section>
    <section className={styles.section}>
      <p className={styles.kicker}>WHAT COCO FEELS LIKE</p>
      <h2>More connection. <em>Less performance.</em></h2>
      <p>There's no need to introduce your business, explain your life story or make the conversation profound. We'll start with a gentle question, then let the afternoon unfold naturally.</p>
      <div className={styles.principles}>
        <div className={styles.principle}><span>♡</span><h3>Real conversations</h3><p>Friendships, dating, travelling, expat life and whatever comes up.</p></div>
        <div className={styles.principle}><span>✧</span><h3>Familiar faces</h3><p>A small circle to turn new encounters into meaningful connections.</p></div>
        <div className={styles.principle}><span>☕</span><h3>Places with character</h3><p>Thoughtfully chosen cafés where you can feel at ease and enjoy the moment.</p></div>
      </div>
    </section>
    <section className={styles.booking} id="book">
      <div className={styles.bookingInner}>
        <div className={styles.bookingInfo}>
          <p className={styles.kicker}>COCO 02 · YOUR SEAT</p>
          <h2>A little coffee. <em>A real connection.</em></h2>
          <p>Your small contribution reserves one of the six spots and supports the organisation of our meetups. You're welcome to contribute more, but there's no obligation.</p>
          <p>Drinks and food are not included — simply order whatever you like at the café.</p>
        </div>
        <div className={styles.bookingCard}>
          <h3>Book your CoCo moment.</h3>
          <p className={styles.rate}>€2+</p>
          <p className={styles.rateLabel}>Minimum per person · optional extra support</p>
          <div className={styles.detail}><strong>When</strong><span>{c.dateLabel} · {c.timeLabel}{!c.dateIsConfirmed ? ' (proposed)' : ''}</span></div>
          <div className={styles.detail}><strong>Where</strong><span>{c.location}, {c.address}{!c.locationIsConfirmed ? ' (table confirmation pending)' : ''}</span></div>
          <div className={styles.detail}><strong>Guests</strong><span>{c.capacity} women + Laurine</span></div>
          <div className={styles.detail}><strong>Included</strong><span>Your place at the gathering; drinks and food are extra</span></div>
          {bookingReady ? <a className={styles.cta} href={c.stripePaymentUrl} target="_blank" rel="noopener noreferrer">Book my spot · from €2 ↗</a> : <div className={styles.unavailable}>Booking link to be added</div>}
          <p className={styles.small}>Secure payment by Stripe. Your place is booked after payment confirmation, not by a Meetup RSVP alone. <Link href="/community/coco-02/cancellation-policy">View cancellation & refund policy ↗</Link></p>
        </div>
      </div>
    </section>
    <section className={styles.remark}><p>“No labels. No performance. Just a lovely afternoon with women you might want to meet again.”</p></section>
    <footer className={styles.footer}><span>The Becoming Club · by Laurine Karrer Studio</span><Link href="/community">Back to the Club ↗</Link><a href={`mailto:${c.contactEmail}`}>Contact Laurine ↗</a></footer>
  </main>;
}

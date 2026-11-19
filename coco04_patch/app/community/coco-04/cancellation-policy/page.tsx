import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../../coco-02/page.module.css';
import { coco04 as c } from '../../../../content/coco04';

export const metadata: Metadata = { title: 'CoCo 04 | Booking & Cancellation | The Becoming Club', robots: { index: false, follow: true } };
export default function Coco04Policy(){return <main className={styles.page}>
  <div className={styles.ribbon}><span>THE BECOMING CLUB</span><span>COCO 04 · TERMS</span></div>
  <nav className={styles.nav}><Link href="/community/coco-04">← Back to CoCo 04</Link><Link href="/community">The Club ↗</Link></nav>
  <section className={styles.policy}>
    <p className={styles.kicker}>BEFORE YOU BOOK</p><h1>Booking &amp; <em>Cancellation.</em></h1>
    <p>CoCo 04 is a small social gathering with {c.guestCapacity} guest places plus the host. The minimum €{c.minimumContributionEuros} payment is a booking contribution, not a charitable tax-deductible donation. Extra support is optional. Food and drinks are paid separately.</p>
    <h2>Confirming your seat</h2><p>A Meetup RSVP alone does not reserve a place. Successful contributions secure seats on a first-paid, first-served basis until seven bookings are reached. The separate Stripe link must be configured to stop accepting bookings at capacity. Any payment mistakenly accepted over capacity will be refunded.</p>
    <h2>Changing your plans</h2><p>Contact us at least 24 hours before the gathering for a full refund. Cancellations within 24 hours and no-shows are normally non-refundable, subject to applicable consumer rights. We appreciate early notice to offer your place to another guest.</p>
    <h2>Venue or event changes</h2><p>Group seating at De Roos is not yet confirmed. If the organiser cancels the gathering, you will receive a full refund. If the date or location changes materially and you cannot attend, you may request a full refund.</p>
    <h2>Contact</h2><p>Email <a href={`mailto:${c.contactEmail}`}>{c.contactEmail}</a> from the address used for booking. Approved refunds are made to the original payment method.</p>
    <p><Link href="/community/coco-04">← Back to CoCo 04</Link></p>
  </section>
</main>}

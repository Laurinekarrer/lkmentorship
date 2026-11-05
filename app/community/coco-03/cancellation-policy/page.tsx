import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../../coco-02/page.module.css';
import { coco03 as c } from '../../../../content/coco03';

export const metadata: Metadata = {
  title: 'CoCo 03 | Booking & Cancellation Policy | The Becoming Club',
  robots: { index: false, follow: true },
};

export default function CoCo03Policy() {
  return <main className={styles.page}>
    <div className={styles.ribbon}><span>THE BECOMING CLUB</span><span>COCO 03 · TERMS</span></div>
    <nav className={styles.nav}><Link href="/community/coco-03">← Back to CoCo 03</Link><Link href="/community">The Club ↗</Link></nav>
    <section className={styles.policy}>
      <p className={styles.kicker}>BEFORE YOU BOOK</p>
      <h1>Booking &amp; <em>Cancellation.</em></h1>
      <p>CoCo 03 is a small social coffee gathering with {c.guestCapacity} guest places plus the host. Your payment is a booking contribution (minimum €{c.minimumContributionEuros}), not a charitable donation. Extra contributions are optional. Food and drinks are purchased separately.</p>
      <h2>Confirming your seat</h2>
      <p>Meetup RSVPs do not reserve seats. Successful payments confirm places on a first-paid, first-served basis up to seven attendees. Stripe checkout must be configured to stop after seven successful payments. If payment is accidentally accepted beyond capacity, we'll refund the extra booking.</p>
      <h2>Changing your plans</h2>
      <p>Please notify us at least 24 hours before the event for a full refund. Cancellations within 24 hours and no-shows are normally non-refundable, subject to applicable consumer rights. Let us know as soon as you can so we can offer the place to someone else.</p>
      <h2>Venue or event changes</h2>
      <p>The café's group table is still pending confirmation. If the organiser cancels the gathering, you'll receive a full refund. If the location or date changes materially and you cannot attend, you may request a full refund.</p>
      <h2>Contact</h2>
      <p>Write to <a href={`mailto:${c.contactEmail}`}>{c.contactEmail}</a> from the address used at checkout. Refunds are returned to the original payment method.</p>
      <p><Link href="/community/coco-03">← Back to CoCo 03</Link></p>
    </section>
  </main>;
}

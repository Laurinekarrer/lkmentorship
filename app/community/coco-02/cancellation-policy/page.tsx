import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';
import { coco02 as c } from '../../../../content/coco02';
export const metadata: Metadata = { title: 'CoCo 02 | Booking & Cancellation Policy | The Becoming Club', robots: {index:false,follow:true} };
export default function CocoPolicyPage(){ return <main className={styles.page}>
  <div className={styles.ribbon}><span>THE BECOMING CLUB</span><span>COCO 02 · TERMS</span></div>
  <nav className={styles.nav}><Link href="/community/coco-02">← Back to CoCo 02</Link><Link href="/community">The Club ↗</Link></nav>
  <section className={styles.policy}>
    <p className={styles.kicker}>GOOD TO KNOW BEFORE BOOKING</p>
    <h1>Booking & <em>Cancellation.</em></h1>
    <p>CoCo 02 is a small coffee gathering with {c.capacity} guest places. Your payment is a reservation contribution (minimum €{c.minimumEuros}), not a charitable donation. Drinks and food are not included.</p>
    <h2>Booking your place</h2>
    <p>A place is reserved after successful Stripe payment. RSVP on Meetup alone does not secure a place. We will send practical information using the email provided at checkout. Additional contribution above the minimum is voluntary.</p>
    <h2>If plans change</h2>
    <p>Cancel at least 24 hours before the scheduled start for a full refund of the amount paid. Cancellations less than 24 hours before the start or no-shows are non-refundable, subject to your statutory consumer rights. Please let us know as early as you can so another woman can join from the waiting list.</p>
    <h2>If we change or cancel the gathering</h2>
    <p>If the organiser cancels, a full refund will be provided. If the date or venue changes materially and you cannot attend, you may request a full refund.</p>
    <h2>Contact</h2><p>Email <a href={`mailto:${c.contactEmail}`}>{c.contactEmail}</a> from the email address used for booking. Refunds go back to the original payment method.</p>
    <p><Link href="/community/coco-02">← Back to the gathering</Link></p>
  </section></main> }

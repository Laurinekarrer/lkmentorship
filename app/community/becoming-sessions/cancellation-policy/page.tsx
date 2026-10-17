import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Becoming Sessions | Laurine Karrer Studio',
  description: 'Cancellation and refund conditions for Becoming Sessions 01 in Amsterdam on 26 October 2026.',
};

export default function CancellationPolicyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.band}>THE BECOMING CLUB <span aria-hidden="true">✧</span> BY LAURINE KARRER STUDIO</div>
      <div className={styles.content}>
        <Link className={styles.back} href="/community/becoming-sessions">← Back to Becoming Sessions</Link>
        <p className={styles.eyebrow}>GOOD TO KNOW</p>
        <h1>Cancellation <em>&amp; refunds.</em></h1>
        <p className={styles.intro}>A small circle means every place matters. Here's what to know before booking.</p>
        <div className={styles.card}>
          <h2>Becoming Sessions 01</h2>
          <p className={styles.muted}>Monday 26 October 2026 · 14:00–15:30 · Amsterdam</p>
          <dl>
            <div><dt>24 hours or more before</dt><dd>Full refund for cancellations received by Sunday 25 October, 14:00 (Amsterdam time).</dd></div>
            <div><dt>Less than 24 hours before</dt><dd>No refund for late cancellations, subject to applicable statutory consumer rights.</dd></div>
            <div><dt>No-show</dt><dd>No refund, subject to applicable statutory consumer rights.</dd></div>
            <div><dt>If the organiser cancels</dt><dd>A full refund will be issued. If the event is rescheduled, you may instead choose a full refund if the new date does not suit you.</dd></div>
          </dl>
          <p>To cancel your place, email <a href="mailto:info.laurinekarrerstudio@gmail.com">info.laurinekarrerstudio@gmail.com</a> using the email address from your booking. Refunds are issued to the original payment method, with processing times depending on your payment provider.</p>
        </div>
        <div className={styles.extras}>
          <h2>Booking details</h2>
          <p><strong>€10 is the price of one place</strong> in the 90-minute guided session. Drinks and food are not included and can be purchased separately at the venue.</p>
          <p>The circle takes place in Amsterdam. The exact venue will be shared by email before the event. If we cannot secure a suitable venue, the session will be cancelled and everyone will be fully refunded.</p>
          <p className={styles.legal}>These booking terms do not limit any mandatory consumer rights that may apply.</p>
        </div>
        <Link className={styles.back} href="/community/becoming-sessions#reserve">← Return to booking</Link>
      </div>
      <footer className={styles.footer}><span>THE BECOMING CLUB · BY LAURINE KARRER STUDIO</span><Link href="/community">Back to the Club ↗</Link></footer>
    </main>
  );
}

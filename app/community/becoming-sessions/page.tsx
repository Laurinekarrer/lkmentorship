import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RegistrationForm from './RegistrationForm';
import styles from './page.module.css';
import { becomingSessions as s } from '../../../content/becomingSessions';

export const metadata: Metadata = {
  title: 'Becoming Sessions | Small Guided Circles for Women in Amsterdam',
  description: 'Five intimate, guided sessions inspired by the Identity Alignment Workbook: journaling, sophrology and meaningful conversations. Starting Monday 26 October in Amsterdam.',
  alternates: { canonical: '/community/becoming-sessions' },
};

const { workshop: w } = s;
const safeStripe = /^https:\/\/buy\.stripe\.com\//.test(w.stripePaymentUrl);
const canTakePayments = w.venueConfirmed && safeStripe && w.cancellationPolicy.trim().length > 0;

export default function BecomingSessionsPage() {
  return <main className={styles.page}>
    <div className={styles.band}><span>THE BECOMING CLUB</span><span aria-hidden="true">✧</span><span>BY LAURINE KARRER STUDIO</span></div>
    <div className={styles.top}><Link href="/community">← Back to Community</Link><nav aria-label="On this page"><a href="#why">The why</a><a href="#journey">The journey</a><a href="#first">First session</a><a href="#reserve">Register</a></nav></div>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>AN INTIMATE GUIDED CIRCLE · AMSTERDAM</p>
        <h1>Becoming <em>Sessions.</em></h1>
        <p className={styles.lead}>A little clarity. <em>A little more of yourself.</em></p>
        <p>A series of gentle, thoughtful gatherings where women can pause, explore where they are in life and reconnect with themselves and one another.</p>
        <div className={styles.tags}><span>4–6 women</span><span>90 minutes</span><span>English-speaking</span><span>€10 / session</span></div>
        <a className={styles.primary} href="#reserve">Explore & register <span aria-hidden="true">↗</span></a>
      </div>
      <div className={styles.heroArt}><Image src="/the-becoming-club/becoming-sessions.webp" alt="Becoming Sessions — The Becoming Club artwork" fill priority sizes="(max-width: 780px) 100vw, 42vw" style={{objectFit:'contain'}} /></div>
    </section>

    <section className={styles.why} id="why">
      <div><p className={styles.kicker}>WHY WE GATHER</p><h2>A place to <em>pause and become.</em></h2></div>
      <div className={styles.whyText}><p>Living abroad, making decisions and navigating life's changes can leave us feeling disconnected from our own needs and direction. You don't need another space where you have to perform or have the answers.</p><p>Inspired by Laurine's <em>Identity Alignment Workbook</em>, these circles combine journaling, guided discussion, gentle body awareness and sophrology exercises — with room for every woman to reflect at her own pace.</p><p className={styles.note}>Not group therapy, and never a requirement to share something personal. Just a supportive setting for everyday self-reflection.</p></div>
    </section>

    <section className={styles.path} id="journey">
      <p className={styles.kicker}>INSIDE THE BECOMING SESSIONS</p>
      <h2>Five themes. <em>One unfolding journey.</em></h2>
      <p className={styles.pathIntro}>Each gathering stands alone. Attend the one that speaks to you, or join the full five-session journey to revisit your reflections over time. Each session is booked and paid separately.</p>
      <div className={styles.themes}>{s.themes.map(t => <div className={styles.theme} key={t.number}><span className={styles.num}>{t.number}</span><div><h3>{t.title}</h3><strong>{t.subtitle}</strong><p>{t.description}</p></div><span className={styles.sparkle} aria-hidden="true">✧</span></div>)}</div>
    </section>

    <section className={styles.first} id="first">
      <div className={styles.firstHead}><p className={styles.kicker}>OUR FIRST CIRCLE · 01</p><h2>Who Am I <em>Becoming?</em></h2><p>Identity beyond roles and expectations.</p></div>
      <div className={styles.firstGrid}>
        <div className={styles.steps}><h3>What to expect</h3><ol><li><strong>Arrive & settle</strong><span>A warm welcome and a simple check-in.</span></li><li><strong>Ground & reconnect</strong><span>Gentle body awareness and guided sophrology.</span></li><li><strong>Reflect & journal</strong><span>Prompts about your identity, expectations and the woman you're becoming.</span></li><li><strong>Connect & share</strong><span>Open conversations, with sharing always optional.</span></li><li><strong>Leave with an intention</strong><span>A personal thought or next step to carry into your week.</span></li></ol></div>
        <aside className={styles.details}><span className={styles.kicker}>SESSION DETAILS</span><h3>{w.dateLabel}</h3><p>{w.timeLabel} · {w.city}</p><p>{w.venueLabel}</p><div className={styles.detailRule}/><p><strong>Small circle</strong> · 4–{w.capacity} women</p><p><strong>Language</strong> · English</p><p><strong>Introductory fee</strong> · €{s.priceEuros} per person</p><a className={styles.primary} href="#reserve">{canTakePayments ? 'Register & pay €10' : 'Join the priority list'} ↗</a></aside>
      </div>
    </section>

    <section className={styles.host}><p className={styles.kicker}>YOUR HOST</p><h2>Guided with care, <em>never pressure.</em></h2><p>I'm Laurine Karrer, a French certified sophrologist, former beauty therapist and founder of Laurine Karrer Studio. Years of living abroad and supporting women shaped my belief that meaningful connection begins with space to simply be ourselves. These sessions offer a gentle framework, not a prescription for who you should become.</p></section>

    <section className={styles.register} id="reserve">
      <div className={styles.registerIntro}><p className={styles.kicker}>YOUR PLACE AT THE TABLE</p><h2>Take a little time <em>for yourself.</em></h2><p>Complete this short form for Session 01. When payment opens, you'll continue to a secure Stripe checkout.</p><p className={styles.price}><strong>€{s.priceEuros}</strong> <span>for 90 minutes · per person</span></p><p className={styles.fine}>{!canTakePayments ? 'Registration is currently a priority list while the venue, payment details and cancellation terms are finalised. Sending this form does not reserve a seat.' : 'Your seat is not reserved by this form alone. Complete Stripe payment using the same email address, then await an organiser confirmation of your seat.'}</p></div>
      <div className={styles.formPanel}><RegistrationForm price={s.priceEuros} paymentUrl={canTakePayments ? w.stripePaymentUrl : ''} cancellationPolicy={w.cancellationPolicy} /></div>
    </section>
    <footer className={styles.bottom}><span>THE BECOMING CLUB · BY LAURINE KARRER STUDIO</span><Link href="/community">Discover the community ↗</Link><a href={s.meetupGroupUrl} target="_blank" rel="noopener noreferrer">Meetup ↗</a></footer>
  </main>;
}

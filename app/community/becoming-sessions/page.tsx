import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import WaitlistForm from './WaitlistForm';
import { becomingSessions as s } from '../../../content/becomingSessions';

export const metadata: Metadata = {
  title: 'Becoming Sessions | The Becoming Club | Laurine Karrer Studio',
  description: 'Discover the five Becoming Sessions: guided circles for women in Amsterdam. Bookings are paused; join the waitlist for future dates.',
  alternates: { canonical: '/community/becoming-sessions' },
};

const { workshop: w } = s;
// Bookings are paused. Keep the five-session programme and historic checkout
// settings unchanged in content/becomingSessions.ts for future use.

export default function BecomingSessionsPage() {
  return <main className={styles.page} id="top">
    <div className={styles.band}><span>THE BECOMING CLUB</span><span aria-hidden="true">✧</span><span>BY LAURINE KARRER STUDIO</span></div>
    <div className={styles.top}><Link href="/community" className={styles.backToClub}>← Back to the Club</Link><nav aria-label="On this page"><a href="#connections">The concept</a><a href="#journey">Five sessions</a><a href="#first">First session</a><a href="#reserve">Waitlist</a></nav></div>

    <section className={styles.hero} aria-labelledby="sessions-title">
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>GUIDED CIRCLES FOR WOMEN · AMSTERDAM</p>
        <h1 id="sessions-title">Becoming <em>Sessions.</em></h1>
        <p className={styles.lead}>From self-discovery to <em>self-trust.</em></p>
        <p>Five small-group gatherings to reconnect with yourself, share with others and move forward with a little more clarity.</p>
        <div className={styles.tags}><span>6 women</span><span>90 minutes</span><span>English</span><span>Next dates coming soon</span></div>
        <a className={styles.primary} href="#reserve">Join the waitlist <span aria-hidden="true">↗</span></a>
        <p style={{marginTop:'15px',fontSize:'.8rem'}}>Bookings are currently paused. Join the list to hear when new dates open.</p>
      </div>
      <div className={styles.heroArt}><Image src="/the-becoming-club/becoming-sessions.webp" alt="Becoming Sessions — The Becoming Club original artwork" fill priority sizes="(max-width: 780px) 100vw, 42vw" style={{objectFit:'contain'}} /></div>
    </section>

    <section className={styles.why} id="connections" aria-labelledby="connections-title">
      <div className={styles.sectionHeading}><p className={styles.kicker}>WHY WE GATHER</p><h2 id="connections-title">One circle. <em>Three dimensions.</em></h2><p>Time to reconnect with yourself, share with others and enjoy a space where you can simply be.</p></div>
      <div className={styles.connectionGrid}>
        <div className={styles.connectionCard}>
          <div className={styles.cardHeading}>
            <svg className={styles.connectionIcon} aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"><path d="M16 27S4.5 19.7 4.5 11.9a6.7 6.7 0 0 1 11.5-4.6 6.7 6.7 0 0 1 11.5 4.6C27.5 19.7 16 27 16 27Z"/></svg>
            <h3>Personal Awareness</h3>
          </div>
          <p>Pause, notice your needs and reconnect with what feels true to you.</p>
        </div>
        <div className={styles.connectionCard}>
          <div className={styles.cardHeading}>
            <svg className={styles.connectionIcon} aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="4"/><path d="M3.8 26v-2.2a7.2 7.2 0 0 1 14.4 0V26H3.8Z"/><circle cx="23.5" cy="12" r="3.3"/><path d="M21 19.2a6 6 0 0 1 7.5 5.8V26h-7"/></svg>
            <h3>Meaningful Connection</h3>
          </div>
          <p>Share honest moments with other women, without labels or pressure to perform.</p>
        </div>
        <div className={styles.connectionCard}>
          <div className={styles.cardHeading}>
            <svg className={styles.connectionIcon} aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h18v8a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8v-8Z"/><path d="M23 15h2.5a3.5 3.5 0 1 1 0 7H23M10 4c-2 2 2 3.5 0 5.5M17 4c-2 2 2 3.5 0 5.5"/></svg>
            <h3>The Experience</h3>
          </div>
          <p>A setting chosen with care, room for creativity and a natural flow, gentle guidance and time to slow down.</p>
        </div>
      </div>
      <p className={styles.whyBottom}>A thoughtful mix of journaling, sophrology, numerology and optional symbolic reflection. No experience or particular beliefs needed.</p>
    </section>

    <section className={styles.path} id="journey" aria-labelledby="journey-title">
      <p className={styles.kicker}>THE JOURNEY</p><h2 id="journey-title">Five sessions. <em>One direction.</em></h2>
      <p className={styles.pathIntro}>From understanding who you are to taking a step you can trust. Join one session or follow the full journey — each stands on its own.</p>
      <div className={styles.themes}>{s.themes.map(t => <div className={styles.theme} key={t.number}>
        <span className={styles.num}>{t.number}</span><div><span className={styles.verb}>{t.verb}</span><h3>{t.title}</h3><p>{t.description}</p></div><span className={styles.sparkle} aria-hidden="true">✧</span>
      </div>)}</div>
    </section>

    <section className={styles.first} id="first" aria-labelledby="first-title">
      <div className={styles.firstHead}><p className={styles.kicker}>FIRST CIRCLE · 01</p><h2 id="first-title">Who Am I <em>Becoming?</em></h2><p>Identity beyond roles and expectations.</p></div>
      <div className={styles.firstGrid}>
        <div className={styles.steps}><h3>What to expect</h3><ul>
          <li>Gentle breathwork to slow down and settle</li>
          <li>Guided reflection with identity tools</li>
          <li>Journaling and conversation</li>
          <li>One insight to take into your week</li>
        </ul><p className={styles.stepsNote}>A welcoming, non-therapeutic group experience. No need to prepare or share anything personal.</p></div>
        <aside className={styles.details}><span className={styles.kicker}>SESSION DETAILS</span><h3>New dates coming soon</h3><p>90 minutes · {w.city}</p><p>Venue and schedule to be announced</p><div className={styles.detailRule}/><p><strong>Circle</strong> · {w.capacity} women</p><p><strong>Language</strong> · English</p><p><strong>Bookings</strong> · Currently paused</p><a className={styles.primary} href="#reserve">Join the waitlist ↗</a></aside>
      </div>
    </section>

    <section className={styles.host} aria-labelledby="host-title"><p className={styles.kicker}>YOUR HOST & THE STUDIO</p><h2 id="host-title">Hi, I’m <em>Laurine.</em></h2>
      <p>I'm a French certified sophrologist with a background in beauty therapy and massage. I also use intuitive tools, including tarot, in my reflective work. After years of travelling and accompanying women, I wanted to create a place to feel grounded and genuinely connected in Amsterdam.</p>
      <p><strong>Laurine Karrer Studio</strong> offers sophrology, bodywork and intuitive guidance for greater self-awareness and decision clarity. <strong>The Becoming Club</strong> brings that intention into small, welcoming group experiences.</p>
      <Link href="/community" className={styles.hostLink}>Discover The Becoming Club ↗</Link>
    </section>

    <section className={styles.register} id="reserve" aria-labelledby="reserve-title">
      <div className={styles.registerIntro}>
        <p className={styles.kicker}>BECOMING SESSIONS · WAITLIST</p>
        <h2 id="reserve-title">Be first to <em>know.</em></h2>
        <p>The Becoming Sessions are taking a little pause while we prepare the next edition.</p>
        <p>Our five-session journey is staying right here. Join the waitlist and I'll let you know when new dates become available in Amsterdam.</p>
        <p className={styles.fine}>No payment, no obligation and no date to commit to yet.</p>
      </div>
      <div className={styles.formPanel}>
        <WaitlistForm />
      </div>
    </section>

    <footer className={styles.bottom}><span>THE BECOMING CLUB · BY LAURINE KARRER STUDIO</span><Link href="/community">Back to the Club ↗</Link><a href={s.meetupGroupUrl} target="_blank" rel="noopener noreferrer">Meetup ↗</a></footer>
  </main>;
}

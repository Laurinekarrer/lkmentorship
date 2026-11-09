import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { becomingConnect as c } from '../../../content/becomingConnect';

export const metadata: Metadata = {
  title: 'Stay Connected | The Becoming Club',
  description: 'Stay connected after Coffee & Connection in Amsterdam. Share event feedback, join the next CoCo, meet Laurine and discover our circle guidelines.',
  alternates: { canonical: '/community/connect' },
  openGraph: { title: 'The Becoming Club — Stay Connected', description: 'Come as you are. Become together.', images: ['/the-becoming-club/club-logo.webp'] },
};

const supportsOnline = /^https:\/\//.test(c.supportPaymentUrl);

export default function StayConnected() {
  return <section className={styles.page} aria-labelledby="connect-title">
    <div className={styles.wrap}>
      <div className={styles.logo}><Image src="/the-becoming-club/club-logo.webp" width={106} height={106} alt="The Becoming Club bee emblem" /></div>
      <p className={styles.eyebrow}>THE BECOMING CLUB · AMSTERDAM</p>
      <h1 id="connect-title">Stay <em>connected.</em></h1>
      <p className={styles.lead}>Come for the coffee. Stay for the connection.</p>
      <p className={styles.intro}>We loved sharing a little moment with you. Find your next gathering, share how it felt and discover more of our circle.</p>

      <div className={styles.actions}>
        <article className={styles.action}>
          <div className={styles.index}>01 <span>♡</span></div>
          <div><h2>Loved your CoCo?</h2><p>Your honest feedback helps us grow. If you RSVPed, you can share a rating after the event has ended.</p><a className={styles.link} href={c.lastCoCoEventUrl} target="_blank" rel="noopener noreferrer">Share feedback on Meetup <span aria-hidden="true">↗</span></a><p className={styles.hint}>Latest completed event: {c.lastCoCoLabel}. Meetup may ask you to sign in.</p></div>
        </article>
        <article className={styles.action}>
          <div className={styles.index}>02 <span>✧</span></div>
          <div><h2>Join the next CoCo</h2><p>A new café, familiar faces and genuine conversations. Our gatherings are kept intentionally small.</p><Link className={styles.link} href={c.nextCoCoUrl}>{c.nextCoCoLabel} <span aria-hidden="true">↗</span></Link><p className={styles.hint}>Stay informed through <a href={c.meetupGroupUrl} target="_blank" rel="noopener noreferrer">our Meetup group ↗</a>. A Meetup RSVP alone does not reserve a paid CoCo spot.</p></div>
        </article>
        <article className={styles.action}>
          <div className={styles.index}>03 <span>✦</span></div>
          <div><h2>Get to know your host</h2><p>Hi, I’m Laurine — a certified sophrologist and founder of Laurine Karrer Studio. I offer sophrology, body-based care and practices that support self-awareness in Amsterdam and online.</p>
          <div className={styles.multi}><Link href={c.hostUrl}>Meet Laurine ↗</Link><Link href={c.servicesUrl}>Explore services ↗</Link><Link href={c.bookingUrl}>Book a session ↗</Link></div></div>
        </article>
        <article className={styles.action}>
          <div className={styles.index}>04 <span>☼</span></div>
          <div><h2>Our little circle guidelines</h2><p>There is no networking, no performance and no pressure to share. Just a space for thoughtful conversations.</p><a className={styles.link} href="#guidelines">Read our guidelines <span aria-hidden="true">↓</span></a></div>
        </article>
      </div>

      <section className={styles.guidelines} id="guidelines" aria-labelledby="guidelines-title">
        <p className={styles.eyebrow}>HOW WE GATHER</p>
        <h2 id="guidelines-title">Belong without <em>performing.</em></h2>
        <p style={{maxWidth: '570px', margin: '0 auto 21px', textAlign: 'center', color: '#756061', fontSize: '.9rem'}}>A space where we aim to feel safe enough to be ourselves, while respecting each other's boundaries.</p>
        <ul>
          <li><strong>Come as you are. No performance needed.</strong><br/>You don't need to impress, prove anything or be a certain version of yourself. Just show up as you are, whatever your mood or energy.</li>
          <li><strong>Slow down &amp; reconnect.</strong><br/>Take a moment to settle in, notice how you're feeling and reconnect with yourself. This is a space to pause, not another place to perform.</li>
          <li><strong>Different opinions, open minds.</strong><br/>You're welcome to have your own views, even when they differ from others. Stay curious, question perspectives and make room for differences without judging the person behind them.</li>
          <li><strong>Make room for every voice.</strong><br/>Share your thoughts, listen when others speak and respect everyone's rhythm. You can speak, disagree or simply listen. Nothing personal needs to be shared.</li>
          <li><strong>Connection over networking.</strong><br/>No sales pitches, no self-promotion and no pressure to exchange contacts. Respect each other's privacy: no sharing personal stories or photos without permission. We're here for genuine conversations, not opportunities.</li>
        </ul>
        <p style={{maxWidth:'570px',margin:'24px auto 0',textAlign:'center',color:'#791625',fontSize:'.84rem',fontStyle:'italic'}}>No perfect answers. No expectations. Just a space to slow down, connect and be human.</p>
      </section>

      <section className={styles.support} aria-labelledby="support-title">
        <p className={styles.eyebrow}>A LITTLE EXTRA LOVE</p>
        <h2 id="support-title">Support the <em>circle.</em></h2>
        <p>Enjoyed being here? An optional contribution can help us organise future gatherings and create simple shared materials. There's never any obligation.</p>
        {supportsOnline ? <a className={styles.supportButton} href={c.supportPaymentUrl} target="_blank" rel="noopener noreferrer">Support The Becoming Club ↗</a> : <p className={styles.pending}>A separate support link is coming soon. You can already support us by sharing the club with a friend.</p>}
      </section>
      <footer className={styles.footer}><p>Come as you are. <em>Become together.</em></p><span>THE BECOMING CLUB · BY LAURINE KARRER STUDIO</span><div><Link href="/community">The Club ↗</Link><a href={c.meetupGroupUrl} target="_blank" rel="noopener noreferrer">Meetup ↗</a><a href={`mailto:${c.contactEmail}`}>Contact ↗</a></div></footer>
    </div>
  </section>;
}

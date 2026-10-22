import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import InterestForm from './InterestForm';
import { becomingClub as c } from '../../content/becomingClub';

export const metadata: Metadata = {
  title: 'The Becoming Club | Community for Women in Amsterdam | Laurine Karrer Studio',
  description: 'Coffee & Connection, tea gatherings and Becoming Sessions. A small, welcoming women’s community in Amsterdam for genuine friendships, reflection and self-discovery.',
  openGraph: {
    title: 'The Becoming Club · Women in Amsterdam',
    description: 'Come as you are. Become together. By Laurine Karrer Studio.',
    images: [{ url: '/the-becoming-club/club-logo.webp', width: 1100, height: 1100 }],
  },
};

export default function CommunityPage() {
  const coffeeUrl = c.coffee.eventUrl || c.meetupGroupUrl;
  return (
    <main className={styles.page} id="top">
      <div className={styles.ribbon}><span>THE BECOMING CLUB</span><span className={styles.ribbonSymbol}>✦</span><span>BY LAURINE KARRER STUDIO</span></div>
      <div className={styles.pageMenu} aria-label="Community page navigation">
        <a className={styles.backLink} href="/">← Laurine Karrer Studio</a>
        <div className={styles.anchorLinks}><a href="#the-club">Our story</a><a href="#gatherings">Gatherings</a><a href="#journey">The journey</a><a href="#join">Stay connected</a></div>
      </div>
      <section className={styles.hero} aria-labelledby="community-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{c.heroEyebrow}</p>
          <div className={styles.accentSymbol} aria-hidden="true">✧</div>
          <h1 id="community-title">The <em>Becoming</em><br/>Club<span className={styles.dot}>.</span></h1>
          <p className={styles.heroLine}>{c.heroTitle}</p>
          <p className={styles.heroText}>{c.heroCopy}</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={c.meetupGroupUrl} target="_blank" rel="noopener noreferrer">Join the club on Meetup <span aria-hidden="true">↗</span></a>
            <a className={styles.textLink} href="#gatherings">Explore gatherings ↓</a>
          </div>
          <p className={styles.heroMeta}>AMSTERDAM · ENGLISH SPEAKING · SMALL GATHERINGS</p>
        </div>
        <div className={styles.heroVisual}>
          <Image src="/the-becoming-club/becoming-her.webp" alt="Be.Coming HER — an invitation to return to yourself, with a delicate bee emblem" fill priority sizes="(max-width: 860px) 100vw, 43vw" className={styles.heroImage}/>
          <div className={styles.visualStamp}>WOMEN · CONNECTION · BECOMING</div>
        </div>
      </section>
      <section className={styles.intro} id="the-club" aria-labelledby="story-title">
        <div className={styles.introLeft}><p className={styles.eyebrow}>A NEW ERA OF CONNECTION</p><h2 id="story-title">Finding your people is part of <em>finding yourself.</em></h2></div>
        <div className={styles.introRight}><p>{c.manifesto}</p><p className={styles.signature}>A new city. A new season. A little more of yourself.</p><span className={styles.starLine}>— ✦ —</span></div>
      </section>
      <section className={styles.gatherings} id="gatherings" aria-labelledby="gatherings-title">
        <div className={styles.sectionTitle}><p className={styles.eyebrow}>TWO WAYS TO CONNECT</p><h2 id="gatherings-title">A place for every <em>kind of becoming.</em></h2><p>Relaxed afternoons or deeper reflections. Always intimate, welcoming and thoughtfully hosted.</p></div>
        <div className={styles.eventGrid}>
          <article className={styles.eventCard}>
            <div className={styles.poster}><Image src="/the-becoming-club/coffee-connection.webp" alt="Coffee & Connection — women, conversation, connection; cream and burgundy event artwork featuring a bee" fill sizes="(max-width: 780px) 100vw, 44vw" className={styles.posterImage}/></div>
            <div className={styles.eventBody}>
              <p className={styles.eventLabel}>01 — SOCIAL GATHERINGS</p>
              <h3>{c.coffee.title}</h3><p className={styles.eventSubtitle}>{c.coffee.subtitle}</p><p>{c.coffee.text}</p>
              <ul className={styles.pills}>{c.coffee.meta.map(item => <li key={item}>{item}</li>)}</ul>
              <div className={styles.eventFooter}><div className={styles.date}><strong>{c.coffee.nextLabel}</strong><span>{c.coffee.venueLabel}</span></div><Link className={styles.secondaryButton} href="/community/coco-02">Discover CoCo 02 &amp; book ↗</Link></div>
            </div>
          </article>
          <article className={styles.eventCard}>
            <div className={styles.poster}><Image src="/the-becoming-club/becoming-sessions.webp" alt="Becoming Sessions — reflection, self-discovery, becoming; cream and burgundy event artwork featuring a bee" fill sizes="(max-width: 780px) 100vw, 44vw" className={styles.posterImage}/></div>
            <div className={styles.eventBody}>
              <p className={styles.eventLabel}>02 — GUIDED WORKSHOPS</p>
              <h3>{c.sessions.title}</h3><p className={styles.eventSubtitle}>{c.sessions.subtitle}</p><p>{c.sessions.text}</p>
              <ul className={styles.pills}>{c.sessions.meta.map(item => <li key={item}>{item}</li>)}</ul>
              <div className={styles.eventFooter}><div className={styles.date}><strong>{c.sessions.nextLabel}</strong><span>{c.sessions.venueLabel}</span></div><Link className={styles.secondaryButton} href="/community/becoming-sessions">Explore the programme &amp; waitlist ↗</Link></div>
            </div>
          </article>
        </div>
        <p className={styles.disclaimer}>For CoCo 02, a contribution of at least €2 reserves your seat once Stripe payment is completed. Drinks and food are purchased separately. Becoming Sessions are currently on pause; join the waitlist for the next dates.</p>
      </section>
      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <div className={styles.manifestoImage}><Image src="/the-becoming-club/new-era.webp" alt="A new era of becoming — softly, truthfully, together" fill sizes="(max-width: 860px) 100vw, 28vw" /></div>
        <div className={styles.manifestoWords}><p className={styles.eyebrow}>THE ART OF BECOMING</p><h2 id="manifesto-title">You don't need to have it <em>all figured out.</em></h2><p>Sometimes, you simply need a new conversation, a space to pause and women who remind you that you're not moving through it alone.</p><blockquote>“Come as you are. Leave a little more connected.”</blockquote></div>
      </section>
      <section className={styles.journey} id="journey" aria-labelledby="journey-title"><div className={styles.sectionTitle}><p className={styles.eyebrow}>INSIDE THE BECOMING SESSIONS</p><h2 id="journey-title">Five themes. <em>One unfolding journey.</em></h2><p>Inspired by the Identity Alignment Workbook. Each gathering can be attended on its own.</p></div><div className={styles.themeList}>{c.themes.map(theme => <div className={styles.themeItem} key={theme.no}><span>{theme.no}</span><div><h3>{theme.title}</h3><p>{theme.description}</p></div><span aria-hidden="true">✧</span></div>)}</div><p className={styles.disclaimer}><Link href="/community/becoming-sessions">Explore the five-session programme &amp; join the waitlist ↗</Link></p></section>
      <section className={styles.host}><div className={styles.hostDecor}><span className={styles.hostSymbol}>✧</span><h2>Be yourself.<br/><em>Become together.</em></h2><p>WOMEN · CONNECTION · GROWTH</p></div><div className={styles.hostText}><p className={styles.eyebrow}>MEET YOUR HOST</p><h2>Hi, I'm <em>Laurine.</em></h2><p>{c.host}</p><p className={styles.hostName}>Laurine Karrer <span>· Sophrologist &amp; Founder</span></p><a className={styles.hostLink} href="/">Explore Laurine Karrer Studio ↗</a></div></section>
      <section className={styles.join} id="join" aria-labelledby="join-title"><div><p className={styles.eyebrow}>A PLACE AT THE TABLE</p><h2 id="join-title">Your next connection might start <em>here.</em></h2><p>Join us on Meetup, or discover the next CoCo and reserve a place through a small contribution. Sign up below for occasional news about upcoming gatherings.</p><a className={styles.primaryButton} href={c.meetupGroupUrl} target="_blank" rel="noopener noreferrer">Join on Meetup ↗</a><p className={styles.footnote}><Link href="/community/coco-02">See CoCo 02 &amp; booking ↗</Link> · <Link href="/community/becoming-sessions">Discover Becoming Sessions ↗</Link></p></div><div className={styles.formBox}><h3>Stay in the loop.</h3><p>Occasional updates from The Becoming Club.</p><InterestForm/></div></section>
      <section className={styles.faq} aria-labelledby="faq-title"><p className={styles.eyebrow}>GOOD TO KNOW</p><h2 id="faq-title">Before we <em>meet.</em></h2>{c.faqs.map(f => <details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</section>
      <footer className={styles.footer}><div><strong>THE BECOMING CLUB</strong><span>by Laurine Karrer Studio · Amsterdam</span></div><div><a href={c.meetupGroupUrl} target="_blank" rel="noopener noreferrer">Meetup ↗</a><a href={c.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={`mailto:${c.contactEmail}`}>Contact ↗</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}

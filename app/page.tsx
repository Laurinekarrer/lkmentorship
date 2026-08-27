import Image from 'next/image';
import Link from 'next/link';
import {AboutTabs} from '@/components/AboutTabs';
import type {Metadata} from 'next';

export const metadata:Metadata={alternates:{canonical:'/'},title:'Certified Sophrologist in Amsterdam',description:'Meet Laurine Karrer, a certified sophrologist in Amsterdam offering sophrology, therapeutic bodywork, ritual massage, body awareness and breathwork in English and French.'};

export default function Home() {
  const pillars = [
    { title: 'Conscious touch', text: 'Release tension and restore safety.' },
    { title: 'Body awareness', text: 'Reconnect with the language of your body.' },
    { title: 'Breath & clarity', text: 'Regulate your nervous system and create space.' },
    { title: 'Identity work', text: 'Understand yourself and make aligned decisions.' },
    { title: 'Intuitive guidance', text: 'Access deeper perspectives beyond the thinking mind.' },
  ];

  return <>
    <section className="hero">
      <div className="hero-copy">
        <h1>Come back to your body.</h1>
        <p className="hero-statement">Find clarity. Move from self-trust.</p>
        <p>Massage, therapy sessions, breathwork, classes and workshops designed to help you reconnect with what your body already knows.</p>
        <div className="buttons"><Link className="btn primary" href="/services">Explore services</Link></div>
      </div>
      <div className="photo hero-photo">
        <Image src="/laurine-hero.jpg" alt="Laurine Karrer, Sophrologist in Amsterdam" fill priority sizes="(max-width: 850px) 100vw, 40vw" />
      </div>
    </section>

    <section className="section">
      <div className="shell intro-grid philosophy-grid">
        <div className="philosophy-media">
          <p className="eyebrow">My philosophy</p>
          <div className="video-placeholder" aria-label="Presentation video placeholder">
            <span className="play-mark">▶</span>
            <strong>Presentation video</strong>
            <small>Coming soon</small>
          </div>
        </div>
        <div>
          <p className="lead">Sophrology brings the body, breath and mind back into conversation.</p>
          <p>Through conscious touch, movement, breath and meaningful conversation, I help you create the conditions for your own clarity to emerge.</p>
        </div>
      </div>
    </section>

    <section className="section approach">
      <div className="shell">
        <p className="eyebrow">My approach</p>
        <h2>Rooted in the body.<br/>Led by what is true.</h2>
        <div className="pillars">{pillars.map((item, index) => <div className="pillar" key={item.title}><small>0{index + 1}</small><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
      </div>
    </section>

    <AboutTabs />
  </>;
}

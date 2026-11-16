import Image from 'next/image';
import Link from 'next/link';
import {AboutTabs} from '@/components/AboutTabs';
import type {Metadata} from 'next';

export const metadata:Metadata={alternates:{canonical:'/'},title:'Certified Sophrologist in Amsterdam',description:'Meet Laurine Karrer, a certified sophrologist in Amsterdam offering sophrology, therapeutic bodywork, ritual massage, body awareness and breathwork in English and French.'};

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <h1>Come back to your body.</h1>
        <p className="hero-statement">Find clarity. Move from self-trust.</p>
        <p>Body rituals, identity sessions and workshops in Amsterdam.</p>
        <div className="buttons"><Link className="btn primary" href="/booking">Book a session</Link><Link className="btn" href="/services">Explore services</Link></div>
      </div>
      <div className="photo hero-photo">
        <Image src="/laurine-hero.jpg" alt="Laurine Karrer, Sophrologist in Amsterdam" fill priority sizes="(max-width: 850px) 100vw, 40vw" />
      </div>
    </section>

    <section className="section">
      <div className="shell intro-grid philosophy-grid">
        <div className="philosophy-media">
          <p className="eyebrow">My philosophy</p>
          <video className="presentation-video" controls playsInline preload="metadata" poster="/laurine-presentation-poster.jpg" aria-label="Meet Laurine Karrer, certified sophrologist in Amsterdam">
            <source src="/laurine-presentation.mp4" type="video/mp4" />
            Your browser does not support this presentation video.
          </video>
        </div>
        <div>
          <p className="lead">A body-led practice for clarity, regulation and self-trust.</p>
          <p>Through sophrology, conscious touch and breath, I create sessions that help you slow down, reconnect and move forward.</p>
        </div>
      </div>
    </section>

    <AboutTabs />
  </>;
}

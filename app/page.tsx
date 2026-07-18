import Image from 'next/image';
import Link from 'next/link';
import { CTA } from '@/components/Site';

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
        <p className="eyebrow">Embodiment · clarity · self-trust</p>
        <h1>Come back to your body. <span>Find clarity.</span><span>Move from self-trust.</span></h1>
        <p>Massage, therapy sessions, breathwork, classes and workshops designed to help you reconnect with what your body already knows.</p>
        <div className="buttons"><Link className="btn primary" href="/services">Explore services</Link><CTA>Book a session</CTA></div>
      </div>
      <div className="photo hero-photo">
        <Image src="/laurine-hero.jpg" alt="Laurine Karrer, Body Awareness Facilitator" fill priority sizes="(max-width: 850px) 100vw, 40vw" />
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
          <p className="lead">I create spaces where the body can soften, speak and become a trusted guide again.</p>
          <p>When the noise settles, clarity does not need to be forced. It can be felt. Through conscious touch, movement, breath and meaningful conversation, I help you create the conditions for your own clarity to emerge.</p>
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

    <section className="section">
      <div className="shell details">
        <div className="photo background-photo">
          <Image src="/laurine-background.jpg" alt="Laurine Karrer in embodied movement" fill sizes="(max-width: 850px) 100vw, 50vw" />
        </div>
        <div>
          <p className="eyebrow">Background</p>
          <h2>A practice shaped by care and presence.</h2>
          <p>My work brings together a background in skincare and aesthetics, massage, sophrology, embodied practices, teaching and mentorship. Each format offers a different doorway back to yourself.</p>
          <div className="note">Based in Amsterdam · Online sessions · Studio collaborations</div>
          <div className="buttons"><Link className="btn primary" href="/services">Start where you are</Link></div>
        </div>
      </div>
    </section>
  </>;
}

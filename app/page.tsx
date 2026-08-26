import Image from 'next/image';
import Link from 'next/link';

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

    <section className="section">
      <div className="shell details">
        <div className="photo background-photo">
          <Image src="/laurine-background.jpg" alt="Laurine Karrer" fill sizes="(max-width: 850px) 100vw, 50vw" />
        </div>
        <div>
          <p className="eyebrow">About Laurine</p>
          <h2>Sophrology, made human.</h2>
          <p>I am a certified sophrologist and body-based therapist, trained over three years with Sophrocap and shaped by experience across clinical care, wellness spaces, teaching and hands-on bodywork.</p>
          <p>Created by neuropsychiatrist Alfonso Caycedo, sophrology combines conscious breathing, gentle movement, dynamic relaxation and guided visualisation. I bring this method into real life with warmth, directness and close attention to what your body is already expressing.</p>
          <p>As one of the early practitioners bringing sophrology to Amsterdam, I offer a grounded space to regulate stress, rebuild inner resources and understand yourself beyond words alone.</p>
          <div className="note">Based in Amsterdam · Online sessions · Studio collaborations</div>
          <div className="buttons"><Link className="btn primary" href="/services">Start where you are</Link></div>
        </div>
      </div>
    </section>
  </>;
}

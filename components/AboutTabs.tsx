'use client';
import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function AboutTabs(){
  const [tab,setTab]=useState<'about'|'sophrology'>('about');
  return <section className="section about-expertise" id="about"><div className="shell">
    <div className="about-tabs" role="tablist" aria-label="About Laurine and sophrology">
      <button role="tab" aria-selected={tab==='about'} className={tab==='about'?'active':''} onClick={()=>setTab('about')}>Who I am</button>
      <button role="tab" aria-selected={tab==='sophrology'} className={tab==='sophrology'?'active':''} onClick={()=>setTab('sophrology')}>What is sophrology?</button>
    </div>
    {tab==='about' ? <div className="about-panel" role="tabpanel">
      <div className="about-portrait"><Image src="/laurine-background.jpg" alt="Laurine Karrer, certified sophrologist in Amsterdam" fill sizes="(max-width: 850px) 100vw, 42vw" /></div>
      <div className="about-copy">
        <p className="eyebrow">About Laurine</p><h2>Certified sophrologist.<br/>A practice shaped by real life.</h2>
        <p className="about-lead">I help people move from mental overload to embodied clarity through sophrology, conscious breath and body-based support.</p>
        <p>I trained in sophrology for three years with Sophrocap and developed my practice across clinical care, wellness environments, float sessions, teaching and therapeutic bodywork.</p>
        <div className="experience-list">
          <article><span>01</span><div><h3>Clinical support</h3><p>I supported people before, during and after medical procedures, using breathing, relaxation and guided awareness to ease stress, encourage calm during the procedure and support the recovery experience.</p></div></article>
          <article><span>02</span><div><h3>Float sessions</h3><p>In Epsom-salt float sessions, I helped people meet emotions, fears and bodily reactions that could surface in stillness. This included working with breath, claustrophobia, inner resistance and experiences that were felt deeply before they could always be put into words.</p></div></article>
          <article><span>03</span><div><h3>A lived understanding</h3><p>Living and working across different cultures taught me how much the nervous system shapes the way we experience change. My own regulation has been built through awareness, movement, nutrition, adventure and learning to listen to my body rather than work against it.</p></div></article>
        </div>
        <p>Today, I bring that experience together in Amsterdam through individual sophrology, group practices and therapeutic and ritual bodywork—structured enough to feel safe, human enough to meet you where you are.</p>
        <div className="credentials"><span><strong>3 years</strong> professional training</span><span><strong>Clinical</strong> & individual practice</span><span><strong>English</strong> & French</span></div>
        <div className="buttons"><Link className="btn primary" href="/booking">Book a session</Link></div>
      </div>
    </div> : <div className="sophrology-panel" role="tabpanel">
      <header className="sophrology-intro"><div><p className="eyebrow">The method</p><h2>Body, breath and mind—back in conversation.</h2></div><p>Sophrology is a structured mind-body practice combining conscious breathing, muscular relaxation, gentle movement, guided imagery and focused awareness. It offers practical tools to notice what is happening within you and respond with greater clarity.</p></header>
      <div className="sophrology-origin"><div><p className="eyebrow">Created in 1960</p><h3>From the study of consciousness to everyday life</h3></div><p>Sophrology was created in Madrid by Colombian neuropsychiatrist Alfonso Caycedo. His work explored consciousness, phenomenology, Western relaxation methods and contemplative practices. The method later became established across several European countries; it is not exclusively French.</p></div>
      <div className="session-steps">
        <article><span>01</span><h3>We talk</h3><p>We identify what you are experiencing and what you need.</p></article><article><span>02</span><h3>We practise</h3><p>Breath, gentle movement, relaxation or guided imagery.</p></article><article><span>03</span><h3>We observe</h3><p>You notice sensations and responses without pressure to perform.</p></article><article><span>04</span><h3>We integrate</h3><p>You leave with a practice you can reuse in daily life.</p></article>
      </div>
      <div className="evidence-block"><div><p className="eyebrow">Research, without overpromising</p><h3>What does the research say?</h3></div><div><p>A randomised controlled trial of a four-week sophrology programme reported improvements among primary-care patients with moderate to high anxiety. Research devoted specifically to sophrology is still developing, so I present it as supportive practice—not as a replacement for medical or psychological care.</p><p className="source-links"><a href="https://pubmed.ncbi.nlm.nih.gov/33210278/" target="_blank" rel="noreferrer">Read the published study ↗</a><a href="https://caycedoinstitute.com/what-is-sophrology/" target="_blank" rel="noreferrer">Explore the method and its history ↗</a></p></div></div>
      <div className="sophrology-note"><strong>Sessions are practised sitting or standing, fully clothed.</strong><span>No previous experience is required.</span></div>
      <div className="buttons"><Link className="btn primary" href="/sophrologist-amsterdam">Discover sophrology in Amsterdam</Link><Link className="btn" href="/services/one-to-one">Explore the session</Link></div>
    </div>}
  </div></section>
}

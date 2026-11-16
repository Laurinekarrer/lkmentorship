import type {Metadata} from 'next';
import {partners} from '@/content/site';

export const metadata:Metadata={title:'Sophrology & Wellness Partners in Amsterdam',description:'Find the Amsterdam spaces where Laurine Karrer Studio offers massage, breathwork and baby spa support.',alternates:{canonical:'/partners'}};

export default function Partners(){return <>
  <section className="page-head shell">
    <p className="eyebrow">Collaborations</p>
    <h1>Where we meet.</h1>
    <p>Selected Amsterdam spaces where I currently offer Laurine Karrer Studio experiences.</p>
  </section>

  <section className="shell partner-compact-grid" aria-label="Laurine Karrer Studio partner locations">
    {partners.map((partner,index)=><article className="partner-compact-card" key={partner.slug}>
      <div><p className="number">0{index+1}</p><p className="eyebrow">{partner.city}</p></div>
      <h2>{partner.name}</h2>
      <p className="partner-address">{partner.address}</p>
      <p className="partner-offer-label">Laurine&apos;s sessions here</p>
      <ul>{partner.offers.map(offer=><li key={offer}>{offer}</li>)}</ul>
      <a className="btn" href="/booking">Book with me</a>
    </article>)}
  </section>

  <section className="section partnership-invite"><div className="shell partnership-invite-inner">
    <div><p className="eyebrow">Collaborate with Laurine Karrer Studio</p><h2>Bring a grounded wellbeing experience into your space.</h2></div>
    <div><p>Body Rituals, sophrology, breathwork and workshops for studios, retreats and events.</p><a className="btn primary" href="mailto:info.lkmentorship@gmail.com?subject=Collaboration enquiry">Start a conversation</a></div>
  </div></section>
</>}

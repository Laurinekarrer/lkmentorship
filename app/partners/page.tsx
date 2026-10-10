import type {Metadata} from 'next';
import {partners} from '@/content/site';

export const metadata:Metadata={title:'Sophrology & Wellness Partners in Amsterdam',description:'Find the Amsterdam spaces where Laurine Karrer Studio offers massage, breathwork and baby spa support.',alternates:{canonical:'/partners'}};

export default function Partners(){return <>
  <section className="page-head shell">
    <p className="eyebrow">Partners</p>
    <h1>Meet me across Amsterdam.</h1>
    <p>I collaborate with selected wellness spaces to bring my practice into places already dedicated to care and connection. Each partnership makes a specific Laurine Karrer Studio experience available in a setting suited to it.</p>
  </section>

  <section className="shell partner-compact-grid" aria-label="Laurine Karrer Studio partner locations">
    {partners.map((partner,index)=><article className="partner-compact-card" key={partner.slug}>
      <div><p className="number">0{index+1}</p><p className="eyebrow">{partner.city}</p></div>
      <h2>{partner.name}</h2>
      <p className="partner-address">{partner.address}</p>
      <p className="partner-offer-label">What I offer here</p>
      <ul>{partner.offers.map(offer=><li key={offer}>{offer}</li>)}</ul>
      <a className="btn" href="/booking">Book with me</a>
    </article>)}
  </section>

  <section className="section approach partnership-cta"><div className="shell intro-grid">
    <div><p className="eyebrow">Collaborate with Laurine Karrer Studio</p></div>
    <div><h2>Bring embodied care into your space.</h2><p>I offer massage, sophrology, breathwork and body-awareness formats for aligned studios, wellness spaces, retreats and events.</p><a className="btn" href="mailto:info.lkmentorship@gmail.com?subject=Partnership enquiry">Discuss a partnership</a></div>
  </div></section>
</>}

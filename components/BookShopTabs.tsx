'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import {config} from '@/content/site';

type Tab='booking'|'shop';

const products=[
  {category:'Gift voucher',title:'Offer a Body Ritual or meaningful session',description:'Choose an experience, add a personal message and pay securely online.',href:'/gift-voucher',action:'Create a gift voucher'}
];

export function BookShopTabs(){
  const [tab,setTab]=useState<Tab>('booking');
  useEffect(()=>{if(window.location.hash==='#shop') setTab('shop')},[]);
  function select(next:Tab){setTab(next);window.history.replaceState(null,'',`#${next}`)}
  return <>
    <div className="commerce-tabs" role="tablist" aria-label="Book or shop">
      <button className={tab==='booking'?'active':undefined} type="button" role="tab" aria-selected={tab==='booking'} onClick={()=>select('booking')}>Book a session</button>
      <button className={tab==='shop'?'active':undefined} type="button" role="tab" aria-selected={tab==='shop'} onClick={()=>select('shop')}>Shop</button>
    </div>
    {tab==='booking'&&<section className="booking-section commerce-panel" role="tabpanel">
      <div className="booking-frame-wrap"><iframe className="booking-frame" src={`${config.calUrl}?embed=true&theme=light`} title="Book a session with Laurine Karrer" loading="eager" allow="camera; microphone; fullscreen; payment"/></div>
      <p className="booking-fallback">Having trouble viewing the calendar? <a href={config.calUrl} target="_blank" rel="noreferrer">Open the booking page ↗</a></p>
    </section>}
    {tab==='shop'&&<section className="shop-panel commerce-panel" role="tabpanel">
      <div className="shop-intro"><div><p className="eyebrow">Gift voucher</p><h2>Give them time for themselves.</h2></div><p>A personal experience they can use when the moment feels right.</p></div>
      <div className="shop-grid">{products.map((product,index)=><article className="shop-card" key={product.title}><p className="number">0{index+1}</p><p className="eyebrow">{product.category}</p><h3>{product.title}</h3><p>{product.description}</p>{product.href?<Link className="btn primary" href={product.href}>{product.action}</Link>:<span className="shop-coming">Coming soon</span>}</article>)}</div>
    </section>}
  </>;
}

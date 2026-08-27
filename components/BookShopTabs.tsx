'use client';

import {useEffect, useState} from 'react';
import {config} from '@/content/site';

type Tab='booking'|'shop';

const products=[
  {
    category:'Digital practice',
    title:'Guided sophrology',
    description:'A guided audio practice to slow down, regulate stress and reconnect with your inner resources.'
  },
  {
    category:'Gift card',
    title:'Offer a ritual',
    description:'A thoughtful invitation to experience body care, sophrology or a moment of deep reconnection.'
  },
  {
    category:'Workbook',
    title:'Clarity journal',
    description:'A gentle collection of prompts and body-based practices for reflection, clarity and self-trust.'
  }
];

export function BookShopTabs(){
  const [tab,setTab]=useState<Tab>('booking');

  useEffect(()=>{
    if(window.location.hash==='#shop') setTab('shop');
  },[]);

  function select(next:Tab){
    setTab(next);
    window.history.replaceState(null,'',next==='shop'?'#shop':'#booking');
  }

  return <>
    <div className="commerce-tabs" role="tablist" aria-label="Book or shop">
      <button className={tab==='booking'?'active':undefined} type="button" role="tab" aria-selected={tab==='booking'} onClick={()=>select('booking')}>Book a session</button>
      <button className={tab==='shop'?'active':undefined} type="button" role="tab" aria-selected={tab==='shop'} onClick={()=>select('shop')}>Shop</button>
    </div>

    {tab==='booking'?<section className="booking-section commerce-panel" role="tabpanel">
      <div className="booking-frame-wrap">
        <iframe
          className="booking-frame"
          src={`${config.calUrl}?embed=true&theme=light`}
          title="Book a session with Laurine Karrer"
          loading="eager"
          allow="camera; microphone; fullscreen; payment"
        />
      </div>
      <p className="booking-fallback">Having trouble viewing the calendar? <a href={config.calUrl} target="_blank" rel="noreferrer">Open the booking page ↗</a></p>
    </section>:<section className="shop-panel commerce-panel" role="tabpanel">
      <div className="shop-intro">
        <div>
          <p className="eyebrow">The shop</p>
          <h2>Practices to take with you.</h2>
        </div>
        <p>Digital rituals, guided practices and meaningful gifts designed to extend the experience beyond the session.</p>
      </div>
      <div className="shop-grid">
        {products.map((product,index)=><article className="shop-card" key={product.title}>
          <p className="number">0{index+1}</p>
          <p className="eyebrow">{product.category}</p>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <span className="shop-coming">Coming soon</span>
        </article>)}
      </div>
      <div className="shop-note">
        <p>Would you like to be the first to know when the shop opens?</p>
        <a className="btn" href={`mailto:${config.email}?subject=Shop opening`}>Keep me informed</a>
      </div>
    </section>}
  </>;
}

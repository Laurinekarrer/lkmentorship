'use client';

import {useEffect, useMemo, useState} from 'react';
import {usePathname} from 'next/navigation';

type Testimonial={quote:string;name:string;kind:string};

const massage:Testimonial[]=[
  {quote:'Had such an amazing massage. I could completely let go — perfect pressure, super intuitive and such a calming energy. I left feeling recharged and light.',name:'Filiz',kind:'Massage'},
  {quote:'A very pleasant full-body massage. Laurine has a kind energy and creates the space to relax and simply let go.',name:'Tomasz',kind:'Full body massage'},
  {quote:'The massage was a beautiful journey. Laurine was there with full energy and presence, which is very rare in massages.',name:'Private client',kind:'Massage'},
  {quote:'I had a wonderful massage with Laurine. It felt relaxing and healing, and I plan to book another one soon.',name:'Private client',kind:'Massage'},
  {quote:'It was like space travel. Laurine, you are the best!',name:'Private client',kind:'Massage'},
  {quote:'A very beautiful experience. Laurine knows what she is doing. Thank you!',name:'Private client',kind:'Massage'},
  {quote:'She has a superpower in the way she takes care of you. The whole experience helped me enter a deeply relaxed state.',name:'Private client',kind:'Blue Detox Facial'}
];

const oneToOne:Testimonial[]=[
  {quote:'The numerology part gave me a lot of clarity. I understood patterns in my life from a different perspective, and things clicked in a grounding and insightful way.',name:'Private client',kind:'Awakening session'},
  {quote:'Everything made sense and reminded me that I can trust myself. Laurine is gentle, attentive and deeply present.',name:'Private client',kind:'One-to-one session'},
  {quote:'Her guidance helped me move forward, reconnect with myself and see my path more clearly.',name:'Private client',kind:'Clarity guidance'},
  {quote:'I found strengths in myself that I did not know were there and understood my limits. The guidance helped me recentre and see my path with greater clarity.',name:'Private client',kind:'Intuitive guidance'},
  {quote:'I felt respected in what I was experiencing. Nothing was presented as a fixed truth or prediction, so I kept my personal power and felt safe throughout the process.',name:'Private client',kind:'Intuitive guidance'},
  {quote:'The session combined guidance, numerology and body awareness. Things clicked in a way that felt both grounding and insightful—not only understood in my mind, but felt in my body.',name:'Private client',kind:'Awakening session'}
];

const classes:Testimonial[]=[
  {quote:'It was my first time trying meditation and I found it an amazing experience. I felt energised and stronger, both physically and spiritually.',name:'Luke',kind:'Class participant'},
  {quote:'Laurine is a very kind and encouraging teacher. Her classes and challenges helped me achieve more than I hoped.',name:'Private client',kind:'Class participant'},
  {quote:'You received me with open arms and taught me everything I know. I always looked forward to the next class.',name:'Private client',kind:'Class participant'}
];

export function Testimonials(){
  const pathname=usePathname();
  const items=useMemo(()=>{
    if(pathname.includes('/services/massage')) return massage;
    if(pathname.includes('/services/one-to-one')) return oneToOne;
    if(pathname.includes('/services/classes')||pathname.includes('/workshops')) return classes;
    return [massage[0],oneToOne[0],classes[0]];
  },[pathname]);
  const [index,setIndex]=useState(0);
  useEffect(()=>setIndex(0),[pathname]);
  useEffect(()=>{
    const timer=window.setInterval(()=>setIndex(value=>(value+1)%items.length),6500);
    return ()=>window.clearInterval(timer);
  },[items]);
  const previous=()=>setIndex(value=>(value-1+items.length)%items.length);
  const next=()=>setIndex(value=>(value+1)%items.length);
  const item=items[index];

  return <section className="testimonials" aria-labelledby="testimonials-title">
    <div className="shell testimonials-shell">
      <div className="testimonials-label"><p className="eyebrow">Testimonials</p><h2 id="testimonials-title">What they felt.</h2></div>
      <div className="testimonial-slider" aria-live="polite">
        <figure className="testimonial-slide" key={`${pathname}-${index}`}>
          <blockquote>“{item.quote}”</blockquote>
          <figcaption><strong>{item.name}</strong><span>{item.kind}</span></figcaption>
        </figure>
        <div className="testimonial-controls">
          <span>{String(index+1).padStart(2,'0')} / {String(items.length).padStart(2,'0')}</span>
          <div><button type="button" onClick={previous} aria-label="Previous testimonial">←</button><button type="button" onClick={next} aria-label="Next testimonial">→</button></div>
        </div>
      </div>
    </div>
  </section>;
}

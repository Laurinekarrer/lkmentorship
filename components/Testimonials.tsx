'use client';

import {useEffect, useMemo, useState} from 'react';
import {usePathname} from 'next/navigation';
import {config} from '@/content/site';

type Testimonial={quote:string;name:string;kind:string};

const massage:Testimonial[]=[
  {quote:'Had such an amazing massage. I could completely let go — perfect pressure, super intuitive and such a calming energy. I left feeling recharged and light.',name:'Filiz',kind:'Massage'},
  {quote:'A very pleasant full-body massage. Laurine has a kind energy and creates the space to relax and simply let go.',name:'Tomasz',kind:'Full body massage'},
  {quote:'The massage was a beautiful journey. Laurine was there with full energy and presence, which is very rare in massages.',name:'Private client',kind:'Massage'},
  {quote:'I had a wonderful massage with Laurine. It felt relaxing and healing, and I plan to book another one soon.',name:'Private client',kind:'Massage'},
  {quote:'It was like space travel. Laurine, you are the best!',name:'Private client',kind:'Massage'},
  {quote:'A very beautiful experience. Laurine knows what she is doing. Thank you!',name:'Private client',kind:'Massage'},
  {quote:'She has a superpower in the way she takes care of you. The whole experience helped me enter a deeply relaxed state.',name:'Private client',kind:'Face ritual massage'}
  ,{quote:'Some weeks after my massage at LUCA, I was already looking to book another session with Laurine.',name:'Private client',kind:'Returning massage client'}
  ,{quote:'I am still thinking and feeling our session. The movement, touch and breathing truly connected—it was way more than a massage.',name:'Dubi',kind:'Body ritual massage'}
  ,{quote:'The experience felt connected, relaxing, sensual and magical. I would love to stay in touch and experience another massage.',name:'Rolf',kind:'Body ritual massage'}
  ,{quote:'The massage did a lot for my system. I immediately wanted to book another session.',name:'Pieter',kind:'Returning massage client'}
  ,{quote:'From the moment we met, I felt at ease. Laurine creates a welcoming, calm atmosphere and brings genuine care to her work. I left relaxed, recharged and much more balanced.',name:'Private client',kind:'Massage'}
  ,{quote:'The facial and holistic massage were both marvellous. Laurine’s gentle touch allowed me to enter deep relaxation, and her passion shows in her energy and attentiveness.',name:'Private client',kind:'Face ritual massage'}
  ,{quote:'I felt every part of my body relax and reached a feeling of total peace. The session was professional, deeply restorative and gave me real time for myself.',name:'Mystery Barragan',kind:'Full body massage'}
  ,{quote:'Laurine knows what she is doing. She creates a safe space to fully surrender to the moment. I felt deeply relaxed after the session and could still feel that relaxation throughout my body the next day.',name:'Louise Cecilia ten Pas',kind:'Google Review · Massage'}
  ,{quote:'Best massage experience ever. I have already had a couple of sessions with Laurine and cannot wait to book the next. Her touch is gentle and powerful—it is not just a treatment, it is a beautiful ritual.',name:'Dubi Charytan',kind:'Google Review · Massage'}
  ,{quote:'Amazing experience! Top quality treatment.',name:'Pieter Olierook',kind:'Google Review · Massage'}
  ,{quote:'Laurine takes the time to understand your body, and you can feel how much knowledge and care she puts into her work. I felt completely relaxed and comfortable, and afterwards my body felt incredible.',name:'Stephan Haak',kind:'Google Review · Massage'}
  ,{quote:'Not only a great massage, but a lovely person with good energy who makes you feel comfortable and at ease. 10/10 recommend.',name:'Cosmo Steers Anchante',kind:'Google Review · Massage'}
];

const oneToOne:Testimonial[]=[
  {quote:'The numerology part gave me a lot of clarity. I understood patterns in my life from a different perspective, and things clicked in a grounding and insightful way.',name:'Private client',kind:'Guidance session'},
  {quote:'Everything made sense and reminded me that I can trust myself. Laurine is gentle, attentive and deeply present.',name:'Private client',kind:'One-to-one session'},
  {quote:'Her guidance helped me move forward, reconnect with myself and see my path more clearly.',name:'Private client',kind:'Clarity guidance'},
  {quote:'I found strengths in myself that I did not know were there and understood my limits. The guidance helped me recentre and see my path with greater clarity.',name:'Private client',kind:'Intuitive guidance'},
  {quote:'I felt respected in what I was experiencing. Nothing was presented as a fixed truth or prediction, so I kept my personal power and felt safe throughout the process.',name:'Private client',kind:'Intuitive guidance'},
  {quote:'The session combined guidance, numerology and body awareness. Things clicked in a way that felt both grounding and insightful—not only understood in my mind, but felt in my body.',name:'Private client',kind:'Guidance session'}
];

const classes:Testimonial[]=[
  {quote:'It was my first time trying meditation and I found it an amazing experience. I felt energised and stronger, both physically and spiritually.',name:'Luke',kind:'Class participant'},
  {quote:'Laurine is a very kind and encouraging teacher. Her classes and challenges helped me achieve more than I hoped.',name:'Private client',kind:'Class participant'},
  {quote:'You received me with open arms and taught me everything I know. I always looked forward to the next class.',name:'Private client',kind:'Class participant'},
  {quote:'I arrived with low energy and left feeling peaceful, energised and more connected to myself. I will definitely come back.',name:'Private client',kind:'Guided practice'},
  {quote:'The group energy felt powerful and supportive. Even as a beginner, I felt guided through the experience and stronger afterwards.',name:'Private client',kind:'Breath & movement class'},
  {quote:'Laurine creates a warm space where there is no pressure to perform. The simple movements helped me feel more present in my body.',name:'Private client',kind:'Body awareness class'}
];

export function Testimonials(){
  const pathname=usePathname();
  const items=useMemo(()=>{
    if(pathname.includes('/services/massage')) return massage;
    if(pathname.includes('/services/one-to-one')) return oneToOne;
    if(pathname.includes('/services/classes')||pathname.includes('/workshops')) return classes;
    return [massage[0],oneToOne[0],classes[0],massage[8],oneToOne[5],classes[3],...massage.slice(-5)];
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
      <div className="testimonials-label"><div><p className="eyebrow">Testimonials</p><a className="google-review-link" href={config.googleBusiness} target="_blank" rel="noreferrer"><strong>5.0 ★</strong><span>5 Google reviews ↗</span></a></div><h2 id="testimonials-title">What they felt.</h2></div>
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

'use client';

import {FormEvent, useMemo, useState} from 'react';
import styles from './MassageBookingForm.module.css';

const massages=[
  {id:'body-60',title:'Body Ritual Massage',detail:'60 minutes',price:85,pressure:true},
  {id:'body-90',title:'Body Ritual Massage',detail:'90 minutes · recommended ritual',price:111,pressure:true},
  {id:'face-60',title:'Face Ritual Massage',detail:'60 minutes',price:95,pressure:false},
  {id:'face-90',title:'Face Ritual Massage',detail:'90 minutes',price:122,pressure:false}
] as const;

type MassageId=(typeof massages)[number]['id'];

export function MassageBookingForm(){
  const [massageId,setMassageId]=useState<MassageId>('body-60');
  const [higherPressure,setHigherPressure]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState('');
  const massage=massages.find(item=>item.id===massageId)!;
  const total=useMemo(()=>massage.price+(higherPressure&&massage.pressure?10:0),[massage,higherPressure]);

  function selectMassage(id:MassageId){
    setMassageId(id);
    if(!massages.find(item=>item.id===id)?.pressure) setHigherPressure(false);
  }

  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setLoading(true);
    setError('');
    const form=new FormData(event.currentTarget);
    try{
      const response=await fetch('/.netlify/functions/create-massage-checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
        massageId,
        higherPressure:higherPressure&&massage.pressure,
        name:form.get('name'),
        email:form.get('email'),
        phone:form.get('phone'),
        availability:form.get('availability'),
        alternativeAvailability:form.get('alternativeAvailability'),
        notes:form.get('notes')
      })});
      const data=await response.json();
      if(!response.ok||!data.url) throw new Error(data.error||'Unable to start payment.');
      window.location.assign(data.url);
    }catch(reason){
      setError(reason instanceof Error?reason.message:'Unable to start payment.');
      setLoading(false);
    }
  }

  return <form className={styles.form} onSubmit={submit}>
    <section className={styles.step}>
      <div className={styles.stepHeading}><span>01</span><div><p className={styles.eyebrow}>Your massage</p><h2>Choose your ritual.</h2></div></div>
      <div className={styles.offerGrid}>{massages.map(item=><button className={`${styles.offer} ${massageId===item.id?styles.selected:''}`} type="button" key={item.id} onClick={()=>selectMassage(item.id)} aria-pressed={massageId===item.id}><span><strong>{item.title}</strong><small>{item.detail}</small></span><b>€{item.price}</b></button>)}</div>
      {massage.pressure&&<label className={styles.addon}><input type="checkbox" checked={higherPressure} onChange={event=>setHigherPressure(event.target.checked)}/><span><strong>Add higher pressure</strong><small>A firmer massage experience</small></span><b>+€10</b></label>}
    </section>

    <section className={styles.step}>
      <div className={styles.stepHeading}><span>02</span><div><p className={styles.eyebrow}>Your availability</p><h2>When could you come?</h2><p>No fixed calendar slot is selected now. Share a few possibilities and Laurine will contact you after payment to confirm the appointment.</p></div></div>
      <div className={styles.fields}>
        <label><span>Name</span><input name="name" autoComplete="name" required/></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" required/></label>
        <label className={styles.full}><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" placeholder="Include your country code" required/></label>
        <label className={styles.full}><span>Preferred days and times</span><textarea name="availability" rows={4} placeholder="For example: Monday after 18:00, Wednesday morning, or Sunday afternoon" required/></label>
        <label className={styles.full}><span>Alternative availability <small>(optional)</small></span><textarea name="alternativeAvailability" rows={3} placeholder="Add other days or time windows that may work for you"/></label>
        <label className={styles.full}><span>Anything Laurine should know? <small>(optional)</small></span><textarea name="notes" rows={3} placeholder="Areas of tension, pregnancy, injury, allergy or relevant medical information"/></label>
      </div>
    </section>

    <aside className={styles.summary}>
      <p className={styles.eyebrow}>Your request</p>
      <h3>{massage.title}</h3>
      <p>{massage.detail}{higherPressure&&massage.pressure?' · Higher pressure':''}</p>
      <div className={styles.location}><small>Current massage address</small><div><strong>Papaverhof 71C</strong><span>1032 LX Amsterdam<br/>5th floor · rooftop</span></div><p className={styles.locationNote}>Sessions may take place across different wellness partner spaces. Laurine will personally confirm your exact location together with your appointment time after payment.</p></div>
      <div className={styles.total}><span>Total</span><strong>€{total}</strong></div>
      {error&&<p className={styles.error} role="alert">{error}</p>}
      <button className={styles.pay} type="submit" disabled={loading}>{loading?'Opening secure payment…':'Pay securely'}</button>
      <small className={styles.secure}>Secure payment powered by Stripe · Your appointment time and exact location will be confirmed personally after payment.</small>
    </aside>
  </form>;
}

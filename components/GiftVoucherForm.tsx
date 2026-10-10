'use client';

import {FormEvent, useMemo, useState} from 'react';
import styles from './GiftVoucherForm.module.css';

const offers = [
  {id:'massage-60', title:'Body Ritual Massage', detail:'60 minutes', price:85, pressure:true},
  {id:'massage-90', title:'Body Ritual Massage', detail:'90 minutes', price:101, pressure:true},
  {id:'sophrology', title:'Sophrology Session', detail:'60 minutes', price:60, pressure:false},
  {id:'breathwork', title:'Breathwork · Ice Bath · Sauna', detail:'One experience', price:29, pressure:false},
  {id:'custom', title:'Choose your amount', detail:'From €25 to €300', price:null, pressure:false}
] as const;

type OfferId=(typeof offers)[number]['id'];

export function GiftVoucherForm(){
  const [offerId,setOfferId]=useState<OfferId>('massage-60');
  const [customAmount,setCustomAmount]=useState('50');
  const [higherPressure,setHigherPressure]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState('');
  const offer=offers.find(item=>item.id===offerId)!;
  const total=useMemo(()=>offer.price===null?Number(customAmount||0):offer.price+(higherPressure&&offer.pressure?10:0),[offer,customAmount,higherPressure]);

  function chooseOffer(id:OfferId){
    setOfferId(id);
    if(!offers.find(item=>item.id===id)?.pressure) setHigherPressure(false);
    setError('');
  }

  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setError('');
    if(offerId==='custom'&&(total<25||total>300)){
      setError('Please choose an amount between €25 and €300.');
      return;
    }
    setLoading(true);
    const form=new FormData(event.currentTarget);
    try{
      const response=await fetch('/.netlify/functions/create-voucher-checkout',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          offerId,
          customAmount:offerId==='custom'?total:undefined,
          higherPressure:higherPressure&&offer.pressure,
          buyerEmail:form.get('buyerEmail'),
          recipientName:form.get('recipientName'),
          senderName:form.get('senderName'),
          message:form.get('message')
        })
      });
      const data=await response.json();
      if(!response.ok||!data.url) throw new Error(data.error||'Unable to start payment.');
      window.location.assign(data.url);
    }catch(reason){
      setError(reason instanceof Error?reason.message:'Unable to start payment. Please try again.');
      setLoading(false);
    }
  }

  return <form className={styles.form} onSubmit={submit}>
    <section className={styles.step}>
      <div className={styles.stepHeading}><span>01</span><div><p className={styles.eyebrow}>Choose the experience</p><h2>What would you like to offer?</h2></div></div>
      <div className={styles.offerGrid}>
        {offers.map(item=><button className={`${styles.offer}${offerId===item.id?` ${styles.selected}`:''}`} type="button" key={item.id} onClick={()=>chooseOffer(item.id)} aria-pressed={offerId===item.id}>
          <span><strong>{item.title}</strong><small>{item.detail}</small></span>
          <b>{item.price===null?'Your choice':`€${item.price}`}</b>
        </button>)}
      </div>
      {offerId==='custom'&&<label className={styles.amount}>Gift amount (€)<input type="number" min="25" max="300" step="1" value={customAmount} onChange={event=>setCustomAmount(event.target.value)} required/></label>}
      {offer.pressure&&<label className={styles.addon}><input type="checkbox" checked={higherPressure} onChange={event=>setHigherPressure(event.target.checked)}/><span><strong>Add higher pressure</strong><small>A firmer massage experience</small></span><b>+€10</b></label>}
    </section>

    <section className={styles.step}>
      <div className={styles.stepHeading}><span>02</span><div><p className={styles.eyebrow}>Personalise your gift</p><h2>Make it theirs.</h2></div></div>
      <div className={styles.fields}>
        <label>To<input name="recipientName" maxLength={80} placeholder="Recipient's name" required/></label>
        <label>From<input name="senderName" maxLength={80} placeholder="Your name" required/></label>
        <label className={styles.full}>Your personal message<textarea name="message" maxLength={300} placeholder="Write a few words for them…" required/></label>
        <label className={styles.full}>Your email<input name="buyerEmail" type="email" placeholder="you@email.com" required/><small>The gift voucher will be sent to you first, ready to share.</small></label>
      </div>
    </section>

    <aside className={styles.summary}>
      <div><p className={styles.eyebrow}>Your gift</p><h3>{offer.title}</h3><p>{offer.detail}{higherPressure&&offer.pressure?' · Higher pressure':''}</p></div>
      <div className={styles.total}><span>Total</span><strong>€{Number.isFinite(total)?total:0}</strong></div>
      {error&&<p className={styles.error} role="alert">{error}</p>}
      <button className={styles.pay} type="submit" disabled={loading}>{loading?'Opening secure payment…':`Continue to payment · €${Number.isFinite(total)?total:0}`}</button>
      <small className={styles.secure}>Secure payment powered by Stripe · Voucher emailed after payment</small>
    </aside>
  </form>;
}

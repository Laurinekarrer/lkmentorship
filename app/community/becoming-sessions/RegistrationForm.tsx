'use client';
import { FormEvent, useState } from 'react';
import styles from './page.module.css';

type Status = 'idle' | 'sending' | 'submitted' | 'error';
export default function RegistrationForm({price, paymentUrl, cancellationPolicy}:{price:number;paymentUrl:string;cancellationPolicy:string}){
  const [status,setStatus] = useState<Status>('idle');
  const [error,setError] = useState('');
  const paymentOpen = /^https:\/\/buy\.stripe\.com\//.test(paymentUrl) && Boolean(cancellationPolicy);
  async function send(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form = event.currentTarget;
    if(!form.reportValidity()) return;
    setStatus('sending'); setError('');
    const data = new FormData(form);
    data.set('form-name','becoming-session-01');
    data.set('registration_status', paymentOpen ? 'payment_to_be_completed' : 'priority_list_only');
    try {
      const response = await fetch('/__forms.html', {
        method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body: new URLSearchParams(Array.from(data.entries()).filter(([,value])=>typeof value === 'string') as [string,string][]).toString()
      });
      if(!response.ok) throw new Error('Submission not accepted');
      setStatus('submitted');
    } catch {setStatus('error');setError('Something went wrong. Please try again or contact Laurine through the website.');}
  }
  return <>
    <h3>{paymentOpen ? 'Reserve your interest' : 'Join the priority list'}</h3>
    <p className={styles.formIntro}>{paymentOpen ? 'A few details, then a secure payment of €'+price+'.' : 'Leave your details and be first to know when the €'+price+' booking opens.'}</p>
    {status === 'submitted' ? <div className={styles.feedback} role="status">
      <h4>Thank you for reaching out. ✧</h4>
      {paymentOpen ? <><p>Your details were submitted. <strong>This is not yet a confirmed seat.</strong> Continue to Stripe and use the same email address you entered above. A seat is only confirmed after payment verification and organiser confirmation.</p><a className={styles.primary} href={paymentUrl} target="_blank" rel="noopener noreferrer">Continue to secure payment · €{price} ↗</a></> : <p>You're on the priority list for Session 01. We'll be in touch when the venue and €{price} checkout are available. No payment was taken and no seat has been reserved.</p>}
    </div> : <form name="becoming-session-01" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={send} className={styles.form}>
      <input type="hidden" name="form-name" value="becoming-session-01" />
      <input type="hidden" name="session" value="01 — Who Am I Becoming? — 2026-10-26 14:00" />
      <input type="hidden" name="registration_status" value={paymentOpen ? 'payment_to_be_completed' : 'priority_list_only'} />
      <p className={styles.honey} aria-hidden="true"><label>Don't fill this out: <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className={styles.two}><label>First name *<input name="first_name" required maxLength={80} autoComplete="given-name" placeholder="Your first name" /></label><label>Email address *<input name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@example.com" /></label></div>
      <label>What brings you to Becoming Sessions? *<select name="motivation" required defaultValue=""><option value="" disabled>Choose what resonates most</option><option value="Identity and change">Identity and change</option><option value="Belonging and connection">Belonging and connection</option><option value="Emotional awareness">Emotional awareness</option><option value="Clarity and next steps">Clarity and next steps</option><option value="Curiosity and self-discovery">Curiosity and self-discovery</option></select></label>
      <label>Would you consider attending the five-session journey?<select name="series_interest" defaultValue="Maybe"><option>Yes, I'd love to explore all five</option><option>Maybe</option><option>Only this first session for now</option></select></label>
      <label>Anything you'd like your host to know? (optional)<textarea name="note" maxLength={350} rows={3} placeholder="For example, accessibility or practical questions. No personal health details needed." /></label>
      <label className={styles.tick}><input type="checkbox" name="event_contact_consent" value="yes" required /><span>I agree to be contacted about this session and understand that completing this form alone does not reserve a paid seat. *</span></label>
      <label className={styles.tick}><input type="checkbox" name="marketing_opt_in" value="yes" /><span>I'd also like occasional updates about future Becoming Club events (optional).</span></label>
      {paymentOpen && <p className={styles.terms}><strong>Cancellation terms:</strong> {cancellationPolicy}</p>}
      <button className={styles.submit} type="submit" disabled={status==='sending'}>{status==='sending' ? 'Submitting…' : paymentOpen ? `Continue to payment · €${price}` : 'Join priority list'}</button>
      <p className={styles.formNote}>Your information is used to respond to your booking enquiry. Please don't include sensitive personal or health information. Payment, when enabled, is processed securely by Stripe; no card details are collected here.</p>
      {status==='error' && <p role="alert" className={styles.error}>{error}</p>}
    </form>}
  </>;
}

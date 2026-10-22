'use client';

import { FormEvent, useState } from 'react';
import styles from './page.module.css';

type State = 'idle' | 'sending' | 'sent' | 'error';
const contact = 'info.laurinekarrerstudio@gmail.com';

export default function WaitlistForm() {
  const [status, setStatus] = useState<State>('idle');
  const [fallbackHref, setFallbackHref] = useState(`mailto:${contact}?subject=Becoming%20Sessions%20waitlist`);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    fields.set('form-name', 'becoming-sessions-waitlist');
    fields.set('source', 'becoming-sessions-page');
    const firstName = String(fields.get('first_name') || '');
    const email = String(fields.get('email') || '');
    const body = `Hi Laurine,\n\nI'd like to join the Becoming Sessions waitlist.\n\nFirst name: ${firstName}\nEmail: ${email}\n\nI agree to be contacted about future Becoming Sessions dates.\n`;
    setFallbackHref(`mailto:${contact}?subject=${encodeURIComponent('Becoming Sessions waitlist')}&body=${encodeURIComponent(body)}`);
    setStatus('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Array.from(fields.entries()).filter(([, value]) => typeof value === 'string') as [string, string][]).toString(),
      });
      if (!response.ok) throw new Error('Waitlist submission failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return <div className={styles.feedback} role="status">
      <h3>Thank you for your interest ♡</h3>
      <p>We've received your request to join the Becoming Sessions waitlist. We'll email you when the next dates are announced. No payment has been taken.</p>
    </div>;
  }

  return <>
    <h3>Join the waitlist ♡</h3>
    <p className={styles.formIntro}>Leave your first name and email to hear when our guided circles return.</p>
    <form className={styles.form} name="becoming-sessions-waitlist" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}>
      <input type="hidden" name="form-name" value="becoming-sessions-waitlist" />
      <input type="hidden" name="source" value="becoming-sessions-page" />
      <p className={styles.honey} aria-hidden="true"><label>Leave this blank: <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className={styles.two}>
        <label>First name *<input type="text" name="first_name" autoComplete="given-name" placeholder="Your first name" maxLength={80} required /></label>
        <label>Email address *<input type="email" name="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required /></label>
      </div>
      <label className={styles.tick}>
        <input type="checkbox" name="contact_consent" value="yes" required />
        <span>I agree to be contacted about future Becoming Sessions dates. *</span>
      </label>
      <button className={styles.submit} type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Joining…' : 'Join the waitlist ↗'}</button>
      <p className={styles.formNote}>No payment or commitment. Your details are only used for Becoming Sessions updates related to this request. To ask for removal, email {contact}.</p>
      {status === 'error' && <div className={styles.error} role="alert">The form couldn't be sent automatically. You can still join by emailing me directly: <a href={fallbackHref} style={{textDecoration:'underline',fontWeight:700}}>Send my waitlist request ↗</a> or write to {contact}.</div>}
    </form>
  </>;
}

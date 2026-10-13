'use client';

import { FormEvent, useState } from 'react';
import styles from './page.module.css';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function InterestForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus('sending');
    setError('');
    const fields = new FormData(form);
    fields.set('form-name', 'becoming-club-interest');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Array.from(fields.entries()).filter(([, v]) => typeof v === 'string') as [string, string][]).toString(),
      });
      if (!response.ok) throw new Error('The submission could not be sent.');
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError('Please try again or email us directly.');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Becoming Club interest form">
      <input type="hidden" name="form-name" value="becoming-club-interest" />
      <p className={styles.honey} aria-hidden="true">
        <label>Leave this blank: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>
      <div className={styles.fieldRow}>
        <label>First name *<input name="first_name" type="text" autoComplete="given-name" required maxLength={100} placeholder="Your name" /></label>
        <label>Email address *<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
      </div>
      <div className={styles.fieldRow}>
        <label>What interests you most? *
          <select name="interest" defaultValue="" required>
            <option value="" disabled>Choose one</option>
            <option value="Coffee & Connection">Coffee & Connection</option>
            <option value="Becoming Sessions">Becoming Sessions</option>
            <option value="Both">Both formats</option>
          </select>
        </label>
        <label>What would you like to find? (optional)
          <select name="hope" defaultValue="">
            <option value="">Choose if you wish</option>
            <option value="New friendships">New friendships</option>
            <option value="Meaningful conversation">Meaningful conversations</option>
            <option value="Self-discovery">Self-discovery</option>
            <option value="Discover Amsterdam">Discover Amsterdam</option>
          </select>
        </label>
      </div>
      <label className={styles.agreement}>
        <input name="contact_consent" type="checkbox" value="yes" required />
        <span>I agree to be contacted about The Becoming Club events and my enquiry. *</span>
      </label>
      <button className={styles.buttonPrimary} type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Keep me posted'}
      </button>
      <p className={styles.formSmall}>Interest only — not a seat reservation. We'll only use your email for club updates. You can request deletion at any time.</p>
      {status === 'sent' && <p className={styles.success} role="status">Thank you! Your message has been received. We’ll get back to you with upcoming dates. This is not a reserved place.</p>}
      {status === 'error' && <p className={styles.error} role="alert">{error}</p>}
    </form>
  );
}

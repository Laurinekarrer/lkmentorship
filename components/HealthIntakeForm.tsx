'use client';

import {useEffect,useState} from 'react';

export function HealthIntakeForm(){
  const [sent,setSent]=useState(false);
  useEffect(()=>setSent(new URLSearchParams(window.location.search).get('intake')==='sent'),[]);
  if(sent) return <div className="intake-success" role="status"><p className="eyebrow">Personal note received</p><h2>Thank you.</h2><p>I&apos;ll keep it in mind when preparing your session.</p></div>;
  return <details className="intake-details">
    <summary>Personalise my session <span>Optional</span></summary>
    <form className="health-intake" name="massage-health-intake" method="POST" action="/booking/confirmation?intake=sent" data-netlify="true">
      <input type="hidden" name="form-name" value="massage-health-intake"/>
      <div className="intake-heading"><p className="eyebrow">A small note before your moment</p><h2>Tell me what feels useful.</h2><p>Share only what may help me care for you.</p></div>
      <div className="form">
        <div className="field"><label htmlFor="intake-name">Name</label><input id="intake-name" name="name" autoComplete="name" required/></div>
        <div className="field"><label htmlFor="intake-email">Booking email</label><input id="intake-email" name="email" type="email" autoComplete="email" required/></div>
        <div className="field full"><label htmlFor="intake-note">Anything I should know?</label><textarea id="intake-note" name="personal-note" placeholder="Tension, pain, injury, pregnancy, sensitivity, preferred pressure or an area to avoid…"/></div>
        <div className="field full"><label htmlFor="intake-discovery">How did you find me? <span>(optional)</span></label><select id="intake-discovery" name="discovery" defaultValue=""><option value="">Choose if you wish</option><option>Google</option><option>Instagram</option><option>Recommendation</option><option>Partner wellness space</option><option>Previous session</option><option>Other</option></select></div>
        <div className="field full"><label className="consent-check intake-permission"><input type="checkbox" name="note-permission" value="yes" required/><span>I agree that Laurine may use this information only to prepare my session.</span></label></div>
        <div className="field full"><button className="btn primary" type="submit">Send my note</button></div>
      </div>
    </form>
  </details>;
}

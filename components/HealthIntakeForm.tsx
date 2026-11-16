'use client';

import {useEffect,useState} from 'react';

export function HealthIntakeForm(){
  const [sent,setSent]=useState(false);
  const [answer,setAnswer]=useState<'yes'|'no'|null>(null);
  useEffect(()=>setSent(new URLSearchParams(window.location.search).get('intake')==='sent'),[]);
  if(sent) return <div className="intake-success" role="status"><p className="eyebrow">Personal note received</p><h2>Thank you.</h2><p>I&apos;ll keep it in mind when preparing your session.</p></div>;
  if(answer==='no') return <div className="intake-success" role="status"><p className="eyebrow">You&apos;re all set</p><h2>Thank you.</h2><p>Laurine will contact you personally with your appointment details.</p></div>;
  if(answer===null) return <div className="intake-question"><p className="eyebrow">Before your moment</p><h2>Is there anything I should know?</h2><p>You can share a tension, injury, sensitivity, preferred pressure or area to avoid.</p><div className="buttons"><button className="btn primary" type="button" onClick={()=>setAnswer('yes')}>Yes, add a note</button><button className="btn" type="button" onClick={()=>setAnswer('no')}>No, I&apos;m all set</button></div></div>;
  return <div className="intake-details intake-details-open">
    <form className="health-intake" name="massage-health-intake" method="POST" action="/booking/confirmation?intake=sent" data-netlify="true">
      <input type="hidden" name="form-name" value="massage-health-intake"/>
      <div className="intake-heading"><p className="eyebrow">A small note before your moment</p><h2>Tell me what feels useful.</h2><p>Share only what may help me care for you.</p></div>
      <div className="form">
        <div className="field"><label htmlFor="intake-name">Name</label><input id="intake-name" name="name" autoComplete="name" required/></div>
        <div className="field"><label htmlFor="intake-email">Booking email</label><input id="intake-email" name="email" type="email" autoComplete="email" required/></div>
        <div className="field full"><label htmlFor="intake-note">Anything I should know?</label><textarea id="intake-note" name="personal-note" placeholder="Tension, pain, injury, pregnancy, sensitivity, preferred pressure or an area to avoid…"/></div>
        <div className="field full"><label htmlFor="intake-discovery">How did you find me? <span>(optional)</span></label><select id="intake-discovery" name="discovery" defaultValue=""><option value="">Choose if you wish</option><option>Google</option><option>Instagram</option><option>Recommendation</option><option>Partner wellness space</option><option>Previous session</option><option>Other</option></select></div>
        <div className="field full"><button className="btn primary" type="submit">Send my note</button></div>
      </div>
    </form>
  </div>;
}

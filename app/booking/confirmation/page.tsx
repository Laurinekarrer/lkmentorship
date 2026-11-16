import Link from 'next/link';
import type {Metadata} from 'next';
import {HealthIntakeForm} from '@/components/HealthIntakeForm';

export const metadata:Metadata={title:'Booking received',robots:{index:false,follow:false}};

export default function BookingConfirmation(){return <section className="section"><div className="shell" style={{maxWidth:960,textAlign:'center'}}>
  <p className="eyebrow">Payment confirmed</p>
  <h1 style={{fontSize:'clamp(3.2rem,8vw,6.8rem)'}}>Thank you for your booking.</h1>
  <p style={{maxWidth:680,margin:'0 auto'}}>Your payment has been received. Laurine will personally contact you with the practical details of your appointment.</p>
  <HealthIntakeForm/>
  <div className="confirmation-note"><p className="eyebrow">What happens next?</p><p>Stay tuned: you will receive a personal message from Laurine confirming your session details and exact location in Amsterdam.</p></div>
  <div className="buttons" style={{justifyContent:'center'}}><Link className="btn primary" href="/">Return home</Link><Link className="btn" href="/cancellation-policy">Cancellation policy</Link></div>
</div></section>}

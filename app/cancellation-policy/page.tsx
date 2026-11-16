import Link from 'next/link';
import type {Metadata} from 'next';
import {config} from '@/content/site';

export const metadata:Metadata={title:'Massage Cancellation Policy | Laurine Karrer Studio',description:'Cancellation, rescheduling and refund conditions for massage appointments with Laurine Karrer Studio in Amsterdam.'};

export default function CancellationPolicy(){return <><section className="page-head shell"><p className="eyebrow">Booking information</p><h1>Cancellation policy.</h1><p>Clear and simple conditions so your appointment can be prepared with care.</p></section><section className="section shell"><div className="cards">
  <article className="card"><p className="eyebrow">24 hours or more</p><h3>Cancel or reschedule.</h3><p>You may cancel for a full refund or request a new appointment time when you contact Laurine at least 24 hours before your session.</p></article>
  <article className="card"><p className="eyebrow">Less than 24 hours</p><h3>Late cancellation.</h3><p>Payments are normally non-refundable when a cancellation is made less than 24 hours before the appointment. Exceptional circumstances may be considered individually.</p></article>
  <article className="card"><p className="eyebrow">No-show</p><h3>Missed appointment.</h3><p>A missed appointment without notice is non-refundable. If Laurine needs to cancel, you may choose a new appointment or receive a full refund.</p></article>
</div><div style={{maxWidth:760,margin:'52px auto 0'}}><h2>How to cancel</h2><p>Contact Laurine using the same name and email address as your booking at <a href={`mailto:${config.email}`}>{config.email}</a>. Approved refunds are returned to the original payment method; processing time depends on your payment provider.</p><p><small>These conditions do not limit any mandatory consumer rights that may apply.</small></p><div className="buttons"><Link className="btn primary" href="/booking">Return to booking</Link></div></div></section></>}

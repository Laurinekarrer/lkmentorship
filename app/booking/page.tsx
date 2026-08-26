import type {Metadata} from 'next';
import {config} from '@/content/site';

export const metadata:Metadata={
  title:'Book a session',
  description:'Book an in-person or online session with Laurine Karrer.'
};

export default function Booking(){
  return <>
    <section className="page-head shell booking-head">
      <p className="eyebrow">Booking</p>
      <h1>Choose your moment.</h1>
      <p>Select the experience and time that feel right for you. In-person sessions take place in Amsterdam; online sessions are available through video call.</p>
    </section>
    <section className="booking-section shell">
      <div className="booking-frame-wrap">
        <iframe
          className="booking-frame"
          src={`${config.calUrl}?embed=true&theme=light`}
          title="Book a session with Laurine Karrer"
          loading="eager"
          allow="camera; microphone; fullscreen; payment"
        />
      </div>
      <p className="booking-fallback">Having trouble viewing the calendar? <a href={config.calUrl} target="_blank" rel="noreferrer">Open the booking page ↗</a></p>
    </section>
    <section className="section booking-contact-section">
      <div className="shell booking-contact">
        <div>
          <p className="eyebrow">More questions?</p>
          <h2>Let&apos;s find the right session.</h2>
          <p>If you are unsure which experience to choose, tell me what you are currently navigating. I will help you identify the most relevant format.</p>
          <p><a className="text-link" href={`mailto:${config.email}`}>{config.email}</a></p>
        </div>
        <form className="form" action={`mailto:${config.email}`} method="post" encType="text/plain">
          <div className="field"><label htmlFor="booking-name">Name</label><input id="booking-name" name="name" required/></div>
          <div className="field"><label htmlFor="booking-email">Email</label><input id="booking-email" name="email" type="email" required/></div>
          <div className="field full"><label htmlFor="booking-type">Enquiry type</label><select id="booking-type" name="type"><option>Choosing a session</option><option>Booking question</option><option>Workshop</option><option>Partnership</option><option>Other</option></select></div>
          <div className="field full"><label htmlFor="booking-message">Message</label><textarea id="booking-message" name="message" required/></div>
          <div className="field full"><button className="btn primary" type="submit">Send a message</button></div>
        </form>
      </div>
    </section>
  </>;
}

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
  </>;
}

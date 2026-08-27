import type {Metadata} from 'next';
import {config} from '@/content/site';
import {BookShopTabs} from '@/components/BookShopTabs';

export const metadata:Metadata={
  title:'Book & Shop',
  description:'Book an in-person or online sophrology, ritual massage, guidance or breathwork session with Laurine Karrer in Amsterdam.',
  alternates:{canonical:'/booking'}
};

export default function Booking(){
  return <>
    <section className="page-head shell booking-head">
      <p className="eyebrow">Book &amp; Shop</p>
      <h1>Choose what supports you.</h1>
      <p>Book an in-person or online experience, or discover practices designed to accompany you beyond the session.</p>
    </section>
    <div className="shell commerce-shell"><BookShopTabs/></div>
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
